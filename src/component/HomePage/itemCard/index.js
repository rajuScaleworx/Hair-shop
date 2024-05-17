import React from 'react';
import { Button, Image } from '@mantine/core';
import { IconShoppingCartFilled, IconDownload, IconArrowRight, IconHeart } from '@tabler/icons-react';
import './ItemCard.scss';
function ItemCard(props) {
    return (
        <div class="card" 
        // style={{background:`url('https://images.unsplash.com/photo-1555489400-df7b0ded356d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')`}}
        >
            <div class="content">
                <Button bg={'darkblue'} c={'#ffff'} style={{border:'none'}} radius={10} fz={20} leftSection={<IconShoppingCartFilled color={'#ffff'} size={25} />} variant="default">
                    Add to Cart
                </Button>
                <div class="icons">
                    <a><IconHeart size={40} color='#fa4860' /></a>

                </div>
            </div>
        </div>
        // <div class="container">
        //     <div class="overlay">
        //         <div class="items"></div>
        //         <div class="items head">
        //             <p>Flower Embroidery Hoop Art</p>
        //             <hr/>
        //         </div>
        //         <div class="items price">
        //             <p class="old">$699</p>
        //             <p class="new">$345</p>
        //         </div>
        //         <div class="items cart">
        //             <i class="fa fa-shopping-cart"></i>
        //             <span>ADD TO CART</span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ItemCard