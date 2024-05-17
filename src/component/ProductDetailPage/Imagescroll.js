import React, {useEffect, useState} from 'react'
import { Image, Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Imagescroll() {
    const [imagedata,setImagedata]=useState()
    const imagearr = [
        { item: 1, image: "https://hairfairywigs.com/9744-large_default/symphony-mono-wig.jpg" },
        { item: 2, image: "https://hairfairywigs.com/9745-large_default/symphony-mono-wig.jpg" },
        { item: 3, image: "https://hairfairywigs.com/9746-large_default/symphony-mono-wig.jpg" },
        { item: 4, image: "https://hairfairywigs.com/9747-large_default/symphony-mono-wig.jpg" },

    ]
    useEffect(()=>{
        setImagedata(imagearr[0].image)
    },[])
    const clickimagechange=(image)=>{
        setImagedata(image)
    }
    return (
        <>
            <Box height={500} mb={5} p={5} style={{border:'1px solid darkblue',borderRadius:'10px'}}>
                <Carousel height={400} withControls={false} >
                    <Carousel.Slide>
                        <Image height='100%' width='100%' src={imagedata} style={{borderRadius:'10px',objectFit:'fill'}} />
                    </Carousel.Slide>

                </Carousel>
            </Box>
            <Box>
                <Carousel
                    withControls={imagearr.length <=4 ? false :true}
                    height={100}
                    slideSize="24%"
                    // slideGap="1%"
                    align="start"
                    loop
                >
                    {imagearr.map((item, index) => {
                        return (
                            <Carousel.Slide p={"1%"} mr={'1%'} style={{border:'1px solid darkblue',borderRadius:'10px'}} onClick={()=>{clickimagechange(item.image)}} >
                                <Image  style={{borderRadius:'10px',objectFit:'fill'}} height='100%' src={item.image} />
                            </Carousel.Slide>
                        )
                    })}

                </Carousel>
            </Box>
        </>
    )
}

export default Imagescroll