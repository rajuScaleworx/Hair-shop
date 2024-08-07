import { createContext, Text, useContext, useReducer, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { notifications } from '@mantine/notifications';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import guestCartService from '../Services/guestCartServices';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const params = useParams();
    // const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") || []);
    const [productCount, setProductCount] = useState(0)
    const [cartNumber, setCartNumber] = useState(0);
    const [guestId, setGuestId] = useState(null);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(params)
    // const [cartTotal, setCartTotal] = useState(0);
    const addtocarts = (detail, type, formvalue) => {
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
    const loadCart = async () => {
        try {
            const guestId = localStorage.getItem('guestId')
            const response = await guestCartService.getguestcart(guestId)
            console.log(response)
            if (response.data.statusCode === 200) {
                setCart(response.data.cart);
                console.log(params.productid)
                const existingItem = response.data.cart.find(
                    (item) => `${item.productId}` === `${params.productid}`
                );
                console.log(existingItem)
                if (existingItem?.productId) {
                    const quantitysave = existingItem.quantity
                    setProductCount(quantitysave)
                }
                else {
             
                    setProductCount(0)
                }
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    };
    const getproductcount=(id)=>{
        console.log(cart)
        const existingItem = cart.find(
            (item) => `${item.productId}` === `${id}`
        );
        console.log(existingItem)
        if (existingItem?.productId) {
            const quantitysave = existingItem.quantity
            setProductCount(quantitysave)
        }
        else {
     
            setProductCount(0)
        }
    }
    const saveCart = async (updatedCart) => {
        try {
            const apidata = {
                cart: updatedCart,
                guestId: localStorage.getItem('guestId')
            }
            const apicall = await guestCartService.addguestcart(apidata)
            console.log(apicall)
            setCart(updatedCart);
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    };
    const fetchcartproductstatus=(id)=>{
        console.log(params.productid)
        const cartproductstatus = cart.find(
            (item) => `${item.productId}` === `${id}`
            );
            console.log(cartproductstatus)
            return cartproductstatus ? true :false

    }
    // const addtocart = (productdata, type, formvalue) => {
    //     console.log(productdata)
    //     const product = {
    //         productId: productdata.id,
    //         color: formvalue.color,
    //         size: formvalue.size,
    //         length: formvalue.length,
    //         quantity: type === "inc" ? 1 : -1
    //     }
    //     const existingItemIndex = cart.findIndex(item =>
    //         item.productId === product.productId &&
    //         item.color === product.color &&
    //         item.size === product.size &&
    //         item.length === product.length
    //     );

    //     let updatedCart;

    //     if (existingItemIndex > -1) {
    //         updatedCart = cart.map((item, index) =>
                
    //             index === existingItemIndex
    //                 ? { ...item, quantity: item.quantity + product.quantity }
    //                 : item,
    //         );
    //     } else {
    //         updatedCart = [...cart, product];
    //     }
        
    //     const singleproduct=updatedCart.filter((el)=>{
    //         return el.productId===product.productId
    //     })
    //     console.log(singleproduct)
    //     setProductCount(singleproduct[0].quantity)
    //     if(product.quantity <0){
    //         updatedCart = updatedCart.filter(item => item.productId !== product.productId)
    //         saveCart(updatedCart);
            
    //     }
    //     else{
    //         saveCart(updatedCart);
    //     }

    // };
    const addtocart = (productData, type, formValue) => {
        console.log(productData);
        const product = {
            productId: productData.id,
            color: formValue.color,
            size: formValue.size,
            length: formValue.length,
            quantity: type === "inc" ? 1 : -1
        };
    
        const existingItemIndex = cart.findIndex(item =>
            item.productId === product.productId &&
            item.color === product.color &&
            item.size === product.size &&
            item.length === product.length
        );
    
        let updatedCart;
    
        if (existingItemIndex > -1) {
            const existingItem = cart[existingItemIndex];
            if (type === "dec" && existingItem.quantity <= 1) {
                // Error: Can't decrease quantity below 1
                console.error("Error: Cannot decrease quantity below 1");
                return; // Exit the function without updating the cart
            }
    
            updatedCart = cart.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            );
        } else {
            if (type === "dec") {
                // Error: Can't decrease non-existent item
                console.error("Error: Cannot decrease quantity of non-existent item");
                return; // Exit the function without updating the cart
            }
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }
    
        const singleProduct = updatedCart.filter((el) => el.productId === product.productId);
        console.log(singleProduct);
    
        if (singleProduct.length > 0) {
            setProductCount(singleProduct[0].quantity);
        }
    
        if (type === "dec" && singleProduct[0].quantity === 0) {
            updatedCart = updatedCart.filter(item => item.productId !== product.productId);
        }
    
        saveCart(updatedCart);
    };
    const removeFromCart = (productId, color, size, length) => {
        const updatedCart = cart.filter(item =>
            !(item.productId === productId &&
                item.color === color &&
                item.size === size &&
                item.length === length)
        );
        saveCart(updatedCart);
    };
    const removeFromCartitem = (productId) => {
        const updatedCart = cart.filter(item=>{
            return item.productId !==productId
        });
        saveCart(updatedCart);
        setProductCount(0);

    };
    
    const updateQuantity = (productId, color, size, length, newQuantity) => {
        const updatedCart = cart.map(item =>
            (item.productId === productId &&
                item.color === color &&
                item.size === size &&
                item.length === length)
                ? { ...item, quantity: newQuantity }
                : item
        );
        saveCart(updatedCart);
    };
    useEffect(() => {
        const storedGuestId = localStorage.getItem('guestId');
        if (!storedGuestId) {
            const newGuestId = uuidv4();
            localStorage.setItem('guestId', newGuestId);
            setGuestId(newGuestId);
        } else {
            setGuestId(storedGuestId);
        }
        loadCart();
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
        if (existingItem) {
            // show msg already card added
            notifications.show({
                bg: 'green',
                color: "green",
                title: "Product already Added in Cart!",

            })
        }
        else {

            if (detail.productdetail === undefined) {
                const productdata = {
                    color: "",
                    size: "",
                    length: "",
                    productId: detail?._id ? detail._id : detail.id,
                    quantity: 1,
                }
                lastlist.push(productdata)
                setCartItems(lastlist);
                localStorage.setItem("cartItems", JSON.stringify(lastlist))
                setCartNumber(lastlist.length)
                notifications.show({
                    bg: 'green',
                    color: "green",
                    title: "Product Add in Cart!",

                })
            }
            else {
                const productdata = {
                    color: detail?.productdetail[0]?.colorid[0] ? detail?.productdetail[0]?.colorid[0][0] : "",
                    size: detail?.productdetail[0]?.sizeid[0] ? detail?.productdetail[0]?.sizeid[0][0] : "",
                    length: detail?.productdetail[0]?.lengthid[0] ? detail?.productdetail[0]?.lengthid[0][0] : "",
                    productId: detail?._id ? detail._id : detail.id,
                    quantity: 1,
                }
                lastlist.push(productdata)
                setCartItems(lastlist);
                localStorage.setItem("cartItems", JSON.stringify(lastlist))
                setCartNumber(lastlist.length)
                notifications.show({
                    bg: 'green',
                    color: "green",
                    title: "Product Add in Cart!",

                })
            }
        }
    }
    return (
        <CartContext.Provider value={{
            cart,loadCart,
            //   addToCart,
            removeFromCart,
            updateQuantity,
            isLoggedIn,
            setIsLoggedIn,
            fetchcartproductstatus,
            guestId,removeFromCartitem,
            addcartproduct,getproductcount, cartNumber, productCount, findproductaddincart, setProductCount, cartItems, removeproductfromcart, addtocart
        }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;