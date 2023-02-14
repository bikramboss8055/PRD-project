import { Box, Button, Flex, FormLabel, Heading, IconButton, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import xsell_logo from "../resource/X-new.png";

const Signup = () => {
  let [theme, setTheme] = useState(false);

  return (
    <Box
      // border={"2px solid"}
      display="flex"
      alignItems={"center"}
      flexDir={"column"}
      gap={{base:30,sm:30,md:'30px'}}
      pt={5}
      // h={'100vh'}
      bgColor={theme? "blackAlpha.900":"whiteAlpha.500"}
    >
      <Link to={'/'}>
        <Image src={xsell_logo} alt="logo" maxWidth={"150px"} />
      </Link>
      <Box
       p={{base:'15px',sm:'15px',md:'20px'}}
        bgGradient="linear(to-l,#FF0080,#7928CA)"
        boxShadow="dark-lg"
        // border="1px solid"
        borderRadius={10}
        w={"fit-content"}
    >
      <Flex   alignItems={'center'} flexDir='row-reverse' gap={'5rem'} mb={5}>
      <IconButton
      
                aria-label="toggle theme"
                bgColor={'blue.300'}
                rounded="full"
                size="xs"
              
                onClick={() => setTheme(!theme)}
                icon={theme ? <FaMoon />: <FaSun color="black" />  }
              />
      <Heading size={'lg'} textAlign={'center'}  color='white'>Sign Up</Heading>  
      </Flex>
      <Flex flexDir={"column"} gap="3.5rem">
        <Flex flexDir={"column"} gap={4} color='white'>
          <Box>
            <FormLabel> Enter Your Name</FormLabel>
            <Input variant="filled" placeholder="Your Name"w={{base:'16rem',sm:'20rem'}} />
          </Box>
          <Box>
            <FormLabel> Enter Your Email</FormLabel>
            <Input variant="filled" placeholder="Email" w={{base:'16rem',sm:'20rem'}} />
          </Box>
          <Box>
            <FormLabel> Enter A Password</FormLabel>
            <Input variant="filled" placeholder="Password" w={{base:'16rem',sm:'20rem'}} />
          </Box>
        </Flex>
        <Flex flexDir={"column"} gap={3}>
          <Box>
            <Button
              w={{base:'16rem',sm:'20rem'}}
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
             w={{base:'16rem',sm:'20rem'}}
              bg="blue.500"
              color={"white"}
              borderRadius="20"
              _hover={{ color: "black", bg: "#E2E8F0" }}
            >
              <Link to={'/login'}>Alredy have Account? Login</Link>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
    </Box>
  
  );
};

export default Signup;
