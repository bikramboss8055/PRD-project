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
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { FiGrid } from "react-icons/fi";
import React, { useRef } from "react";

const Category = ({ value, size }) => {


  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        width={{
          base: ".5rem",
          sm: ".5rem",
          md: "1rem",
          lg: "1rem",
          xl: "2rem",
          "2xl": "2rem",
        }}
        ref={btnRef}
        colorScheme="transparent"
        onClick={onOpen}
      >
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          fontSize={{ md: 14, lg: 16, xl: 16, "2xl": 17 }}
        >
          All Categories
        </Text>
        <Box
          display={{
            base: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          <FiGrid />
        </Box>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>All Categories</DrawerHeader>

          <DrawerBody>
            <Box>
              <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Mobiles</Heading>
                <ListItem>Smart Phones</ListItem>
                <ListItem>Tablets</ListItem>
                <ListItem>Accesories</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Cars</Heading>
                <ListItem>Cars</ListItem>
                <ListItem>Bikes</ListItem>
                <ListItem>Scooters</ListItem>
                <ListItem>Bicycles</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Fashion</Heading>
                <ListItem>Men</ListItem>
                <ListItem>Women</ListItem>
                <ListItem>Kids</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Furniture</Heading>
                <ListItem>Sofa & Dining</ListItem>
                <ListItem>Beds & Wardrobes</ListItem>
                <ListItem>Home Decor & Garden</ListItem>
                <ListItem>Kids Furniture</ListItem>
                <ListItem>Other</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Electric Appliances</Heading>
                <ListItem>Tvs, Video & Audio</ListItem>
                <ListItem>Kitchen & Other Appliances</ListItem>
                <ListItem>Computers & Laptops</ListItem>
                <ListItem>Cameras & Lenses</ListItem>
                <ListItem>Games & Entertainment</ListItem>
                <ListItem>Fridge</ListItem>
                <ListItem>Computer Accessories</ListItem>
                <ListItem>Hard Disk, Printers & Monitors</ListItem>
                <ListItem>ACs</ListItem>
                <ListItem>Washing Machines</ListItem>
              </UnorderedList>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Category;
