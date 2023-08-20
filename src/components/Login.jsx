import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    
    <Container maxW={"container.xl"} h={'100vh'} p={"16"}>
 
      <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full",'96']} m={"auto"} my={"16"}>
        
    <Heading> Welcome Back</Heading>
        <Input type='email' placeholder='Enter your email' required focusBorderColor={"orange.500"}/>
        <Input type='password' placeholder='Enter your password' required focusBorderColor={"orange.500"}/>
        <Button variant={"link"} alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget password</Link>
        </Button>

        <Button type='submit' colorScheme='orange'>Log In</Button>
        <Button variant={"link"} colorScheme='orange'>
            <Link to={"/signup"}>Sing Up</Link>
        </Button>
        </VStack>
      </form>

    </Container>
  )
}

export default Login
