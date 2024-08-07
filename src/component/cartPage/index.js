import { Button, Container, Divider, Grid } from '@mantine/core';
import React, { useEffect, useState,useContext } from 'react';
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';
import ProductCartService from '../../Services/cartServices';
import CheckoutPage from '../CheckoutPage/index';
import { Title, Center, Stack } from '@mantine/core';
import { IconGardenCartOff } from '@tabler/icons-react';
import { CartContext } from '../../context/cartContext';
import { useParams } from 'react-router-dom';

function CartPage() {
    const params=useParams()
    console.log(params)
    const {cart}=useContext(CartContext)
    console.log(cart)
    const [list, setList] = useState([]);
    const [pricedata, setPriceData] = useState({});
    const [showCheckout, SetShowCheckout] = useState(false)
    const arrayimage = ["https://media.istockphoto.com/id/1055099140/photo/making-hairstory-everyday-with-gorgeous-hair.jpg?s=612x612&w=0&k=20&c=x-Hxtr85HmZ_U5o7-KNzLCNi63drTeijFnuFcpz5kUU=", "https://media.istockphoto.com/id/185084025/photo/long-hair-from-behind.jpg?s=612x612&w=0&k=20&c=f671BzD8QyibLs25qm-sgcrUiozDNmqVqIvcdRvTzAU=",
        "https://i.pinimg.com/originals/a0/f7/b2/a0f7b25dc3b006fa147915aea7ae68b2.png", "https://i.pinimg.com/736x/40/b3/c8/40b3c878b4a489cc610ec842778866b4.jpg", "https://i.pinimg.com/564x/eb/c0/6b/ebc06b50a0c9f11314ae4b2161a53156.jpg"
    ]
    const fetchCartProductDetail = async () => {
        const data = JSON.parse(localStorage.getItem('cartItems')) || []
        if (cart.length > 0) {
            const apicall = await ProductCartService.getProductDetailBymultiId(cart)
            console.log(apicall)
            if (apicall.status === 200) {
                if (apicall.data.result.length > 0) {
                    const savedata = []
                    apicall.data.result.forEach((ex) => {
                        const setdata = {
                            name: ex?.product?.name ? ex?.product?.name : "",
                            price: ex?.detail.price ? ex?.detail.price : 0,
                            size: ex?.activesize?.label ? ex?.activesize?.label : "",
                            color: ex?.activecolor?.label ? ex?.activecolor?.label : "",
                            length: ex?.activelength?.label ? ex?.activelength?.label : "",
                            id: ex?.product?._id ? ex?.product?._id : "",
                            image: ex?.detail?.image ? ex?.detail?.image : "",
                            quantity: ex?.buyquantity ? ex?.buyquantity : 0
                        }
                        savedata.push(setdata)
                    })
                    const pricedatas = {
                        totalprice: apicall?.data?.totalprice ? apicall?.data?.totalprice : 0,
                        shippingcharge: apicall?.data?.shippingCharge ? apicall?.data?.shippingCharge : 0,
                        tax: apicall?.data?.tax ? apicall?.data?.tax : 0,
                        off: apicall?.data.off ? apicall?.data.off : 0,
                        realprice: apicall?.data.realprice ? apicall?.data.realprice : 0
                    }
                    setList(savedata)
                    setPriceData(pricedatas)
                }
            }
        }
        else {

        }
    }
    useEffect(() => {
        fetchCartProductDetail()
    }, [cart])
    const clickcheckoutButton = () => {
        SetShowCheckout(true)
    }
    return (
        <>
            {showCheckout === true ? <CheckoutPage cart={cart} list={list} pricedata={pricedata} /> :
                <Container mt={100} w={'70%'} fluid={true}>
                    {list.length > 0 ?
                        <Grid>
                            <Grid.Col span={6}>
                                <Group mb={10} justify='space-between' style={{ background: 'darkblue', borderRadius: '5px' }} p={5}>
                                    <Text c={'#ffff'} fz={20} fw={600}>Item 0</Text>
                                    <Text c={'#ffff'} fz={20} fw={600}>Price: </Text>

                                </Group>
                                {list.map((item, index) => {
                                    return (
                                        <Card key={index} mb={10} withBorder radius="md" p={0} className={classes.card}>
                                            <Group wrap="nowrap" align='top' gap={0}>
                                                <img alt='imagehair'
                                                    src={`http://localhost:8000/showfile/${item.image}`}
                                                    // src="https://media.istockphoto.com/id/1055099140/photo/making-hairstory-everyday-with-gorgeous-hair.jpg?s=612x612&w=0&k=20&c=x-Hxtr85HmZ_U5o7-KNzLCNi63drTeijFnuFcpz5kUU="
                                                    style={{ maxHeight: '250px', height: '250px', width: "250px" }} />
                                                <div w={'50%'} className={classes.body}>
                                                    <Text className={classes.title} mb='md'>
                                                        Name: {item.name}
                                                    </Text>
                                                    <Text className={classes.title} mb='md'>
                                                        Price: {item.price}
                                                    </Text>
                                                    <Text className={classes.title} mb='md'>
                                                        size: {item.size}
                                                    </Text>
                                                    <Text className={classes.title} mb='md'>
                                                        color: {item.color}
                                                    </Text>
                                                    <Text className={classes.title} mb='md'>
                                                        Qty: {item.quantity}
                                                    </Text>

                                                </div>
                                            </Group>
                                        </Card>
                                    )
                                })}

                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Group mb={10} justify='space-between' style={{ background: 'darkblue', borderRadius: '5px' }} p={5}>
                                    <Text c={'#ffff'} fz={20} fw={600}>Order Summary</Text>
                                </Group>
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
                                            {pricedata?.shippingCharge ? pricedata.shippingCharge : 0} INR
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
                                    <Button onClick={clickcheckoutButton} fullWidth bg={'darkblue'} fz={20} size='md'>CHECKOUT</Button>
                                </Group>
                            </Grid.Col>

                        </Grid>
                        :
                        <Container size="xs" style={{ textAlign: 'center', padding: '50px 0' }}>
                            <Center>
                                <IconGardenCartOff size={80} color="gray" />
                            </Center>
                            <Stack align="center" spacing="sm">
                                <Title order={2}>Your Cart is Empty</Title>
                                <Text c="dimmed">
                                    Looks like you haven't added anything to your cart yet.
                                </Text>
                                <Button variant="filled" color="blue" size="lg">
                                    Shop Now
                                </Button>
                            </Stack>
                        </Container>
                    }
                </Container>
            }
        </>
    )
}

