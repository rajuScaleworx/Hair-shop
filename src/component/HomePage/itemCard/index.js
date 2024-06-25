import React, { useContext } from 'react';
// import { Button, Image } from '@mantine/core';
// import { IconShoppingCartFilled, IconDownload, IconArrowRight, IconHeart } from '@tabler/icons-react';
// import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconBookmark, IconHeart, IconShare, IconShoppingCartFilled } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem,
} from '@mantine/core';
import { CartContext } from '../../../context/cartContext';
import classes from './ArticleCard.module.css';
import './ItemCard.scss';
function ItemCard(props) {
    const { addcartproduct } = useContext(CartContext)
    const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();
    console.log(props.item)
    return (
        <>
            {/* <div class="card" style={{ padding: "10px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", zIndex: "1", backgroundImage: `url(${`http://localhost:8000/showfilebyid/${props.item._id}`})` }} >     <div class="content">         <Button bg={'darkblue'} c={'#ffff'} style={{ border: 'none' }} radius={10} fz={20} leftSection={<IconShoppingCartFilled color={'#ffff'} size={25} />} variant="default">             Add to Cart {props.count}         </Button>         <div class="icons">             <a><IconHeart size={40} color='#fa4860' /></a>
        </div>     </div> </div> */}
            {/* <div>
            <img height="70%" width="100%" src={`http://localhost:8000/showfilebyid/${props.item._id}`} alt="image" />
        </div> */}


            <Card withBorder radius="md" className={classes.card}
            >
                <Card.Section>
                    <a
                    >
                        <Image
                            onClick={() => props.cardClick(props.item)}
                            style={{ objectFit: 'fill' }} src={`http://localhost:8000/showfilebyid/${props.item._id}`}
                            height={250} width='100%'
                        />
                    </a>
                </Card.Section>

                <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                    ON SALE
                </Badge>

                <Text className={classes.title} fw={500} component="a" >
                    {props.item.name}
                </Text>
                <Text className={classes.title} fw={500} component="a" >
                    Price: 500 INR
                </Text>
                <Text className={classes.title} fw={500} component="a" >
                    Category: {props.item.productcategoryname}
                </Text>



                <Group justify="end" className={classes.footer}>

                    <Group d='flex' gap={8} mr={0}>
                        {/* <ActionIcon className={classes.action}>
                            <IconHeart style={{ width: rem(45), height: rem(45) }} color={theme.colors.red[6]} />
                        </ActionIcon>
                        <ActionIcon className={classes.action}>
                            <IconBookmark
                                style={{ width: rem(45), height: rem(45) }}
                                color={theme.colors.yellow[7]}
                            />
                        </ActionIcon> */}
                        {/* <ActionIcon bg={"#ffff"} className={classes.action} >
                            <IconShoppingCartFilled onClick={() =>addcartproduct(props.item)} className={classes.iconcart} style={{ width: rem(55), height: rem(55) }}
                                color={theme.colors.blue[6]}
                            />
                        </ActionIcon> */}
                    </Group>
                </Group>
            </Card>

        </>
    )
}

export default ItemCard;