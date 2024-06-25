import React, { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Group, Badge, Box, Overlay } from '@mantine/core';
import { IconDiscount2 } from '@tabler/icons-react';


const ProductCarousel = (props) => {
    const [products, setProducts] = useState([])
    const {cardClick}=props
    const setdata = []
    const fetchproduct = () => {
        props.productlist.forEach(el => {
            setdata.push({ description: 'This is a great product.', category: el.productcategoryname, onSale: true, price: "$200", id: el._id, name: el.name, image1: `http://localhost:8000/showfilebyid/${el._id}`, image2: `http://localhost:8000/showfilebyid/${el._id}` })
        });
        setProducts(setdata)
    }
    useEffect(() => {
        fetchproduct()
    }, [])

    return (
        <Carousel
            slideSize="20%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="md"
            align="start"
            slidesToScroll={1}
            withControls
            withIndicators
            loop
        >
            {products.map((product) => (
                <Carousel.Slide key={product.id}>
                    <ProductCard cardClick={cardClick} product={product} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};

const ProductCard = ({ product,cardClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Card.Section>
                {/* <Image
                    src={hovered ? product.image2 : product.image1}
                    height={250} width='100%'
                    alt={product.name}
                /> */}
                <Box onClick={()=>cardClick(product)} position="relative" style={{ cursor: 'pointer' }}>
                    <Image
                        src={hovered ? product.image2 : product.image1}
                        height={250} width='100%'
                        alt={product.name}
                    />
                    {product.onSale && (
                        <Overlay
                            position="absolute"
                            top={10}
                            left={10}
                            h={30}
                            w={30}
                            zIndex={1}
                            c="red"
                            bg="none"
                            opacity={0.75}
                        >
                            <IconDiscount2 size={30} color="red" />
                        </Overlay>
                    )}
                </Box>
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{product.name}</Text>
                <Badge c="pink" variant="light">
                    {product.price}
                </Badge>
            </Group>
            <Text size="sm" c="dimmed">
                {product.category}
            </Text>
            <Text size="sm" mt="xs">
                {product.description}
            </Text>

        </Card>
    );
};

export default ProductCarousel;
