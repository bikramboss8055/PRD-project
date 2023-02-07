import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Box>
      <Flex
        justify={"center"}
        justifyContent="space-evenly"
        bg={"#e5e5f7"}
        opacity={0.8}
        bgImage={"radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)"}
        bgSize={"10px 10px"}
        p={"20px 3px"}
      >
        <UnorderedList listStyleType="none" textAlign={"left"}>
          <Heading
            mb={1}
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}
          >
            POPULAR LOCATIONS
          </Heading>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Kolkata
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Mumbai
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            delhi
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Patna
          </ListItem>
        </UnorderedList>
        <UnorderedList listStyleType="none" textAlign={"left"}>
          <Heading
            mb={1}
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}
          >
            TRENDING LOCATIONS
          </Heading>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Bhubaneswar
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Hydrabad
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Pune
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Kanpur
          </ListItem>
        </UnorderedList>
        <UnorderedList listStyleType="none" textAlign={"left"}>
          <Heading
            mb={1}
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}
          >
            ABOUT US
          </Heading>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            About X-sell Group
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Careers
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Contact us
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            X-sell Community
          </ListItem>
          <ListItem>Jobs</ListItem>
        </UnorderedList>
        <UnorderedList listStyleType="none" textAlign={"left"}>
          <Heading
            mb={1}
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}
          >
            X-sell
          </Heading>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Help
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Sitemap
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Legal & Privacy Information
          </ListItem>
          <ListItem fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}>
            Blog
          </ListItem>
        </UnorderedList>
        <Box display={{ base: "none", sm: "none", md: "inline" }}>
          <Heading
            mb={1}
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "sm" }}
          >
            Follow Us
          </Heading>
          <Flex gap={2} fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "xl" }}>
            <RiFacebookCircleLine />
            <BsInstagram />
            <RiTwitterLine />
          </Flex>
          <Text mt={5} fontSize={"12px"}>
            All Rights Reserved ©️ 2006-2023 x-sell
          </Text>
          <Flex
            gap={2}
            mt={5}
            flexDir={{ base: "column", sm: "column", md: "row" }}
          >
            <Button
              bg={"black"}
              color="white"
              fontSize={"10px"}
              _hover={{ bg: "blue.500" }}
              w={{ base: "5.5rem", sm: "6rem", md: "7rem" }}
            >
              <Flex align={"center"} gap={2}>
                <Box>
                  <FaGooglePlay fontSize={"12px"} color="white" />
                </Box>
                <Box>
                  <Text fontSize={{ base: "7px", sm: "7px", md: "8px" }}>
                    Get It on
                  </Text>
                  Google Play
                </Box>
              </Flex>
            </Button>
            <Button
              bg={"black"}
              color="white"
              fontSize={"10px"}
              _hover={{ bg: "blue.500" }}
              w={{ base: "5.5rem", sm: "6rem", md: "7rem" }}
            >
              <Flex align={"center"} gap={2}>
                <Box>
                  <FaApple fontSize={"16px"} color="white" />
                </Box>
                <Box>
                  <Text fontSize={{ base: "7px", sm: "7px", md: "8px" }}>
                    {" "}
                    Download on the
                  </Text>
                  App Store
                </Box>
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Flex>
      {/* ------------------------ */}
      <Flex
        justify={"space-around"}
        align={"center"}
        p={"5px 0px"}
        bg={"#e5e5f7"}
        opacity={0.8}
        bgImage={"radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)"}
        bgSize={"10px 10px"}
        display={{ base: "flex", sm: "flex", md: "none" }}
      >
        <Box>
          <Heading mb={1} fontSize={{ base: "lg", sm: "lg" }}>
            Follow Us
          </Heading>
          <Flex gap={2} fontSize={{ base: "lg", sm: "lg" }}>
            <RiFacebookCircleLine />
            <BsInstagram />
            <RiTwitterLine />
          </Flex>
        </Box>
        <Flex flexDir={"column"} align={"end"}>
          <Flex gap={2} mt={1} flexDir={{ base: "row", sm: "row" }}>
            <Button
              bg={"black"}
              color="white"
              fontSize={"10px"}
              _hover={{ bg: "blue.500" }}
              w={{ base: "7rem", sm: "7rem" }}
            >
              <Flex align={"center"} gap={2}>
                <Box>
                  <FaGooglePlay fontSize={"15px"} color="white" />
                </Box>
                <Box>
                  <Text fontSize={{ base: "8px", sm: "8px" }}>Get It on</Text>
                  Google Play
                </Box>
              </Flex>
            </Button>
            <Button
              bg={"black"}
              color="white"
              fontSize={"10px"}
              _hover={{ bg: "blue.500" }}
              w={{ base: "7rem", sm: "7rem" }}
            >
              <Flex align={"center"} gap={2}>
                <Box>
                  <FaApple fontSize={"20px"} color="white" />
                </Box>
                <Box>
                  <Text fontSize={{ base: "8px", sm: "8px" }}>
                    {" "}
                    Download on the
                  </Text>
                  App Store
                </Box>
              </Flex>
            </Button>
          </Flex>
          <Text mt={2} fontSize={"12px"}>
            All Rights Reserved ©️ 2006-2023 x-sell
          </Text>
        </Flex>
      </Flex>

      <Flex justify={"center"} align={"center"}>
        <marquee>
          Made with Love❤️ 
        </marquee>
      </Flex>
    </Box>
  );
};

export default Footer;
