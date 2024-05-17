import { Button, Container, Divider, Grid } from '@mantine/core';
import React from 'react';
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';


function CartPage() {
    const arrayimage = ["https://media.istockphoto.com/id/1055099140/photo/making-hairstory-everyday-with-gorgeous-hair.jpg?s=612x612&w=0&k=20&c=x-Hxtr85HmZ_U5o7-KNzLCNi63drTeijFnuFcpz5kUU=", "https://media.istockphoto.com/id/185084025/photo/long-hair-from-behind.jpg?s=612x612&w=0&k=20&c=f671BzD8QyibLs25qm-sgcrUiozDNmqVqIvcdRvTzAU=",
        "https://i.pinimg.com/originals/a0/f7/b2/a0f7b25dc3b006fa147915aea7ae68b2.png", "https://i.pinimg.com/736x/40/b3/c8/40b3c878b4a489cc610ec842778866b4.jpg", "https://i.pinimg.com/564x/eb/c0/6b/ebc06b50a0c9f11314ae4b2161a53156.jpg"
    ]

    return (
        <Container mt={100} w={'70%'} fluid={true}>
            <Grid>
                <Grid.Col span={6}>
                    <Group mb={10} justify='space-between' style={{ background: 'darkblue', borderRadius: '5px' }} p={5}>
                        <Text c={'#ffff'} fz={20} fw={600}>Item 0</Text>
                        <Text c={'#ffff'} fz={20} fw={600}>Price: </Text>

                    </Group>
                    {arrayimage.map((item, index) => {
                        return (
                            <Card key={index} mb={10} withBorder radius="md" p={0} className={classes.card}>
                                <Group wrap="nowrap" align='top' gap={0}>
                                    <img alt='imagehair'
                                        src={item}
                                        // src="https://media.istockphoto.com/id/1055099140/photo/making-hairstory-everyday-with-gorgeous-hair.jpg?s=612x612&w=0&k=20&c=x-Hxtr85HmZ_U5o7-KNzLCNi63drTeijFnuFcpz5kUU="
                                        style={{ maxHeight: '250px', height: '250px', width: "250px" }} />
                                    <div w={'50%'} className={classes.body}>
                                        <Text className={classes.title} mb='md'>
                                            Name: Medium Layers
                                        </Text>
                                        <Text className={classes.title} mb='md'>
                                            Price: 3000 INR
                                        </Text>
                                        <Text className={classes.title} mb='md'>
                                            size: M
                                        </Text>
                                        <Text className={classes.title} mb='md'>
                                            color: BROWN
                                        </Text>
                                        <Text className={classes.title} mb='md'>
                                            Qty: 1
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
                                {arrayimage.length * 3000} INR
                            </Text>
                        </Group>
                        <Group display='flex' justify='space-between'>
                            <Text className={classes.title} mb='md'>
                                ToShipping Charge:
                            </Text>
                            <Text className={classes.title} mb='md'>
                                250 INR
                            </Text>
                        </Group>

                        <Group display='flex' justify='space-between'>
                            <Text className={classes.title} mb='md'>
                                Tax:
                            </Text>
                            <Text className={classes.title} mb='md'>
                                40 INR
                            </Text>
                        </Group>

                        <Group display='flex' justify='space-between'>
                            <Text className={classes.title} mb='md'>
                                Offer:
                            </Text>
                            <Text className={classes.title} mb='md'>
                                20 INR
                            </Text>
                        </Group>

                        <Divider size='md' />
                        <Group mt={10} display='flex' justify='space-between'>
                            <Text className={classes.title} mb='md'>
                            SUB TOTAL:
                            </Text>
                            <Text className={classes.title} mb='md'>
                            15200 INR
                            </Text>
                        </Group>
                        <Button fullWidth bg={'darkblue'} fz={20} size='md'>CHECKOUT</Button>
                    </Group>
                </Grid.Col>

            </Grid>
        </Container>
    )
}

export default CartPage;