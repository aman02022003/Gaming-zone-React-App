import { Avatar } from '@chakra-ui/react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={'100vh'} p={"16"}>
 
      <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full",'96']} m={"auto"} my={"16"}>
        
    <Heading>Gaming Zone</Heading>
    <Avatar alignSelf={"center"} boxSize={'32'}/>
    <Input type='text' placeholder='Enter your name' required focusBorderColor={"orange.500"}/>
        <Input type='email' placeholder='Enter your email' required focusBorderColor={"orange.500"}/>
        <Input type='password' placeholder='Enter your password' required focusBorderColor={"orange.500"}/>
     

        <Button type='submit' colorScheme='orange'>Sign Up</Button>
        <Button variant={"link"} colorScheme='orange'>
            <Link to={"/login"}>Login</Link>
        </Button>
        </VStack>
      </form>

    </Container>
  )
}

export default Signup
