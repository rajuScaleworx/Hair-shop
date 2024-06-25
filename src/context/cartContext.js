import { createContext,Text, useContext, useReducer, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { notifications } from '@mantine/notifications';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const params = useParams()
    // const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") || []);
    const [productCount, setProductCount] = useState(0)
    const [cartNumber, setCartNumber] = useState(0);
    console.log(params)
    // const [cartTotal, setCartTotal] = useState(0);
    const addtocart = (detail, type, formvalue) => {
        const lastlist = JSON.parse(localStorage.getItem("cartItems")) || []
        console.log(lastlist)
        console.log(lastlist)
        console.log(formvalue)
        console.log(detail)

        const productdata = {
            color: formvalue.color,
            size: formvalue.size,
            length: formvalue.length,
            productId: detail.id
        }
        if (type === "inc") {
            if (lastlist.length > 0) {
                const existingItem = lastlist.find(
                    (item) => item.productId === detail.id
                );
                console.log(existingItem)
                if (existingItem) {
                    const quantitysave = existingItem.quantity
                    existingItem.quantity = existingItem.quantity + 1
                    existingItem.color = formvalue.color;
                    existingItem.size = formvalue.size;
                    existingItem.length = formvalue.length;
                    const filter = lastlist.filter((el) => {
                        return el.productId !== detail.id
                    })
                    setTimeout(() => {
                        const setarr = filter
                        setarr.push(existingItem)
                        localStorage.setItem("cartItems", JSON.stringify(setarr))
                        setCartItems([...filter, existingItem]);
                        setProductCount(quantitysave + 1)
                    }, 500);
                }
                else {
                    productdata.quantity = 1
                    setProductCount(1)
                    lastlist.push(productdata)
                    localStorage.setItem("cartItems", JSON.stringify(lastlist))
                }
            }
            else {
                productdata.quantity = 1
                setProductCount(1)
                lastlist.push(productdata)
                localStorage.setItem("cartItems", JSON.stringify(lastlist))
            }

        }
        else {

            if (lastlist.length > 0) {
                const existingItem = lastlist.find(
                    (item) => item.productId === detail.id
                )
                if (existingItem) {
                    if (existingItem.quantity > 0) {
                        const quantitysave = existingItem.quantity
                        existingItem.quantity = existingItem.quantity - 1
                        existingItem.color = formvalue.color;
                        existingItem.size = formvalue.size;
                        existingItem.length = formvalue.length;
                        const filter = lastlist.filter((el) => {
                            return el.productId !== detail.id
                        })

                        setTimeout(() => {
                            const setarr = filter
                            setarr.push(existingItem)
                            localStorage.setItem("cartItems", JSON.stringify(setarr))
                            setCartItems([...filter, existingItem]);
                            setProductCount(quantitysave - 1)
                        }, 500);
                    }
                    else if (existingItem.quantity === 0) {

                    }
                }
                else {

                }
            }
        }
    }
    const removeproductfromcart = (detail) => {
        const filterlist = cartItems.filter((ef) => {
            return ef.id !== detail.id
        })
        setCartItems(filterlist)

    }
    const findproductaddincart = (id) => {
        const lastlist = JSON.parse(localStorage.getItem("cartItems")) || []

        var existingItem = lastlist.find(
            (item) => item.productId === id
        );
        // alert(existingItem?.productId)
        return existingItem?.productId ? false : true

    }
    useEffect(() => {
        const lastlist = JSON.parse(localStorage.getItem("cartItems")) || []
        if (lastlist.length > 0) {
            setCartNumber(lastlist.length)
            const existingItem = lastlist.find(
                (item) => `${item.productId}` === `${params.productid}`
            );
            console.log(existingItem, params.productid)
            if (existingItem?.productId) {
                const quantitysave = existingItem.quantity
                setProductCount(quantitysave)
            }
            else {
                setProductCount(0)
            }

        }

    }, [])
    const cartProductDetailFetch = () => {
        const cartitem = JSON.parse(localStorage.getItem('cartItems')) || [];
        const arrproductid = []
        if (cartitem.length > 0) {
            cartitem.forEach(element => {
                arrproductid.push(element.productId)
            });

        }
        else {

        }
        console.log(arrproductid)
    }
    const addproductincart = (detail) => {
        const lastlist = JSON.parse(localStorage.getItem("cartItems")) || []
        const existingItem = lastlist.find(
            (item) => item.productId === detail.id
        )
        if (existingItem) {

        }
        else {

        }
    }
    const addcartproduct = (detail) => {
        console.log(detail)
        const lastlist = JSON.parse(localStorage.getItem("cartItems")) || []
        const existingItem = lastlist.find(
            (item) => item.productId === detail._id
        );
        if(existingItem){
           // show msg already card added
            notifications.show({
                bg: 'green',
                color:"green",
                title: "Product already Added in Cart!",

              })
        }
        else{
            
            if(detail.productdetail ===undefined){
                const productdata = {
                    color: "",
                    size: "",
                    length:"",
                    productId: detail?._id ? detail._id :detail.id,
                    quantity: 1,
                }
                lastlist.push(productdata)
                setCartItems(lastlist);
                localStorage.setItem("cartItems", JSON.stringify(lastlist))
                setCartNumber(lastlist.length)
                notifications.show({
                    bg: 'green',
                    color:"green",
                    title: "Product Add in Cart!",
    
                  })
            }
            else{
                const productdata = {
                    color: detail?.productdetail[0]?.colorid[0] ? detail?.productdetail[0]?.colorid[0][0] :"",
                    size: detail?.productdetail[0]?.sizeid[0] ? detail?.productdetail[0]?.sizeid[0][0] :"",
                    length: detail?.productdetail[0]?.lengthid[0] ? detail?.productdetail[0]?.lengthid[0][0] :"",
                    productId: detail?._id ? detail._id :detail.id,
                    quantity: 1,
                }
                lastlist.push(productdata)
                setCartItems(lastlist);
                localStorage.setItem("cartItems", JSON.stringify(lastlist))
                setCartNumber(lastlist.length)
                notifications.show({
                    bg: 'green',
                    color:"green",
                    title: "Product Add in Cart!",
    
                  })
            }
        }
    }
    return (
        <CartContext.Provider value={{addcartproduct, cartNumber, productCount, findproductaddincart, setProductCount, cartItems, removeproductfromcart, addtocart }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;