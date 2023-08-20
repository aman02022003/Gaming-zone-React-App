import { Text,Box, Container, Heading, Img, Stack } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"


const Home = () => {
    const headingoptions={
        pos:"absolute",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        textTransform:"uppercase",
        p : '4',
        size:"4xl"
    }
   
  return (
  
  <Box>
   {/* <MyCarousel/> */}
   <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows>
       <Box w="full" h={'100vh'}>
        <Img src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions}>
            Watch The Future
        </Heading>
       </Box>
       <Box w="full" h={'100vh'}>
        <Img src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions}>
            Esports is future
        </Heading>
       </Box>

       <Box w="full" h={'100vh'}>
        <Img src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions}>
            Playstation
        </Heading>
       </Box>

       <Box w="full" h={'100vh'}>
        <Img src={img4}h="full" w={'full'} objectFit={'cover'}  />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions}>
            xbox
        </Heading>
       </Box>
    </Carousel>

    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
       <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
        Services
       </Heading>
       <Stack
       
       h={'full'}
       p={'4'}
       alignItems={'center'}
       direction={['column','row']}
       
       >
        
        <Img src={img5} h={['40','400']} filter={"hue-rotate(-130deg)"}/>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
        Gaming is really a workout for your mind disguised as fun. Studies have shown that playing video games regularly may increase gray matter in the brain and boost brain connectivity. Gray matter is associated with muscle control, memories, perception, and spatial navigation. Gaming is playing an electronic video game, which is often done on a dedicated gaming console, PC or smartphone. People who often play video games are called gamers.
        </Text>
       </Stack>
    </Container>
   </Box>
  )
 }

export default Home
