import { Box, HStack, VStack, Image, Text, Heading } from '@chakra-ui/react'
import {
  bag,
  food,
  car,
  dollar,
  games,
  love,
  stuff,
  graduate,
  dotsss,
} from './index.ts'

const Records = () => {
  return (
    <Box textAlign="left">
      {/* TRANSACTION HEADING  */}
      <Heading size="md" mt={10} fontSize={['sm', 'md', 'lg']}>
        Recent transactions
      </Heading>
      {/* ICON & TEXT */}
      <Box mt={4}>
        <HStack>
          <Image src={bag} />
          <VStack>
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $40.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 28, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={food} />
          <VStack>
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $25.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 27, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={bag} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $80.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 26, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={car} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $15.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 25, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={dollar} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $100.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 24, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={games} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $50.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 23, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={love} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $35.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 22, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={stuff} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $200.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 21, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={graduate} />
          <VStack textAlign="left">
            <Box textAlign="left" mt={6}>
              <Text fontWeight="medium" mt={-4}>
                $60.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 20, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack>
          <Image src={dotsss} />
          <VStack>
            <Box textAlign="left" mt={4}>
              <Text fontWeight="medium" mt={-4}>
                $45.00
              </Text>
              <Text fontWeight="light" color="#4F7A94">
                Jun 19, 2024
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  )
}
export default Records
