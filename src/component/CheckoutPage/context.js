import { createContext, Text, useContext, useReducer, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { notifications } from '@mantine/notifications';
import authService from '../../Services/authservices';
import axios from 'axios';
import ProductCartService from '../../Services/cartServices';
import paymentService from '../../Services/paymentServices';
import { useNavigate } from "react-router-dom";
export const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
    const navigate=useNavigate();
    const [userDetail, setUserDetail] = useState();
    const [addlist,setAddlist]=useState([]);
    const [list,setList]=useState([]);
    const [pricedata,setPriceData]=useState({});
    const AddCustomer = async (values) => {

        console.log(values)
        const apidata = {
            name: `${values.firstname} ${values.lastname}`,
            email: values.email,
            mobile: values.mobileno,
            usertype: "guest",
        }
        const apicall = await authService.createcustomer(apidata)
        console.log(apicall)
        if (apicall.status === 201) {
            setUserDetail(apicall.data.result)
            localStorage.setItem("userid", apicall.data.result._id)
        }
        else {
            // showing error message
        }

    }
    const addcustomerAddress = async (values) => {
        console.log(values, userDetail)
        const apidata = {
            userid: userDetail._id,
            name: values.name,
            address: values.address,
            city: values.city,
            zipcode: values.zipcode,
            country: values.country,
            landemark: values.landemark,
            alternatemobilenumber: values.mobileno
        }
        const apicall = await authService.createcustomeraddress(apidata)
        console.log(apicall)
        const data=userDetail
        data["addressid"]=apicall.data.result._id
        console.log(data)
        setUserDetail(data)
    }
    const fetchCartProductDetail=async()=>{
        const data = JSON.parse(localStorage.getItem('cartItems')) || []

        const apicall=await ProductCartService.getProductDetailBymultiId(data)
        console.log(apicall)
        if(apicall.status===200){
            if(apicall.data.result.length>0){
                const savedata=[]
                apicall.data.result.forEach((ex)=>{
                    const setdata={
                        name:ex?.product?.name ? ex?.product?.name :"",
                        price:ex?.detail.price ? ex?.detail.price:0,
                        size:ex?.activesize?.label ? ex?.activesize?.label :"",
                        color:ex?.activecolor?.label ? ex?.activecolor?.label :"",
                        length:ex?.activelength?.label ? ex?.activelength?.label :"",
                        id:ex?.product?._id ? ex?.product?._id :"",
                        image:ex?.detail?.image  ? ex?.detail?.image :"",
                        quantity:ex?.buyquantity ? ex?.buyquantity :0
                    }
                    savedata.push(setdata)
                })
                const pricedatas={
                    totalprice:apicall?.data?.totalprice ?apicall?.data?.totalprice :0,
                    shippingcharge:apicall?.data?.shippingCharge ?apicall?.data?.shippingCharge :0,
                    tax:apicall?.data?.tax ?apicall?.data?.tax :0,
                    off:apicall?.data.off ? apicall?.data.off:0,
                    realprice:apicall?.data.realprice ? apicall?.data.realprice :0
                }
                setList(savedata)
                setPriceData(pricedatas)
            }
        }
    }
    const paymentsuccess= async(apidata) =>{
        const apicall=await paymentService.successPayment(apidata);
        console.log(apicall)
        navigate('/orderhistory')

    }
    const handlePayment = async (pricedata) => {
        try {
            // Create an order from your backend
            const apidata = {
                "userid": userDetail._id,
                "addressid": userDetail.addressid,
                "amount": Number(pricedata.realprice),
                "currency": "INR",
                "receipt": "order_rcptid_11",
                "productlist": list
            }
            console.log(apidata)
            const orderResponse = await axios.post('http://localhost:8000/order', apidata);
            console.log(orderResponse.data)
            const { amount, id: order_id, currency, } = orderResponse.data;

            const options = {
                key: 'rzp_test_XGDvrjGB491HEM', // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: 'Your Company Name',
                description: 'Test Transaction',
                order_id: order_id,
                handler: function (response) {
                    // Validate payment at backend - using API call
                    const apidata={
                        razorpay_payment_id:response.razorpay_payment_id,
                        razorpay_order_id:response.razorpay_order_id,
                        razorpay_signature:response.razorpay_signature,
                        paymentid:orderResponse.data.paymentid
                    }
                    paymentsuccess(apidata)

                
                },
                prefill: {
                    name: userDetail.name,
                    email: userDetail.email,
                    contact: 8962544890,
                },
                notes: {
                    address: 'Razorpay Corporate Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }
    const fetchUserdetailbyid = async () => {
        const userid = localStorage.getItem('userid') || null
        if (userid) {
            const apicall = await authService.getcustomerbyid(userid)
            console.log(apicall)
            if (apicall.status === 200) {
                setUserDetail(apicall.data.result)
                if(apicall.data.result){
                    // fetch customer address
                    const apicall = await authService.getcustomeraddressbyuserid(userid)
                    console.log(apicall)
                    if(apicall.status==200){
                        if(apicall.data.result.length>0){
                            setAddlist(apicall.data.result)
                        }
                    }
 
                }
            }
        }
    }
    useEffect(() => {
        fetchCartProductDetail()
        fetchUserdetailbyid()
    }, [])
    return (
        <CheckoutContext.Provider value={{addlist, handlePayment, userDetail, AddCustomer, addcustomerAddress }}>
            {children}
        </CheckoutContext.Provider>
    );
};
export default CheckoutProvider;