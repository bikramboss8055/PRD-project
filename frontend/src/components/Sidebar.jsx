import {
    Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMenu, FiPlus } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [status, setStatus] = useState(false);
  return (
    <>
      <Button
        bg={"transparent"}
        variant={"outline"}
        ref={btnRef}
        colorScheme="blue"
        border={"2px solid"}
        onClick={onOpen}
        p="0px"
      >
        <FiMenu fontSize={"2rem"} color="black" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            {status ? (
              <Flex flexDir={"column"} gap={5}>
                <Button colorScheme={"blue"}>
                  <Link to={"/login"}>Login Or Signup</Link>
                </Button>
                <Button colorScheme={"whatsapp"} leftIcon={<FiPlus />} onClick={()=>setStatus(!status)}>
                  
                  Sell
                </Button>
              </Flex>
            ) : (
              <Flex flexDir={"column"} h={'100%'} justify={'space-between'} >
                <Flex flexDir={"column"} gap={5}>
                <Button colorScheme={"blue"} leftIcon={<MdManageAccounts/> }>
                  <Link to={"/myacc"}> My Account</Link>
                </Button>
                <Button colorScheme={"whatsapp"} leftIcon={<FiPlus />}>
                  {" "}
                  Sell
                </Button>
                </Flex>
                <Button colorScheme={'red'} leftIcon={<BiLogOutCircle/>} 
                onClick={()=>setStatus(!status)}
                >
                    Log Out
                </Button>
              </Flex>
            )}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
