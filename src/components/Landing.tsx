import { Box, Heading, HStack, Text, Flex, Image } from '@chakra-ui/react'
import graph from '../Images/graph.jpg'

import bills from '../Icons/bills.svg'

import eat from '../Icons/eat.svg'
import entertainment from '../Icons/entertainment.svg'

import grocery from '../Icons/grocery.svg'
import health from '../Icons/health.svg'

import shop from '../Icons/shop.svg'

import transport from '../Icons/transport.svg'
import Records from './Records'

const Landing = () => {
  return (
    <>
      <Box as="section" w="960px" h="2010px" bg="white">
        {/* HEADINGS */}
        <Box textAlign="left">
          <Heading as="h1" mt="10" fontSize={['4xl', '4xl', '5xl']}>
            Overview
          </Heading>
          <Heading as="h6" fontSize="15px" mt="5">
            This month
          </Heading>
        </Box>

        {/* THE THREE MONEY BOXES */}

        <Flex
          mt="45"
          textAlign="left"
          gap={10}
          p="10px"
          direction={['column', 'column', 'row']}
        >
          <Box
            w="298px"
            h="112px"
            border="1px solid #D1DEE5"
            p={4}
            borderRadius="12px"
          >
            <Text>Total spent</Text>
            <Heading fontSize={['2xl', '2xl', '3xl']}>$2,415.00</Heading>
          </Box>
          <Box
            w="298px"
            h="112px"
            border="1px solid #D1DEE5"
            p={4}
            borderRadius="12px"
          >
            <Text>Average daily spending</Text>
            <Heading fontSize={['2xl', '2xl', '3xl']}>$120.75</Heading>
          </Box>
          <Box
            w="298px"
            h="112px"
            border="1px solid #D1DEE5"
            p={4}
            borderRadius="12px"
          >
            <Text>Spending goal</Text>
            <Heading fontSize={['2xl', '2xl', '3xl']}>$3,000.00</Heading>
          </Box>
        </Flex>

        {/* CATEGORY BOXES */}
        <Flex
          textAlign="left"
          gap={5}
          mt={10}
          direction={['column', 'column', 'row']}
        >
          {/* SPENDING CATEGORY */}
          <Box
            w="456px"
            h="387px"
            borderRadius="12px"
            border="1px solid #D1DEE5"
            p={4}
          >
            <Text fontWeight="semibold">Spending by category</Text>
            {/* TEXT AND ICON */}
            <Box pt={4} textAlign="left">
              <HStack mt={5}>
                <Text>Groceries</Text>
                <Image src={grocery} />
              </HStack>
              <HStack mt={5}>
                <Text>Eating out</Text>
                <Image src={eat} />
              </HStack>
              <HStack mt={5}>
                <Text>Shopping</Text>
                <Image src={shop} />
              </HStack>
              <HStack mt={5}>
                <Text>Transport</Text>
                <Image src={transport} />
              </HStack>
              <HStack mt={5}>
                <Text>Bills</Text>
                <Image src={bills} />
              </HStack>
              <HStack mt={5}>
                <Text>Entertainment</Text>
                <Image src={entertainment} />
              </HStack>
              <HStack mt={5}>
                <Text>Health</Text>
                <Image src={health} />
              </HStack>
            </Box>
          </Box>
          {/* GRAPH RECORD */}
          <Box
            w="456px"
            h="387px"
            borderRadius="12px"
            border="1px solid #D1DEE5"
            p={4}
          >
            <Text fontWeight="semibold">Daily spending</Text>
            <Image src={graph} />
          </Box>
        </Flex>

        {/* TRANSACTION RECORDS FEATURE */}
        <Records />
      </Box>
    </>
  )
}
export default Landing
