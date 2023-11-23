
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
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Authenticator  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



export default function UserProfileEdit({ signOut, user }) {
  return (
    <Authenticator >
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
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile
        </Heading>
        
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>

        <HStack>
            <Box>
            <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
            </FormControl>
            </Box>
            <Box>
            <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
            </FormControl>
            </Box>
        </HStack>

        <FormControl id="walletAddress">
          <FormLabel>Wallet Address</FormLabel>
          <Input
            placeholder=""
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl id="walletAddress">
          <FormLabel>Referral Link</FormLabel>
          <Input
            disabled
            placeholder=""
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        
        <Stack spacing={6} direction={['column', 'row']}>
          
          <Button
            color={"white"}
            bg={"#00234F"}
            fontSize={"sm"}
            fontWeight={600}
            w={'full'}
            _hover={{
                bg: "#023a7f",
              }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
    </Authenticator >
  )
}