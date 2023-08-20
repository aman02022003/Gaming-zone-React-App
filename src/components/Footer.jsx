import { Text,Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
       <Stack direction={['column','row']}>
       <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
           Follow for more updates
        </Heading>
        <HStack
        borderBottom={'2px solid white'}
        py={'2'}
        >
            <Input placeholder='Enter Email Here' 
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor='none'
            />
            <Button
            p={'0'}
                  colorScheme='orange'
                  variant={"ghost"}
                  borderRadius={"0 20px 20px 0"}
            >
                <AiOutlineSend siz={'20'}/>
            </Button>
        </HStack>
       </VStack >

       <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
       >
           <Heading textTransform={'uppercase'} textAlign={'center'}>gaming zone</Heading>
          <Text>All Rights reserved</Text>
       </VStack>
       <VStack w={'full'}
        
       >
      <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
      </Heading>
      <Button variant={'link'} colorScheme='orange'>
        <a href='https://www.linkedin.com/in/aman-prajapati02' target={"blank"} >Linkedin</a>
      </Button>

      <Button variant={'link'} colorScheme='orange'>
        <a href='https://github.com/aman02022003' target={"blank"} >Github</a>
      </Button>


      <Button variant={'link'} colorScheme='orange'>
        <a href='https://leetcode.com/Aman_Prajapati/' target={"blank"} >Leetcode</a>
      </Button>
       </VStack>
       </Stack>

     
    </Box>
  )
}

export default Footer