export default CartPage;



// import React, { useState } from 'react';
// import {
//     Container,
//     Accordion,
//     Button,
//     TextInput,
//     PasswordInput,
//     Radio,
//     Group,
//     Box,
//     Title,
// } from '@mantine/core';
// import { useForm } from '@mantine/form';

// function CartPage() {
//     const [completedSteps, setCompletedSteps] = useState([]);
//     const [activeStep, setActiveStep] = useState('login');

//     const loginForm = useForm({
//         initialValues: {
//             userType: 'guest',
//             guestName: '',
//             guestEmail: '',
//             email: '',
//             password: '',
//         },
//         validate: {
//             guestName: (value, values) =>
//                 values.userType === 'guest' && value.length < 2 ? 'Name must have at least 2 characters' : null,
//             guestEmail: (value, values) =>
//                 values.userType === 'guest' && !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
//             email: (value, values) =>
//                 values.userType === 'existing' && !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
//             password: (value, values) =>
//                 values.userType === 'existing' && value.length < 6 ? 'Password must have at least 6 characters' : null,
//         },
//         // validateInputOnBlur: true,
//         // validateInputOnChange: false,
//     });

//     const addressForm = useForm({
//         initialValues: {
//             fullName: '',
//             addressLine1: '',
//             addressLine2: '',
//             city: '',
//             state: '',
//             zipCode: '',
//         },
//         validate: {
//             fullName: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
//             addressLine1: (value) => (value.length < 5 ? 'Address must have at least 5 characters' : null),
//             city: (value) => (value.length < 2 ? 'City must have at least 2 characters' : null),
//             state: (value) => (value.length < 2 ? 'State must have at least 2 characters' : null),
//             zipCode: (value) => (/^\d{5}(-\d{4})?$/.test(value) ? null : 'Invalid ZIP code'),
//         },

