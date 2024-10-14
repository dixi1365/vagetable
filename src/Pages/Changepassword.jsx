import React from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
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

const Changepassword = () => {
  const [show, setShow] = React.useState(false);
  const [showw, setShoww] = React.useState(false);

  const handleClick = () => setShow(!show);
  const handleClick1 = () => setShoww(!showw);

  
  return (
    <>
      <Navbar />
      <Flex px={30} gap={30}>
        <Box
          height="470px"
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
          h="470px"
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
            Change Password
          </Text>
          <Box fontSize={14} mt={30} mb={12} color="#8c8c8c">
            old password
          </Box>
          <InputGroup size="md">
            <Input
              onChange={(e) => setpassword(e.target.value)}
              border="1px solid #e0ebeb"
              borderRadius={5}
              w={390}
              h={40}
              pr="4.5rem"
              type={show ? "text" : "password"}
             
            />

            <Button
              h="2.75rem"
              size="sm"
              onClick={handleClick}
              borderRadius={5}
              border="1px solid #e0ebeb"
            >
              {show ? "Show" : "Hide"}
            </Button>
          </InputGroup>

          <Box fontSize={14} mt={30} mb={12} color="#8c8c8c">
            New password
          </Box>
          <InputGroup size="md">
            <Input
              onChange={(e) => setpassword(e.target.value)}
              border="1px solid #e0ebeb"
              borderRadius={5}
              w={390}
              h={40}
              pr="4.5rem"
              type={show ? "text" : "password"}
              
            />

            <Button
              h="2.75rem"
              size="sm"
              onClick={handleClick1}
              borderRadius={5}
              border="1px solid #e0ebeb"
            >
              {showw ? "Show" : "Hide"}
            </Button>
          </InputGroup>
          <Button
            colorScheme="blue"
            mt={25}
           // onClick={handleSubmit}
            cursor="pointer"
            border="1px solid #e0ebeb"
            borderRadius={5}
            h={45}
            w={175}
            bg="#02b290"
            color="white"
            fontSize={15}
            
           
          >
            Change password
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Changepassword;
