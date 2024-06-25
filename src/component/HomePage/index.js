import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Container, Grid, Image, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useNavigate } from 'react-router-dom';
import ItemCard from './itemCard/index';
import image1 from '../../assets/crousalimage/AdobeStock_367287450_Preview.jpeg';
import image2 from '../../assets/crousalimage/AdobeStock_469107228_Preview.jpeg';
import image3 from '../../assets/crousalimage/AdobeStock_698798646_Preview.jpeg';
import productCollectionService from '../../Services/ProductCollection';
import ProductCarousel from './crousalList';
function Home() {
  const navigate=useNavigate()
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoplayvertical = useRef(Autoplay({ delay: 2000 }));
  const [list, setList] = useState([])
  const FetchColletion = async () => {
    const data = await productCollectionService.getProductCollection()
    console.log(data)
    if (data?.data?.statusCode === 200) {
      if (data?.data?.result.length > 0) {
        setList(data.data?.result)
      }
    }
  }
  useEffect(() => {
    FetchColletion()
  }, [])
  const cardClick = (data) =>{
    navigate(`/detailpage/${data.id}`)
    console.log(data)
    console.log("card clicked navigate")

  }
  const getaddcartadd=(detail)=>{
    const lastlist=JSON.parse(localStorage.getItem("cartItems")) || 0
    if(lastlist.length>0){
        const existingItem = lastlist.find(
            (item) => item.productId === detail._id
        );  
        if(existingItem){
            return false
        }
        else{
            return true
        }
    }
    else{
        return true
    }
}
  return (
    <Container fluid={true} w="90%" mt={60}>
      <Grid>
        <Grid.Col>
          <Carousel
            withControls={false}
            withIndicators
            height={'80vh'}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide style={{ borderRadius: '10px' }}>
              <Image style={{ objectFit: 'fill', borderRadius: '10px' }} height="100%" width='100%' src={image1} />
            </Carousel.Slide>
            <Carousel.Slide style={{ borderRadius: '10px' }}>
              <Image style={{ objectFit: 'fill', borderRadius: '10px' }} height="100%" width='100%' src={image2} />
            </Carousel.Slide>
            <Carousel.Slide style={{ borderRadius: '10px' }}>
              <Image style={{ objectFit: 'fill', borderRadius: '10px' }} height="100%" width='100%' src={image3} />
            </Carousel.Slide>
          </Carousel>
        </Grid.Col>
      </Grid>
      {list.length > 0 ?
        <>
          {list.map((item, index) => {
            return (
              <Grid key={index}>
                <Grid.Col minHeight={'400px'}>
                  <Title c={'darkblue'} align='center' mt={20} mb={20}>{item.name}</Title>
                  
                  <ProductCarousel cardClick={cardClick} productlist={item.productlist} />
                </Grid.Col>
              </Grid>
            )
          })}
        </>

        : ""

      }
     
      <Grid mt={15} mb={15}>
        <Grid.Col span={6}></Grid.Col>
        <Grid.Col span={6}>
          <Carousel
            orientation="vertical" height={500} withIndicators
            slidesToScroll={1}
            dragFree={true}
            loop={true}
            slideGap='sm'
            withControls={false}
            slideSize={{ base: '100%' }}
            plugins={[autoplayvertical.current]}
            onMouseEnter={autoplayvertical.current.stop}
            onMouseLeave={autoplayvertical.current.reset}
          // className='vertical_crousalcard'

          >
            <Carousel.Slide>
              <div class="container_card_hover_image ">
                <div class="content_hover_img">
                  <div class="content-overlay"></div>
                  <img width='100%' height='100%' class="content-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                  <div class="content-details fadeIn-top fadeIn-right">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div class="container_card_hover_image ">
                <div class="content_hover_img">
                  <div class="content-overlay"></div>
                  <img width='100%' height='100%' class="content-image" src="https://alukas.presslayouts.com/wp-content/uploads/2023/09/Home-9.png" alt="" />
                  <div class="content-details fadeIn-top fadeIn-right">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div class="container_card_hover_image ">
                <div class="content_hover_img">
                  <div class="content-overlay"></div>
                  <img width='100%' height='100%' class="content-image" src="https://alukas.presslayouts.com/wp-content/uploads/2023/09/Home-9.png" alt="" />
                  <div class="content-details fadeIn-top fadeIn-right">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div class="container_card_hover_image ">
                <div class="content_hover_img">
                  <div class="content-overlay"></div>
                  <img width='100%' height='100%' class="content-image" src="https://alukas.presslayouts.com/wp-content/uploads/2023/09/Home-9.png" alt="" />
                  <div class="content-details fadeIn-top fadeIn-right">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>

        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;