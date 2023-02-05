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
import {
    FiGrid
} from "react-icons/fi";
import React,{useRef} from "react";

const Category = ({ value, size }) => {
//   return (
    // <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'-webkit-max-content'}  p={10} position='absolute' top={7} left={13} color={value}>
    //     <Flex gap={50}  flexDir={size} flexWrap={'wrap'}>
    //         <Flex flexDir={'column'} gap={5}>
    //             <UnorderedList listStyleType='none'textAlign={'left'}>
    //                 <Heading  mb={1} size={'sm'}>Mobile</Heading>
    //                 <ListItem>Mobiles Phones</ListItem>
    //                 <ListItem>Tablets</ListItem>
    //                 <ListItem>Accesories</ListItem>
    //             </UnorderedList>
    //             <UnorderedList listStyleType='none'textAlign={'left'}>
    //             <Heading mb={1} size={'sm'}>Cars</Heading>
    //                 <ListItem>Cars</ListItem>
    //                 <ListItem>Bikes</ListItem>
    //                 <ListItem>Scooters</ListItem>
    //                 <ListItem>Bicycles</ListItem>
    //             </UnorderedList>
    //         </Flex>
    //         <Flex flexDir={'column'} gap={5} >
    //             <UnorderedList listStyleType='none'textAlign={'left'}>
    //                 <Heading mb={1} size={'sm'}>Fashion</Heading>
    //                 <ListItem>Men</ListItem>
    //                 <ListItem>Women</ListItem>
    //                 <ListItem>Kids</ListItem>
    //             </UnorderedList>
    //             <UnorderedList listStyleType='none'textAlign={'left'} >
    //             <Heading mb={1} size={'sm'}>Furniture</Heading>
    //                 <ListItem>Sofa & Dining</ListItem>
    //                 <ListItem>Beds & Wardrobes</ListItem>
    //                 <ListItem>Home Decor & Garden</ListItem>
    //                 <ListItem>Kids Furniture</ListItem>
    //                 <ListItem>Other</ListItem>
    //             </UnorderedList>
    //         </Flex>
    //         <Flex flexDir={'column'} gap={5}>
    //             <UnorderedList listStyleType='none' textAlign={'left'} >
    //             <Heading size={'sm'} mb={1}>Electric Appliances</Heading>
    //                 <ListItem>Tvs, Video & Audio</ListItem>
    //                 <ListItem>Kitchen & Other Appliances</ListItem>
    //                 <ListItem>Computers & Laptops</ListItem>
    //                 <ListItem>Cameras & Lenses</ListItem>
    //                 <ListItem>Games & Entertainment</ListItem>
    //                 <ListItem>Fridge</ListItem>
    //                 <ListItem>Computer Accessories</ListItem>
    //                 <ListItem>Hard Disk, Printers & Monitors</ListItem>
    //                 <ListItem>ACs</ListItem>
    //                 <ListItem>Washing Machines</ListItem>
    //             </UnorderedList>
    //         </Flex>
    //     </Flex>
    // </Box>
   
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

      return (
        <>
          <Button width={{
              base: ".5rem",
              sm: ".5rem",
              md: "1rem",
              lg: "1rem",
              xl: "2rem",
              "2xl": "2rem",
            }} ref={btnRef} colorScheme="transparent" onClick={onOpen} >
          <Text display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
            fontSize={{ md: 14, lg: 16, xl: 16, "2xl": 17 }}
            >All Categories</Text>
            <Box display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}>
            <FiGrid/>
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
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      );
    }
 


export default Category;
