import React, { useState } from "react";
import "./navbar.css";
import { Box, Button, Flex, Image, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import xsell_logo from "../resource/X-new.png";
import xsell_logo2 from "../resource/X-new2.png";
import {
  FiSearch,
  FiPlus,
  FiMenu,
  FiChevronUp,
  FiChevronDown,
  FiList,
  FiX,
} from "react-icons/fi";
import Login from './Login'
import Category from "./Category";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Navbar() {
  let [category, setCategory] = useState(false);

  return (
    <div>
      <Box
        //  className="navbar"
        w="100%"
        py={"0.5rem"}
        align={"center"}
      >
        <Flex
          align="center"
          // mx={"auto"}
          gap={{base:'5px',sm:'5px',md:'10px',lg:'20px',xl:'30px','2xl':'30px'}}
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
            // w={{
            //   base: "10%",
            //   sm: "7%",
            //   md: "16%",
            //   lg: "13%",
            //   xl: "10%",
            //   "2xl": "12%",
            // }}

          >
            <Link to='/'>
            <Image display={{base:'none',sm:'none',md:'inline'}} src={xsell_logo} alt="logo" maxWidth={'150px'}/>
            </Link>
            <Link to={'/'}>
            <Image display={{base:'inline',sm:'inline',md:'none'}} src={xsell_logo2} alt="logo" maxWidth={'80px'}/>
            </Link>
          </Box>
          <Input
            placeholder="select city"
            borderColor={"blue.500"}
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
            
            <Sidebar/>
          </Box>

          <Button
            leftIcon={<FiPlus  />}
            
            colorScheme="whatsapp"
            variant="solid"
            pr={"2rem"}
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
              md: "1.6rem",
              lg: "1.5rem", 
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
           <Link to={"/login"}>Login</Link>
          </Button>
        </Flex>
      </Box>
      {/* menu bar */}
      <Box
        
        fontSize={{ base: 12, sm: 12, md: 15, lg: 17, xl: 17, "2xl": 17 }}
        bg="grey"
        color={"white"}
        
      >
        <Flex
          pl={{ base: 2, sm: 2, md: 70, lg: 100, xl: 200, "2xl": 220 }}
          gap={{ base: 0, sm: 0, md: 85, lg: 115, xl: 140 }}
          w={{
            base: "95%",
            sm: "95%",
            md: "97%",
            lg: "95%",
            xl: "90%",
            "2xl": "90%",
          }}
          align='center'
        >
          <Flex
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
            textAlign={"center"}
            position="relative"
            onClick={() => setCategory(!category)}
          >
          <Category/>
          </Flex>
          <Flex
            textAlign={"center"}
            position="relative"
            onClick={() => setCategory(!category)}
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <Category />
          </Flex>
          <UnorderedList  display={'flex'} justifyContent={'space-between'} width={{base: "100%",
              sm: "80%",
              md: "80%",
              lg: "80%",
              xl: "60%",
              "2xl": "70%",}}
             
                listStyleType="none">
              <ListItem>Mobiles</ListItem>
                <ListItem>Cars</ListItem>
                <ListItem>Fashion</ListItem>
                <ListItem>Furniture</ListItem>
                <ListItem>Electronics</ListItem>
            </UnorderedList>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
