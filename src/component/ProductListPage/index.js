import React, { useContext, useEffect, useState } from 'react';
import ProductService from '../../Services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './ProductListpage.scss';
function ProductListpage() {
    const { addcartproduct } = useContext(CartContext)
    const navigate = useNavigate()
    const params = useParams()
    const [productList, setProductList] = useState([])
    const fetchproductList = async () => {
        const response = await ProductService.getproductlistbytype(params.type);
        console.log(response)
        if (response?.status === 200) {
            if (response?.data?.result?.length > 0) {
                setProductList(response?.data?.result)
            }
        }
    }
    useEffect(() => {
        fetchproductList()
    }, [])
    const cardClick = (id) => {
        console.log("id")
        navigate(`/detailpage/${id}`)
    }
    const getaddcartadd=(id)=>{
        const lastlist=JSON.parse(localStorage.getItem("cartItems")) || 0
        if(lastlist.length>0){
            const existingItem = lastlist.find(
                (item) => item.productId === id
            );  
            if(existingItem){
                return false
            }
            else{
                return true
            }
        }
        else{
            return true
        }
    }
    return (
        <div className='listbody'>
            {productList.length > 0 ?
                <>
                    {productList.map((item, index) => {
                        return (
                            <div key={index} class="product-card">
                                <a class="product-card__image" target="_blank" onClick={() => cardClick(item._id)}>
                                <img  width="100%" src={`http://localhost:8000/showfile/${item?.productdetail[0]?.image}`} alt="Product List Card UI" />
                                </a>
                                <div
                                    class="product-card__body"><a class="product-card__title" >{item.name}</a>
                                    <div class="product-card__stock">In stock</div>
                                    <div class="product-card__price price"><span class="price__current">{item?.productdetail[0].price} INR</span><span class="price__old">{item?.productdetail[0].price} INR</span></div>
                                    <div class="product-card__labels">
                                        <span class="label label_sale">OFF 0%</span></div>
                                </div>
                                <div class="product-card__btn"><button class="btn btn_product" type="button" onClick={() => addcartproduct(item)}>Add Cart</button></div>

                            </div>
                        )
                    })}

                </>
                : ""}

        </div>
    )
}

export default ProductListpage;