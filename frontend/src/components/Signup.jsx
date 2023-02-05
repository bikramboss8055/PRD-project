import { Box, Button, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <Box
      p="20px"
      bgGradient='linear(to-l,#FF0080,#7928CA)'
      boxShadow='dark-lg'
      // border="1px solid"
      borderRadius={10}
      pos={"absolute"}
      top="5rem"
      left={"35rem"}
    >
      <Heading size={'lg'} textAlign={'center'} mb={5} color='white'>Sign Up</Heading>
      <Flex flexDir={"column"} gap="8rem">
        <Flex flexDir={"column"} gap={5} color='white'>
          <Box>
            <FormLabel> Enter Your Name</FormLabel>
            <Input variant="filled" placeholder="Your Name" w={"20rem"} />
          </Box>
          <Box>
            <FormLabel> Enter Your Email</FormLabel>
            <Input variant="filled" placeholder="Email" w={"20rem"} />
          </Box>
          <Box>
            <FormLabel> Enter A Password</FormLabel>
            <Input variant="filled" placeholder="Password" w={"20rem"} />
          </Box>
        </Flex>
        <Flex flexDir={"column"} gap={5}>
          <Box>
            <Button
              w={"20rem"}
              bg="green.500"
              color={"white"}
              borderRadius="20"
              _hover={{ color: "black", bg: "#E2E8F0" }}
            >
              Create An Account
            </Button>
          </Box>
          <Box>
            <Button
              w={"20rem"}
              bg="blue.500"
              color={"white"}
              borderRadius="20"
              _hover={{ color: "black", bg: "#E2E8F0" }}
            >
              Alredy have Account? Login
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Signup;
