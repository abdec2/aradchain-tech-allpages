import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'


function PriceWrapper(props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      maxW={'500px'}
      >
      {children}
    </Box>
  )
}

export default function Plans() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
       
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Crypto Launch Pro Bundle
            </Text>
            <Text fontWeight="300" fontSize="md">
              Everything you need to launch you ico
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                13,750
              </Text>
              <Text fontSize="3xl" color="gray.500">
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem fontSize={'sm'}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Fully customized and deployed ERC20/BEP20 Token 
              </ListItem>
              <ListItem fontSize={'sm'}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Crypto Website - Crypto wallet integrated
              </ListItem>
              <ListItem fontSize={'sm'}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Crypto Presale Dapp - Nitro your crypto launch
              </ListItem>
              <ListItem fontSize={'sm'}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Crypto Claiming Dapp - Distribute & Reward your supporters
              </ListItem>
              <ListItem fontSize={'sm'}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Crypto Staking Dapp - Stake Tokens & Earn Rewards
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Purchase
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        
      </Stack>
    </Box>
  )
}