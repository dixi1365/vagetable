import React from "react";
import {
  Container,
  Flex,
  Box,
  Text
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import {
  IoHeartOutline,
  IoHelpBuoyOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from '/src/Components/ProductCard';
const Wishlist = () => {
  const navigate = useNavigate();
    const products = [
        {
          imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&w=96&q=100',
          productName: 'Ocean Mist Farms Green Leaf Lettuce',
          quantity: '1 each',
          price: 2.6,
          originalPrice: 3.74,
          quantity: '1 each',
        },
        {
          imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&w=96&q=100',
          productName: 'Ocean Mist Farms Green Leaf Lettuce',
          quantity: '1 each',
          price: 2.6,
          originalPrice: 3.74,
          
        },
        {
            imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&w=96&q=100',
            productName: 'Ocean Mist Farms Green Leaf Lettuce',
            quantity: '1 each',
            price: 2.6,
            originalPrice: 3.74,
            quantity: '1 each',
          },
          {
            imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&w=96&q=100',
            productName: 'Ocean Mist Farms Green Leaf Lettuce',
            quantity: '1 each',
            price: 2.6,
            originalPrice: 3.74,
            
          },
          {
            imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=96&q=100',
            productName: 'Ocean Mist Farms Green Leaf Lettuce',
            quantity: '1 each',
            price: 2.6,
            originalPrice: 3.74,
            
          },
         
          {
            imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&w=96&q=100',
            productName: 'Ocean Mist Farms Green Leaf Lettuce',
            quantity: '1 each',
            price: 2.6,
            originalPrice: 3.74,
            
          },
          {
            imageSrc: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=96&q=100',
            productName: 'Ocean Mist Farms Green Leaf Lettuce',
            quantity: '1 each',
            price: 2.6,
            originalPrice: 3.74,
            
          },
         
        // Add more products here
      ];
      const handleClick = useCallback(
        (route) => {
          navigate(route); // Navigates to the passed route
        },
        [navigate]
      );
    
  return (
    <>
      <Navbar />
      <Container maxW="Container.xl" pb={5}>
        <Flex px={30} gap={30}>
          <Box
            height="420px"
            width="25%"
            mt={30}
            border="1px solid #e0ebeb"
            borderRadius={5}
          >
            {/* Account Settings */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <VscAccount color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Account Setting</Text>
            </Flex>

            {/* Order */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/orders")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <MdOutlineShoppingBag color="#8c8c8c" size="26px" />
              </Box>
              <Text fontSize={16}>Order</Text>
            </Flex>

            {/* Wishlist */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/wishlist")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <IoHeartOutline color="#8c8c8c" size="26px" />
              </Box>
              <Text fontSize={16}>Wishlist</Text>
            </Flex>

            {/* Address */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/address")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <TfiLocationPin color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Address</Text>
            </Flex>

            {/* Notifications */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/notifications")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <MdOutlineNotificationsActive color="#8c8c8c" size="20px" />
              </Box>
              <Text fontSize={14}>Notifications</Text>
            </Flex>

            {/* Legal Notice */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/legal-notice")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <FiSave color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Legal Notice</Text>
            </Flex>

            {/* Help Center */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/help-center")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <IoHelpBuoyOutline color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Help Center</Text>
            </Flex>

            {/* Change Password */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/My-account/change-password")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <IoSettingsOutline color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Change Password</Text>
            </Flex>

            {/* Logout */}
            <Flex
              h={30}
              alignItems="center"
              p={8}
              onClick={() => handleClick("/logout")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <CiLock color="#8c8c8c" size="20px" />
              </Box>
              <Text fontSize={14}>Logout</Text>
            </Flex>
          </Box>
          <Box
            mt={30}
            h="660px"
            w="79%"
            justifyContent="space-between"
            //fontWeight="bold"
            border="1px solid #e0ebeb"
            borderRadius={5}
            p={25}
            //fontSize={20}
            //borderBottom="1px solid #e0ebeb"
          >
            <Text fontWeight="bold" fontSize={20} m={0} mb={20}>
              Favorite List
            </Text>

            {products.map((product, index) => (
        <ProductCard 
          key={index}
          imageSrc={product.imageSrc}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
          originalPrice={product.originalPrice}
         
        />
      ))}
              
        
          </Box>

        </Flex>
      </Container>
    </>
  );
};

export default Wishlist;
