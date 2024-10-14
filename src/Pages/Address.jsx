import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Container, Flex, Box, Text, Grid, GridItem, 
  useDisclosure, } from "@chakra-ui/react";
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

const Address = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();



  const handleClick = useCallback(
    (route) => {
      navigate(route); // Navigates to the passed route
    },
    [navigate]
  );

  const handleClick2 = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <Navbar />
      <Container centerContent>
        <Flex
          px={[5, 30]} // Responsive padding: smaller on mobile
          gap={30}
          //flexDirection={['column', 'row']} // Stack items vertically on mobile
        >
          {/* Sidebar */}
          <Box
            height={["auto", "470px"]} // Adjust height for mobile
            width={["100%", "25%"]} // Full width on mobile
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
              <Text fontSize={[14, 16]}>Account Setting</Text> {/* Adjust font size */}
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
              <Text fontSize={[14, 16]}>Order</Text>
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
              <Text fontSize={[14, 16]}>Wishlist</Text>
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
              <Text fontSize={[14, 16]}>Address</Text>
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
                <MdOutlineNotificationsActive color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={[14, 16]}>Notifications</Text>
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
              <Text fontSize={[14, 16]}>Legal Notice</Text>
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
              <Text fontSize={[14, 16]}>Help Center</Text>
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
              <Text fontSize={[14, 16]}>Change Password</Text>
            </Flex>

            {/* Logout */}
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/logout")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <CiLock color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={[14, 16]}>Logout</Text>
            </Flex>
          </Box>

          {/* Content */}
          <Box
            mt={30}
            h={["auto", "400px"]} // Adjust height for mobile
            w={["100%", "79%"]} // Full width on mobile
            justifyContent="space-between"
            border="1px solid #e0ebeb"
            borderRadius={5}
            p={[5, 25]} // Responsive padding
          >
            <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={15}>
              <GridItem
                w="100%"
                h="120"
                bg="blue.500"
                border={
                  selectedItem === 0 ? "2px solid #00cc99" : "1px solid #e0ebeb"
                }
                borderRadius={5}
                cursor="pointer"
                onClick={() => handleClick2(0)}
              >
                <Text mx={14} fontWeight="600">
                  Home
                </Text>
                <Text mx={14} color="#808080">
                  Wolfson Institute of Preventive Medicine, London EC1M 7BA, UK
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="120"
                bg="blue.500"
                border={
                  selectedItem === 0 ? "2px solid #ffcc00" : "1px solid #e0ebeb"
                }
                borderRadius={5}
                onClick={() => handleClick(0)}
                cursor="pointer"
              >
                <Text mx={14} fontWeight="600">
                  Office
                </Text>
                <Text mx={14} color="#808080">
                  80 Windsor Park Rd, Singapore 574175
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="120"
                bg="blue.500"
                border={
                  selectedItem === 0 ? "2px solid #00cc99" : "1px solid #e0ebeb"
                }
                borderRadius={5}
                onClick={() => handleClick2(0)}
                cursor="pointer"
              >
                <Text fontWeight="bold" align="center" mt={45} color="#00cc99">
                  <Text>+ Add Address</Text>
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Address;
