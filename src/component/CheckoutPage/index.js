import React from 'react';
import { Button, Container, Divider, Grid, Group, Avatar, Text, Accordion } from '@mantine/core';
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import PersonalInformation from './persnolinformation/index';
import AddressForm from './AddressForm/index';
import classes from '../cartPage/ArticleCardVertical.module.css';
import CheckoutProvider from './context';
import  PaymentPage from './Pay/index';
function Checkout(props) {
    const {pricedata}=props;
    const addCustomer= ()=>{
        
    }
    return (
        <>
        <CheckoutProvider  >
            <Container mt={100} w={'70%'} fluid={true}>
                <Grid>
                    <Grid.Col span={8}>
                        <Accordion variant="contained">
                            <Accordion.Item value="photos">
                                <Accordion.Control
                                    icon={
                                        <IconPhoto
                                            style={{ color: 'var(--mantine-color-red-6', width: '20px', height: '20px' }}
                                        />
                                    }
                                >
                                    Personal Information
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <PersonalInformation />
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="print">
                                <Accordion.Control
                                    icon={
                                        <IconPrinter
                                            style={{ color: 'var(--mantine-color-blue-6', width: "20px", height: "20px" }}
                                        />
                                    }
                                >
                                    Addresses
                                </Accordion.Control>
                                <Accordion.Panel><AddressForm /></Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="camera">
                                <Accordion.Control
                                    icon={
                                        <IconCameraSelfie
                                            style={{ color: 'var(--mantine-color-teal-6)', width: "20px", height: "20px" }}
                                        />
                                    }
                                >
                                    Shipping Method
                                </Accordion.Control>
                                <Accordion.Panel>Content</Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value="payment">
                                <Accordion.Control
                                    icon={
                                        <IconCameraSelfie
                                            style={{ color: 'var(--mantine-color-teal-6)', width: "20px", height: "20px" }}
                                        />
                                    }
                                >
                                    Payment
                                </Accordion.Control>
                                <Accordion.Panel>
                                 < PaymentPage pricedata={pricedata} />  
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Group display='block' >


                            <Group display='flex' justify='space-between'>
                                <Text className={classes.title} mb='md'>
                                    Total Price:
                                </Text>
                                <Text className={classes.title} mb='md'>
                                    {pricedata.totalprice} INR
                                </Text>
                            </Group>
                            <Group display='flex' justify='space-between'>
                                <Text className={classes.title} mb='md'>
                                    ToShipping Charge:
                                </Text>
                                <Text className={classes.title} mb='md'>
                                    {pricedata?.shippingCharge ? pricedata.shippingCharge :0 } INR
                                </Text>
                            </Group>

                            <Group display='flex' justify='space-between'>
                                <Text className={classes.title} mb='md'>
                                    Tax:
                                </Text>
                                <Text className={classes.title} mb='md'>
                                    {pricedata.tax} INR
                                </Text>
                            </Group>

                            <Group display='flex' justify='space-between'>
                                <Text className={classes.title} mb='md'>
                                    Offer:
                                </Text>
                                <Text className={classes.title} mb='md'>
                                    {pricedata.off} INR
                                </Text>
                            </Group>

                            <Divider size='md' />
                            <Group mt={10} display='flex' justify='space-between'>
                                <Text className={classes.title} mb='md'>
                                    SUB TOTAL:
                                </Text>
                                <Text className={classes.title} mb='md'>
                                {pricedata.realprice} INR
                                </Text>
                            </Group>
                            {/* <Button fullWidth bg={'darkblue'} fz={20} size='md'>CHECKOUT</Button> */}
                        </Group>
                    </Grid.Col>
                </Grid>
            </Container>
            </CheckoutProvider>
        </>
    )
}

export default Checkout