//     });

//     const paymentForm = useForm({
//         initialValues: {
//             paymentMethod: '',
//         },
//         validate: {
//             paymentMethod: (value) => (!value ? 'Please select a payment method' : null),
//         },
//         validateInputOnBlur: true,
//         validateInputOnChange: false,
//     });

//     const nextStep = (current, formData) => {
//         console.log(`${current} step data:`, formData);
//         setCompletedSteps([...completedSteps, current]);
//         const steps = ['login', 'address', 'payment', 'confirmation'];
//         const currentIndex = steps.indexOf(current);
//         if (currentIndex < steps.length - 1) {
//             setActiveStep(steps[currentIndex + 1]);
//         }
//     };

//     const canOpenStep = (step) => {
//         const steps = ['login', 'address', 'payment', 'confirmation'];
//         const stepIndex = steps.indexOf(step);
//         return stepIndex === 0 || completedSteps.includes(steps[stepIndex - 1]);
//     };

//     const LoginStep = () => {
//         return (
//             <Box>
//                 <form onSubmit={loginForm.onSubmit((values) => nextStep('login', values))}>
//                     <Radio.Group
//                         {...loginForm.getInputProps('userType')}
//                         name="userType"
//                         label="Select user type"
//                         mt="md"
//                     >
//                         <Radio value="guest" label="Guest" />
//                         <Radio value="existing" label="Existing User" />
//                     </Radio.Group>

//                     {loginForm.values.userType === 'guest' && (
//                         <>
//                             <TextInput
//                                 withAsterisk
//                                 label="Name"
//                                 placeholder="John Doe"
//                                 {...loginForm.getInputProps('guestName')}
//                                 mt="md"
//                             />
//                             <TextInput
//                                 label="Email"
//                                 placeholder="guest@example.com"
//                                 {...loginForm.getInputProps('guestEmail')}
//                                 mt="md"
//                             />
//                         </>
//                     )}

//                     {loginForm.values.userType === 'existing' && (
//                         <>
//                             <TextInput
//                                 label="Email"
//                                 placeholder="your@email.com"
//                                 {...loginForm.getInputProps('email')}
//                                 mt="md"
//                             />
//                             <PasswordInput
//                                 label="Password"
//                                 placeholder="Your password"
//                                 {...loginForm.getInputProps('password')}
//                                 mt="md"
//                             />
//                         </>
//                     )}
//                     <Button type="submit" mt="xl">
//                         Continue
//                     </Button>
//                 </form>
//             </Box>
//         )
//     };

//     const AddressStep = () => (
//         <Box>
//             <form onSubmit={addressForm.onSubmit((values) => nextStep('address', values))}>
//                 <TextInput label="Full Name" placeholder="John Doe" {...addressForm.getInputProps('fullName')} mt="md" />
//                 <TextInput label="Address Line 1" placeholder="123 Main St" {...addressForm.getInputProps('addressLine1')} mt="md" />
//                 <TextInput label="Address Line 2" placeholder="Apt 4B" {...addressForm.getInputProps('addressLine2')} mt="md" />
//                 <Group grow>
//                     <TextInput label="City" placeholder="New York" {...addressForm.getInputProps('city')} mt="md" />
//                     <TextInput label="State" placeholder="NY" {...addressForm.getInputProps('state')} mt="md" />
//                     <TextInput label="Zip Code" placeholder="10001" {...addressForm.getInputProps('zipCode')} mt="md" />
//                 </Group>
//                 <Button type="submit" mt="xl">
//                     Continue to Payment
//                 </Button>
//             </form>
//         </Box>
//     );

