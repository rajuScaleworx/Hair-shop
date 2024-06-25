
import React from 'react';
import { Container, Title, Table, Card, Group, Badge, Text, Image, ActionIcon } from '@mantine/core';
import orderService from '../../Services/orderServices';
import moment from 'moment';
import { IconRefresh } from '@tabler/icons-react';
const orderHistoryData = [
    {
        orderId: '12345',
        date: '2023-06-01',
        items: [
            {
                name: 'Laptop',
                image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', // Replace with real image URL
                price: '$1200.00',
                status: 'Delivered',
            },
            {
                name: 'Smartphone',
                image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', // Replace with real image URL
                price: '$800.00',
                status: 'Delivered',
            },
        ],
    },
    {
        orderId: '12346',
        date: '2023-06-15',
        items: [
            {
                name: 'Headphones',
                image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', // Replace with real image URL
                price: '$200.00',
                status: 'Pending',
            },
        ],
    },
];

function OrderHistory() {
    const [orders, setOrders] = React.useState([]);
    const fetchOrdrderList = async () => {
        const userid = localStorage.getItem('userid') || null
        if (userid) {
            const apicall = await orderService.getorderlist(userid)
            console.log(apicall)
            if (apicall.status === 200) {
                if (apicall?.data?.result.length > 0) {
                    const setdata = []
                    apicall.data.result.forEach((element) => {
                        const orderdata = {
                            orderId: element.orderid,
                            date: element.createdAt,
                            items: []
                        }
                        element.productlist.forEach((item) => {
                            orderdata.items.push({
                                name: item.name,
                                image: item.image,
                                price: item.price,
                                status: 'Pending'
                            })
                        })
                        setdata.push(orderdata)
                    })
                    setOrders(setdata)
                }
            }
        }
    }
    React.useEffect(() => {
        fetchOrdrderList()
    }, []);
    return (
        <>
            {orders.length > 0 ?
                <Container>
                    <Title order={2} mb="lg">
                        Order History
                    </Title>
                    {orders.map((order) => (
                        <Card shadow="sm" padding="lg" mb="lg" key={order.orderId}
                        style={{
                            backgroundColor: order.items.some(item => item.status === 'Pending') ? '#fffbe6' : '#e6fffa',
                            position: 'relative',
                          }}
                
                        >
                            <Group position="apart" mb="md">
                                <Text c={"blue"} weight={500}>Order ID: {order.orderId}</Text>
                                <Text fw={450} fz={20}>{moment(order.date).format('DD/MM/YYYY')}</Text>
                            </Group>
                            <ActionIcon
                                size="xl"
                                variant="transparent"
                                style={{ position: 'absolute', top: 10, right: 10 }}
                            >
                                <IconRefresh size={25} fw={600} />
                            </ActionIcon>
                            <Table>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'left', padding: '8px', fontSize: "16px", color:"grey" }}>ITEM</th>
                                        <th style={{ textAlign: 'left', padding: '8px', fontSize: "16px", color:"grey" }}>PRICE</th>
                                        <th style={{ textAlign: 'left', padding: '8px', fontSize: "16px", color:"grey" }}>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'left', padding: '8px', verticalAlign: 'top' }}>
                                                <Group align="flex-start">
                                                    <Image  flex={0} w={110} h={110} src={`http://localhost:8000/showfile/${item?.image}`} alt={item.name} />
                                                    <Text style={{ color: '#1c7ed6',lineHeight:"1.5" }}>{item.name}</Text> {/* Primary color for item names */}
                                                    </Group>
                                            </td>
                                            <td style={{ textAlign: 'left', padding: '8px', verticalAlign: 'top', fontWeight: "500", fontSize: "20px" }}>{item.price}</td>
                                            <td style={{ textAlign: 'left', padding: '8px', verticalAlign: 'top' }}>
                                                <Badge color={item.status === 'Delivered' ? 'green' : 'yellow'}>
                                                    {item.status}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    ))}
                </Container>
                : ""}
        </>
    );
}
export default OrderHistory;

