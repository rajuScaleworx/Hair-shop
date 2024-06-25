import { Container, Select, Grid, Title, Rating, Box, Text, Divider, Group, ActionIcon, Radio, CheckIcon, Button } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react'
import Imagescroll from './Imagescroll';
import { useCounter } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import productService from '../../Services/ProductService';
import DetailTab from './detailTab';
import { CartContext } from '../../context/cartContext';
import { useForm } from '@mantine/form';

import {
    IconAlignCenter,
    IconAlignJustified,
    IconAlignLeft,
    IconAlignRight,
    IconCheck,
    IconPlus,
    IconMinus
} from '@tabler/icons-react';
const iconProps = {
    stroke: 1.5,
    color: 'currentColor',
    opacity: 0.6,
    size: 18,
};
function DetailPage() {
    const { cartItems,addcartproduct, findproductaddincart, addtocart, productCount, setProductCount } = useContext(CartContext)
    console.log(cartItems)
    const icons = {
        left: <IconAlignLeft {...iconProps} />,
        center: <IconAlignCenter {...iconProps} />,
        right: <IconAlignRight {...iconProps} />,
        justify: <IconAlignJustified {...iconProps} />,
    };
    const renderSelectOption = ({ option, checked }) => (
        <Group flex="1" gap="xs">
            {icons[option.value]}
            {option.label}
            {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
        </Group>
    );


    const params = useParams()
    console.log(params)
    const [valuerating, setValueRating] = useState(4);
    const [productDetail, setProductDetail] = useState(null);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [lengths, setLengths] = useState([])
    const [count, handlers] = useCounter(0, { min: 0, max: 10 });
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            length: '',
            color: "", size: ""
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const defaultvalueset = (colorssetarr, sizessetarr, lengthsetarr) => {
        const item = JSON.parse(localStorage.getItem('cartItems')) || []
        if (item.length > 0) {
            const item1 = item.find((item) => item.productId === params.productid)
            console.log(item1)
            if (item1) {
                form.setFieldValue("length", item1.length)
                form.setFieldValue("color", item1.color)
                form.setFieldValue("size", item1.size)
                setProductCount(item1.quantity)
            }
            else {
                form.setFieldValue("length", lengthsetarr[0].value)
                form.setFieldValue("color", colorssetarr[0].value)
                form.setFieldValue("size", sizessetarr[0].value)
            }

        }
        else {
            form.setFieldValue("length", lengthsetarr[0].value)
            form.setFieldValue("color", colorssetarr[0].value)
            form.setFieldValue("size", sizessetarr[0].value)
        }
    }
    const FetchProductDetail = async () => {
        const apicall = await productService.getProductDEtailByid(params.productid)
        console.log(apicall)
        if (apicall?.status === 200) {
            if (apicall?.data?.statusCode === 200) {
                const datasetdetail = apicall.data.data.detail
                const datasetproduct = apicall.data.data.product
                const colorsarr = apicall.data.data.colors;
                const sizearr = apicall.data.data.sizes;
                const lengths = apicall.data.data.lengths;
                const colorssetarr = [];
                const sizessetarr = [];
                const lengthsetarr = []

                colorsarr.forEach(ecolor => {
                    colorssetarr.push({ value: ecolor._id, label: ecolor.name })
                });
                sizearr.forEach(ecolor => {
                    sizessetarr.push({ value: ecolor._id, label: ecolor.name })
                });
                lengths.forEach(ecolor => {
                    lengthsetarr.push({ value: ecolor._id, label: ecolor.name })
                });
                defaultvalueset(colorssetarr, sizessetarr, lengthsetarr)


                setColors(colorssetarr)
                setSizes(sizessetarr)
                setLengths(lengthsetarr)
                const setdata = {
                    id: datasetproduct._id,
                    name: datasetproduct.name,
                    categoryname: datasetproduct.productcategoryname,
                    producttype: datasetproduct.producttype,
                    color: datasetdetail.colorid,
                    size: datasetdetail.sizeid,
                    length: datasetdetail.lengthid,
                    price: datasetdetail.price,
                    image: datasetdetail.image
                }
                setProductDetail(setdata)
            }
        }
    }
    useEffect(() => {
        setProductDetail(null)
        FetchProductDetail()
    }, [])
    return (
        <>
            {productDetail ?
                <Container mt={100} w={'70%'} fluid={true}>
                    {/* <Grid>
                        <Grid.Col span={12}>
                            col-12
                        </Grid.Col>
                    </Grid> */}
                    <Grid>

                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}>
                            <Imagescroll productDetail={productDetail} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }}>
                            <Title c={'darkblue'}>{productDetail.name}</Title>
                            <Box display='flex'><Rating value={valuerating} />&nbsp;&nbsp;<Text c={'darkblue'}>({valuerating})</Text></Box>
                            <Box mt={20}><Text c={'darkblue'} fz={22} fw={550}>{productDetail.price} INR</Text></Box>
                            <Divider mt={20} />
                            <Group mt={20} display='flex' justify="space-between">
                                <Select
                                    size='xs'
                                    label="Select Size"
                                    placeholder="Available Size"
                                    data={sizes}
                                    renderOption={renderSelectOption}
                                    {...form.getInputProps('size')}
                                />
                                <Select
                                    size='xs'
                                    label="Select Color"
                                    placeholder="Available Color"
                                    data={colors}
                                    renderOption={renderSelectOption}
                                    {...form.getInputProps('color')}

                                />
                                <Select
                                    size='xs'
                                    label="Select Length"
                                    placeholder="Available Length"
                                    data={lengths}
                                    renderOption={renderSelectOption}
                                    {...form.getInputProps('length')}

                                />
                            </Group>
                            <Divider mt={20} />

                            <Box mt={20}><Text>Last Left- make Yours</Text></Box>
                            <Box mt={20}>

                                <Group justify="left">
                                    <ActionIcon
                                        onClick={() => addtocart(productDetail, "dec", form.getValues())} radius={20} variant="filled" color="red" aria-label="Settings">
                                        <IconMinus style={{ width: '70%', height: '70%' }} stroke={4} />
                                    </ActionIcon>
                                    <Text fz={20} fw={600} c={'darkblue'}>{productCount}</Text>
                                    <ActionIcon
                                        onClick={() => addtocart(productDetail, "inc", form.getValues())}
                                        radius={20} variant="filled" color="darkblue" aria-label="Settings">
                                        <IconPlus style={{ width: '70%', height: '70%' }} stroke={4} />
                                    </ActionIcon>
                                    {findproductaddincart(productDetail.id) === true ? 
                                        <Button ml={20} bg={"darkblue"} onClick={()=>addcartproduct(productDetail)}>Add to cart</Button>
                                        :""
                                    }
                                </Group>

                            </Box>
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col span={12} mt={20}>
                            <DetailTab />
                        </Grid.Col>
                    </Grid>
                </Container>
                : ""}
        </>
    )
}

export default DetailPage;