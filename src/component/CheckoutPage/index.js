import React from 'react';
import { Button, Container, Divider, Grid, Group, Avatar, Text, Accordion } from '@mantine/core';
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import PersonalInformation from './persnolinformation/index';
import AddressForm from './AddressForm/index';
import classes from '../cartPage/ArticleCardVertical.module.css';
import CheckoutProvider from './context';
import PaymentPage from './Pay/index';
import CheckoutPage from './checkoutPage';
function Checkout(props) {

    const { pricedata } = props;
    const addCustomer = () => {

    }
    return (
        <>
            <CheckoutProvider  >
                <CheckoutPage pricedata={pricedata} />
            </CheckoutProvider>
        </>
    )
}

export default Checkout