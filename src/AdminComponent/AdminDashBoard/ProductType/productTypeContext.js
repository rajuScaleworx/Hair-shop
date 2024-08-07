import { createContext,useEffect,useState } from "react";
import productTypeService from '../../../Services/AdminServices/productTypeService';
import useNotification from '../../../component/resuable/useNotification';
export const ProducttypeContext =createContext();

const ProductTypeProvider = ({ children }) => {
    const { notifySuccess, notifyError } = useNotification();
    const [showCreateForm, setCreateForm] = useState(false)
    const [updateDetail,setUpdateDetail]=useState()
   const [producttype, setproducttype] = useState([]);
   const [submitloading,setSubmitloading]=useState(false)
   const CreateProductType=async(values)=>{
    setSubmitloading(true)
        console.log(values)
        const apidata={
            name:values.name,
            desc:values.desc
        }
        const apicall=await productTypeService.createProductType(apidata)
        console.log(apicall)
        if(apicall.status===201){
            setCreateForm(false)
            notifySuccess("Product Type Created Successfully")
            setSubmitloading(false)
        }
        else{
            notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Create Product Type")
            setSubmitloading(false)

        }
   }
   const getproducttypeList=async()=>{
            const apicall=await productTypeService.getProductType()
            console.log(apicall)
            if(apicall?.status===200){
                if(apicall.data.result.length>0){
                    setproducttype(apicall.data.result)
                }
                else{
                    setproducttype([])
                }
            }
            else{
                setproducttype([])
            }
   }
   const updateProductTypeclick= async(value)=>{
    setUpdateDetail({
        name:value.name,id:value._id
    })
    setCreateForm(true)
   }
   const updateProductType =async(value)=>{
    setSubmitloading(true)
    const apidata={ 
        name:value.name,
        id:updateDetail.id
    }
    const apicall=await productTypeService.updateProductType(apidata)
    console.log(apicall)
    if(apicall.status===200){
        notifySuccess("Product Type Update Successfully")
        setCreateForm(false)
        setSubmitloading(false)

    }
    else{
        notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Update Product Type")
        setSubmitloading(false)

    }
   }
   const deleteProductTypeclick=async(value)=>{
    
        const apicall=await productTypeService.deleteProductType(value._id)
        console.log(apicall)
        if(apicall.status===200){
            notifySuccess("Product Type Delete Successfully")
            getproducttypeList()
        }
        else{
            notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Delete Product Type")
        }
    }

    return (
        <ProducttypeContext.Provider value={{
            CreateProductType,getproducttypeList,
            showCreateForm, setCreateForm,producttype,updateProductTypeclick,
            updateDetail,setUpdateDetail,updateProductType,
            deleteProductTypeclick,submitloading
        }}>
            {children}
        </ProducttypeContext.Provider>
    );
};
export default ProductTypeProvider;
