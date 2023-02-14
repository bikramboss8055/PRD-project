import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [heartStatus, setHeartStatus] = useState(false);
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  let data = async () => {
    let { data } = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(data);
  };
  useEffect(() => {
    data();
  }, []);

  //   console.log(product);
  return (
    <>
      <Flex
        w={"80%"}
        // h={"80vh"}
        border="1px solid"
        m={"auto"}
        justify="space-between"
        fontFamily={'sans-serif'}
      >
        <Flex w={"65%"} border="1px solid" flexDir={"column"}>
          <Box
            w={"100%"}
            h={"20rem"}
            overflow="hidden"
            border={"1px solid"}
            bg="black"
          >
            <Image src={product.photo} h="100%" m={"auto"} />
          </Box>
          <Flex px={5} gap={5} my={3}>
            <Box
              w={"5rem"}
              h="5rem"
              border={"1px solid"}
              borderRadius={10}
              overflow="hidden"
            >
              <Image src={product.photo} h="100%" m={"auto"} />
            </Box>
            <Box
              w={"5rem"}
              h="5rem"
              border={"1px solid"}
              borderRadius={10}
              overflow="hidden"
            >
              <Image src={product.photo} h="100%" m={"auto"} />
            </Box>
            <Box
              w={"5rem"}
              h="5rem"
              border={"1px solid"}
              borderRadius={10}
              overflow="hidden"
            >
              <Image src={product.photo} h="100%" m={"auto"} />
            </Box>
            <Box
              w={"5rem"}
              h="5rem"
              border={"1px solid"}
              borderRadius={10}
              overflow="hidden"
            >
              <Image src={product.photo} h="100%" m={"auto"} />
            </Box>
          </Flex>
          <Flex border={"1px solid"} flexDir="column" px={5} gap={5}>
            <Flex flexDir={"column"} gap={2} py={5} borderBottom="1px solid">
              <Heading size="md">Details</Heading>
              <Flex gap={20}>
                <Text>Brand</Text>
                <Text>{product.brand}</Text>
              </Flex>
            </Flex>
            <Flex flexDir={"column"} gap={2}>
              <Heading size={"md"}>Description</Heading>
              <Text>{product.description}</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* ----------------------------------------right side */}
        <Flex w={"30%"} border="1px solid" flexDir={"column"} gap={5}>
          <Flex flexDir={"column"} border={"1px solid"} p={5} gap={2}>
            <Flex justify={"space-between"} align={"center"}>
              <Heading size={"xl"}>₹{product.price}</Heading>
              <Heading size={"md"} onClick={() => setHeartStatus(!heartStatus)}>
                {heartStatus ? <BsSuitHeartFill /> : <BsSuitHeart />}
              </Heading>
            </Flex>
            <Text>{product.title}</Text>
            <Text>{product.location}</Text>
          </Flex>
          <Flex flexDir={"column"} border='1px solid' p={5} gap={3}>
            <Flex align={'center'} gap={2}>
                <Box w={10} borderRadius={50} overflow='hidden'>
                    <Image src='https://picsum.photos/200'/>
                   
                </Box>
                <Heading size='md'>{product.owner}</Heading>
            </Flex>
            <Button
              rightIcon={<MdArrowForwardIos />}
              colorScheme="teal"
              variant="outline"
            >
              Chat with seller
            </Button>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SingleProduct;
