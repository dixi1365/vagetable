import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Container,
  Flex,
  Box,
  Text,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  FormControl,
  Button,
  Switch,
  Spacer
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

const Myaccount = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [conformpassword, setconformpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isToggled, setIsToggled] = useState(false);

  // Dynamic handleClick for navigation
  const handleClick = useCallback(
    (route) => {
      navigate(route); // Navigates to the passed route
    },
    [navigate]
  );

  const handleClickbutton = () => {
    console.log("Button was clicked!");
  };
  const handleSubmit = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "password is required";
    if (!conformpassword) newErrors.conformpassword = "conformpassword is required";
    

    setErrors(newErrors);

    // Proceed with form submission only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted");
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <Navbar />
      <Container centerContent>
        <Flex px={30} gap={30}>
          <Box
            height="476px"
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
                <MdOutlineNotificationsActive color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Notifications</Text>
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
              p={11}
              onClick={() => handleClick("/logout")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                <CiLock color="#8c8c8c" size="21px" />
              </Box>
              <Text fontSize={16}>Logout</Text>
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
            <Text fontWeight="bold" fontSize={20}>
              {" "}
              Personal Information
            </Text>
            <Flex gap={40}>
              <FormControl isInvalid={errors.firstName}>
                <FormLabel fontSize={13} mb={6} color="#8c8c8c">
                  First Name*
                </FormLabel>
                <Input
                  type="text"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Last Name */}
              <FormControl isInvalid={errors.lastName}>
                <FormLabel fontSize={13} mb={6} color="#8c8c8c">
                  Last Name*
                </FormLabel>
                <Input
                  type="text"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.lastName}</FormErrorMessage>
              </FormControl>
            </Flex>

            {/* Phone */}
            <Flex gap={40} borderBottom="1px solid #e0ebeb" pb={34}>
              <FormControl isInvalid={errors.phone}>
                <FormLabel fontSize={13} my={10} color="#8c8c8c">
                  Phone/Mobile *
                </FormLabel>
                <Input
                  type="text"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.phone}</FormErrorMessage>
              </FormControl>
            </Flex>

            {/* Email */}
            <Flex gap={40} pb={34}>
              <FormControl isInvalid={errors.email}>
                <FormLabel fontSize={13} my={10} color="#8c8c8c">
                  Email *
                </FormLabel>
                <Input
                  type="email"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.email}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex gap={40}>
              <FormControl isInvalid={errors.password}>
                <FormLabel fontSize={13} mb={6} color="#8c8c8c">
                 password
                </FormLabel>
                <Input
                  type="text"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.password}</FormErrorMessage>
              </FormControl>

              {/* Last Name */}
              <FormControl isInvalid={errors.conformpassword}>
                <FormLabel fontSize={13} mb={6} color="#8c8c8c">
                conformpassword
                </FormLabel>
                <Input
                  type="text"
                  h={30}
                  w={380}
                  border="1px solid #e0ebeb"
                  borderRadius={4}
                  value={conformpassword}
                  onChange={(e) => setconformpassword(e.target.value)}
                />
                <FormErrorMessage color="#ff3333">{errors.conformpassword}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex>
              <Box w={500} mt={30}>
                <Text fontSize={15} m={0} fontWeight="bold">
                  Share Profile Data
                </Text>

                <Text m={0} fontSize={13}>
                  Share your profile information to collect the product search
                  result
                </Text>
                <Spacer/>
                <Switch mt={2} isChecked={isToggled} onChange={handleToggle} cursor="pointer" />
              </Box>
            </Flex>
            <Flex>
              <Box mt={30}>
                <Text fontSize={15} m={0} fontWeight="bold">
                  Ads Performance
                </Text>

                <Text m={0} fontSize={13}>
                  To improve your ads search result we need to collect your
                  cookies behavior
                </Text>
                <Switch mt={2}  isChecked={isToggled} onChange={handleToggle} />
              </Box>
            </Flex>
            
            {/* Submit Button */}
            <Button
              colorScheme="blue"
              mt={25}
              onClick={handleSubmit}
              cursor="pointer"
              border="1px solid #e0ebeb"
              borderRadius={4}
              h={25}
              w={65}
              bg="#02b290"
              color="white"
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Myaccount;