import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import xsell_logo from "../resource/X-new.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Login = () => {
  let [theme, setTheme] = useState(false);


  return (
    <Box
      // border={"2px solid"}
      display="flex"
      alignItems={"center"}
      flexDir={"column"}
      gap={{base:30,sm:30,md:'35px'}}
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

        // pos={"absolute"}
        // top="5rem"
        // left={"35rem"}
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
      <Heading size={'lg'} textAlign={'center'}  color='white'>Login</Heading>  
      </Flex>
        <Flex flexDir={"column"} gap="8rem">
          <Flex flexDir={"column"} gap={5} color="white">
            <Box>
              <FormLabel> Enter Your Email</FormLabel>
              <Input variant="filled" placeholder="Email" w={{base:'16rem',sm:'20rem'}} />
            </Box>
            <Box>
              <FormLabel> Enter A Password</FormLabel>
              <Input variant="filled" placeholder="Password" w={{base:'16rem',sm:'20rem'}} />
            </Box>
          </Flex>
          <Flex flexDir={"column"} gap={5}>
            <Box>
              <Button
                w={{base:'16rem',sm:'20rem'}}
                bg="green.500"
                color={"white"}
                borderRadius="20"
                _hover={{ color: "black", bg: "#E2E8F0" }}
              >
                Login
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
                <Link to={"/signup"}> New User? Signup</Link>
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
