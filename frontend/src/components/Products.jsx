import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  let [product, setProduct] = useState([]);

  let data = async () => {
    let { data } = await axios.get("http://localhost:3001/products");
    setProduct(data);
  };
  useEffect(() => {
    data();
  }, []);

  //  console.log(product)

  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={{ base: 6, sm: 6, md: 3, lg: 10 }}
      w="fit-content"
      m="auto"
      my={10}
    >
      {product &&
        product.map((ele) => (
            <Link to={`products/${ele.id}`}>
          <Flex
            flexDir={"column"}
            w={{
              base: "145px",
              sm: "175px",
              md: "215px",
              lg: "200px",
              xl: "266px",
            }}
            h={{ base: "150px", sm: "175px", md: "225px", lg: "235px" }}
            borderRadius={10}
            boxShadow={"lg"}
            border={"2px solid #eff1f3"}
            fontFamily={"sans-serif"}
            overflow="hidden"
          >
            <Box
              h={"70%"}
              
              display="flex"
              justifyContent={"center"}
            >
              <Image src={ele.photo} h="100%" />
            </Box>
            <Box
              px={{ base: "10px" }}
              h={"30%"}
              pt={{ base: "0px", sm: "5px", md: "10px" }}
              borderTop='1px solid #eff1f3'
            >
              <Heading size={{ base: "xs" }}>₹ {ele.price}</Heading>
              <Text
                fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "14px" }}
                textOverflow={"ellipsis "}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                {ele.title}
              </Text>
              <Text
                fontSize={{ base: "9px", sm: "9px", md: "12px", lg: "12px" }}
              >
                {ele.location}
              </Text>
            </Box>
          </Flex>
            </Link>
        ))}
    </Grid>
  );
};

export default Products;
