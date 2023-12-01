
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  Text,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

import { updateUserAttributes, fetchUserAttributes, signOut } from 'aws-amplify/auth' 
import { SmallCloseIcon } from '@chakra-ui/icons'
import CustomAuthenticator from '../../components/CustomAuthenticator'
import { useEffect, useState, useRef } from 'react';



export default function UserProfileEdit() {
    return (
      <CustomAuthenticator>
        <ProfilePage></ProfilePage>
      </CustomAuthenticator>
    )
}


const ProfilePage = () => {
  const [fetch, setFetch] = useState(true)
  const fName = useRef('');
  const lName = useRef('');
  const wallet = useRef('');
  const rlink = useRef('');
  const email = useRef('');
  const toast = useToast()
  const handleSubmit = async() => {
    if(fName.current.value !== '') {
      try {
        const data = {
          "custom:fname" : fName.current.value,
          "custom:lname" : lName.current.value,
          "custom:wallet" : wallet.current.value
        }
        if(wallet.current.value !== "") {
          data['custom:rlink'] = "https://aradchain.tech/plans?address="+wallet.current.value
        }
        const update = await updateUserAttributes({
          userAttributes: data
        });
        console.log(update)
        setFetch(true)
        toast({
          title: 'User Profile',
          description: "User Profile Updated",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } catch(e) {
        toast({
          title: 'User Profile',
          description: "Something went wrong",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    } else {
      toast({
        title: 'User Profile',
        description: "Please fill in the required field",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }
  }

  const fetchdata = async() => {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes)
      email.current.value = (userAttributes['email']) ? userAttributes['email'] : ''
      fName.current.value = (userAttributes['custom:fname']) ? userAttributes['custom:fname'] : ''
      lName.current.value = userAttributes['custom:lname'] ? userAttributes['custom:lname'] : ''
      wallet.current.value = userAttributes['custom:wallet'] ? userAttributes['custom:wallet'] : ''
      rlink.current.value = userAttributes['custom:rlink'] ? userAttributes['custom:rlink'] : ''
      setFetch(false)
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    if(fetch) {
      fetchdata()
    }
  }, [fetch])
  return (
    <>
      <Flex
        minH={'85vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Box textAlign={'right'}>
            <Button 
              w={'100px'} 
              color={'#fff'}
              bg={'#00234F'}
              _hover={
                {
                  bg: "#023a7f"
                }
              }
              onClick={signOut}
            >Signout</Button>
          </Box>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              ref={email}
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              disabled
            />
          </FormControl>

          <HStack>
              <Box>
              <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input ref={fName} type="text" />
              </FormControl>
              </Box>
              <Box>
              <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input ref={lName} type="text" />
              </FormControl>
              </Box>
          </HStack>

          <FormControl id="walletAddress">
            <FormLabel>Wallet Address</FormLabel>
            <Input
              placeholder=""
              _placeholder={{ color: 'gray.500' }}
              type="text"
              ref={wallet}
            />
          </FormControl>

          <FormControl id="walletAddress">
            <FormLabel>Referral Link</FormLabel>
            <Input
              disabled
              placeholder=""
              _placeholder={{ color: 'gray.500' }}
              type="text"
              ref={rlink}
            />
          </FormControl>
          
          <Stack spacing={6} direction={['column', 'row']}>
            
            <Button
              color={"white"}
              bg={"#00234F"}
              fontSize={"sm"}
              fontWeight={600}
              w={'full'}
              onClick={handleSubmit}
              _hover={{
                  bg: "#023a7f",
                }}>
              Submit
            </Button>
          </Stack>
        </Stack>
        
      </Flex>
    </>
  )
}