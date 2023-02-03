import React from "react";
import "./navbar.css";
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import xsell_logo from "../resource/X-sell_logo.png";
import { FiSearch, FiPlus, FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <div>
    <Box
      className="navbar"
      
      w="100%"
      
      py={"0.5rem"}
    
      align={"center"}
    >
      <Flex
        align="center"
        mx={"auto"}
        gap={30}
        
        w={{
          base: "95%",
          sm: "95%",
          md: "97%",
          lg: "95%",
          xl: "90%",
          "2xl": "90%",
        }}
      >
        <Box
          w={{
            base: "10%",
            sm: "7%",
            md: "6%",
            lg: "4%",
            xl: "4%",
            "2xl": "4%",
          }}
        >
          <Image src={xsell_logo} alt="logo" h={"auto"} width="100%" />
        </Box>
        <Input
          placeholder="select city"
          borderColor={'blue.500'}
          size="md"
          w={"20%"}
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
            "2xl": "inline-block",
          }}
        />
        <Flex w={"70%"}>
          <Input
            type={"text"}
            placeholder="search product"
            p={".66rem"}
            w={{
              base: "100%",
              sm: "100%",
              md: "90%",
              lg: "90%",
              xl: "90%",
              "2xl": "90%",
            }}
            
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            borderColor={"blue.500"}
          />
          <Button
            colorScheme="blue"
            variant="solid"
            
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            outline="none"
            focusBorderColor="transparent"
          >
            <FiSearch size={"20px"} />
          </Button>
        </Flex>
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          <FiMenu fontSize={"2rem"} />
        </Box>

        <Button
          leftIcon={<FiPlus />}
          colorScheme="whatsapp"
          variant="solid"
          pr={'2rem'}
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
            "2xl": "inline-block",
          }}
        >
          Sell
        </Button>

        <Button
          colorScheme="blue"
          variant="solid"
          pr={{
            base: "2rem",
            sm: "2rem",
            md: "1.5rem",
            lg: "1.2rem",
            xl: "1.5rem",
            "2xl": "1.5rem",
          }}
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
            "2xl": "inline-block",
          }}
        >
          Login
        </Button>
      </Flex>
    </Box>
  
    </div>
  );
}

export default Navbar;
