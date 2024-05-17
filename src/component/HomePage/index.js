import React from 'react'
import { useRef } from 'react';
import { Container, Grid, Image, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import ItemCard from './itemCard/index';
import image1 from '../../assets/crousalimage/AdobeStock_367287450_Preview.jpeg';
import image2 from '../../assets/crousalimage/AdobeStock_469107228_Preview.jpeg';
import image3 from '../../assets/crousalimage/AdobeStock_698798646_Preview.jpeg';
function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoplayvertical = useRef(Autoplay({ delay: 2000 }));

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
      <Grid>
        <Grid.Col minHeight={'400px'}>
          <Title c={'darkblue'} align='center' mt={20} mb={20}>Latest Collections</Title>
          <Carousel
            // withIndicators
            slideSize={{ base: '100%', sm: '50%', md: '25%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"

          >
            <Carousel.Slide><ItemCard image='https://hairfairywigs.com/11207-home_default/pearl-human-hair-wig-from-gem-collection.jpg' /></Carousel.Slide>
            <Carousel.Slide><ItemCard image='https://hairfairywigs.com/10401-home_default/thea-human-hair-wig.jpg' /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/9736-home_default/chagall-tec-deluxe-.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/9709-home_default/vermeer-2-.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/5018-home_default/mondo-wig-sale-1.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/4996-home_default/cosmo-wig-sale.jpg" /></Carousel.Slide>
          </Carousel>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col minHeight={'400px'}>
          <Title c={'darkblue'} align='center' mt={20} mb={20}>Shop Our Collection</Title>
          <Carousel
            // withIndicators
            slideSize={{ base: '100%', sm: '50%', md: '25%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"

          >
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/4890-home_default/obsession-wig-sale.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/1-home_default/sapphire.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/722-home_default/human-hair-2.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/3770-home_default/jim-toupet.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/3032-home_default/hanno-toupet.jpg" /></Carousel.Slide>
            <Carousel.Slide><ItemCard image="https://hairfairywigs.com/2964-home_default/oliver.jpg" /></Carousel.Slide>
          </Carousel>
        </Grid.Col>
      </Grid>
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
            {/* <Carousel.Slide>
              <div class="container_card_hover_image ">
                <div class="content_hover_img">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt=""/>
                      <div class="content-details fadeIn-top fadeIn-right">
                        <h3>This is a title</h3>
                        <p>This is a short description</p>
                      </div>
                </div>
              </div>
            </Carousel.Slide> */}
          </Carousel>

        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;