//     const PaymentStep = () => (
//         <Box>
//             <form onSubmit={paymentForm.onSubmit((values) => nextStep('payment', values))}>
//                 <Radio.Group
//                     {...paymentForm.getInputProps('paymentMethod')}
//                     name="paymentMethod"
//                     label="Select payment method"
//                     mt="md"
//                 >
//                     <Radio value="credit" label="Credit Card" />
//                     <Radio value="paypal" label="PayPal" />
//                     <Radio value="bankTransfer" label="Bank Transfer" />
//                 </Radio.Group>
//                 <Button type="submit" mt="xl">
//                     Place Order
//                 </Button>
//             </form>
//         </Box>
//     );

//     const ConfirmationStep = () => (
//         <Box>
//             <p>Thank you for your order!</p>
//         </Box>
//     );

//     return (
//         <Container>
//             <Title order={1} align="center" mb="xl">Checkout</Title>
//             <Accordion
//                 value={activeStep}
//                 onChange={(value) => {
//                     if (canOpenStep(value)) {
//                         setActiveStep(value);
//                     }
//                 }}
//             >
//                 <Accordion.Item value="login">
//                     <Accordion.Control>Login or Guest Checkout</Accordion.Control>
//                     <Accordion.Panel>
//                         <Box>
//                             <form onSubmit={loginForm.onSubmit((values) => nextStep('login', values))}>
//                                 <Radio.Group
//                                     {...loginForm.getInputProps('userType')}
//                                     name="userType"
//                                     label="Select user type"
//                                     mt="md"
//                                 >
//                                     <Radio value="guest" label="Guest" />
//                                     <Radio value="existing" label="Existing User" />
//                                 </Radio.Group>

//                                 {loginForm.values.userType === 'guest' && (
//                                     <>
//                                         <TextInput
//                                             withAsterisk
//                                             label="Name"
//                                             placeholder="John Doe"
//                                             {...loginForm.getInputProps('guestName')}
//                                             mt="md"
//                                         />
//                                         <TextInput
//                                             label="Email"
//                                             placeholder="guest@example.com"
//                                             {...loginForm.getInputProps('guestEmail')}
//                                             mt="md"
//                                         />
//                                     </>
//                                 )}

//                                 {loginForm.values.userType === 'existing' && (
//                                     <>
//                                         <TextInput
//                                             label="Email"
//                                             placeholder="your@email.com"
//                                             {...loginForm.getInputProps('email')}
//                                             mt="md"
//                                         />
//                                         <PasswordInput
//                                             label="Password"
//                                             placeholder="Your password"
//                                             {...loginForm.getInputProps('password')}
//                                             mt="md"
//                                         />
//                                     </>
//                                 )}
//                                 <Button type="submit" mt="xl">
//                                     Continue
//                                 </Button>
//                             </form>
//                         </Box>
//                     </Accordion.Panel>
//                 </Accordion.Item>

//                 <Accordion.Item value="address" disabled={!canOpenStep('address')}>
//                     <Accordion.Control>Shipping Address</Accordion.Control>
//                     <Accordion.Panel>
//                         <AddressStep />
//                     </Accordion.Panel>
//                 </Accordion.Item>

//                 <Accordion.Item value="payment" disabled={!canOpenStep('payment')}>
//                     <Accordion.Control>Payment Options</Accordion.Control>
//                     <Accordion.Panel>
//                         <PaymentStep />
//                     </Accordion.Panel>
//                 </Accordion.Item>

//                 <Accordion.Item value="confirmation" disabled={!canOpenStep('confirmation')}>
//                     <Accordion.Control>Order Confirmation</Accordion.Control>
//                     <Accordion.Panel>
//                         <ConfirmationStep />
//                     </Accordion.Panel>
//                 </Accordion.Item>
//             </Accordion>
//         </Container>
//     );
// }

// export default CartPage;