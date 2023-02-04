import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'


const Category = ({value}) => {
  return (
    <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'-webkit-max-content'}  p={10} position='absolute' top={7} left={13} color={value}>
        <Flex gap={50} >
            <Flex flexDir={'column'} gap={5}>
                <UnorderedList listStyleType='none'textAlign={'left'}>
                    <Heading  mb={1} size={'sm'}>Mobile</Heading>
                    <ListItem>Mobiles Phones</ListItem>
                    <ListItem>Tablets</ListItem>
                    <ListItem>Accesories</ListItem>
                </UnorderedList>
                <UnorderedList listStyleType='none'textAlign={'left'}>
                <Heading mb={1} size={'sm'}>Cars</Heading>
                    <ListItem>Cars</ListItem>
                    <ListItem>Bikes</ListItem>
                    <ListItem>Scooters</ListItem>
                    <ListItem>Bicycles</ListItem>
                </UnorderedList>
            </Flex>
            <Flex flexDir={'column'} gap={5} >
                <UnorderedList listStyleType='none'textAlign={'left'}>
                    <Heading mb={1} size={'sm'}>Fashion</Heading>
                    <ListItem>Men</ListItem>
                    <ListItem>Women</ListItem>
                    <ListItem>Kids</ListItem>
                </UnorderedList>
                <UnorderedList listStyleType='none'textAlign={'left'} >
                <Heading mb={1} size={'sm'}>Furniture</Heading>
                    <ListItem>Sofa & Dining</ListItem>
                    <ListItem>Beds & Wardrobes</ListItem>
                    <ListItem>Home Decor & Garden</ListItem>
                    <ListItem>Kids Furniture</ListItem>
                    <ListItem>Other</ListItem>
                </UnorderedList>
            </Flex>
            <Flex flexDir={'column'} gap={5}>
                <UnorderedList listStyleType='none' textAlign={'left'} >
                <Heading size={'sm'} mb={1}>Electric Appliances</Heading>
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
            </Flex>
        </Flex>
    </Box>
  )
}

export default Category
