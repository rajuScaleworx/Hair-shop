import React, { useContext } from 'react';
import {Button} from '@mantine/core';
import { CheckoutContext } from '../context';

function PaymentPage(props) {
    const {handlePayment}=useContext(CheckoutContext)
  return (
    <div>
        <Button onClick={()=>handlePayment(props.pricedata)}>pay</Button>
    </div>
  )
}

export default PaymentPage;