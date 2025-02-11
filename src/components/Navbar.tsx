import { Flex, HStack, Image, Box, Text } from '@chakra-ui/react'

import logo from '../Icons/eLogo.svg'

export const Logo = () => {
  return <Image src={logo} alt="Logo" />
}

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      bg="white"
      borderBottom="1px solid #E2E8F0"
    >
      <Logo />

      {/* NAV LINKS */}
      <HStack spacing={8}>
        {['Overview', 'Transactions', 'Cards', 'Rewards'].map((item) => (
          <Box key={item}>
            <Text cursor="pointer" fontSize="md" fontWeight="medium">
              {item}
            </Text>
          </Box>
        ))}
      </HStack>
    </Flex>
  )
}

export default Navbar
