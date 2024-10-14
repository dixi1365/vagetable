import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import { Container, Flex, Box, Text } from "@chakra-ui/react";
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
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LagalNotic = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
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
            h="750px"
            w="79%"
            justifyContent="space-between"
            //fontWeight="bold"
            border="1px solid #e0ebeb"
            borderRadius={5}
            p={25}
            //fontSize={20}
            //borderBottom="1px solid #e0ebeb"
          >
            <Text fontWeight={700} fontSize={20} m={0} mb={20}>
              Legal Notice
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              Purpose
            </Text>

            <Text mb={30} fontSize={15}>
              The following outlines the terms of use for all BoroBazar
              template, services and website. Before you sign up and download or
              use REDQ downloadable product for your own purposes, please make
              sure you have read, understood, and agreed to all the terms.By
              using REDQ and/or other products, we assume you've accepted the
              terms of use given below.
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              {" "}
              Amendments
            </Text>

            <Text mb={30} fontSize={15}>
              REDQ Team. BoroBazar reserves the right, at its sole discretion,
              to modify or replace the terms of this Agreement at any time. If
              the alterations constitute a material change, REDQ may or may not
              notify you by posting an announcement on this website. What
              constitutes a material change will be determined at REDQ's sole
              discretion. You shall be responsible for reviewing and becoming
              familiar with any such modifications. Using our Services following
              notification of a material change to this Agreement shall
              constitute your acceptance of the Agreement as modified.
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              Product Compatibility/Updates
            </Text>

            <Text mb={30} fontSize={15}>
              Our template BoroBazar and template associated plugins are
              designed to be compatible with the latest available version of
              WordPress. Our templates and plugins support the latest modern web
              browsers including (but not limited to) Chrome, Safari and
              Firefox. We do not offer support for Internet Explorer for any of
              our template.
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              Limitation of Liability
            </Text>

            <Text mb={30} fontSize={15}>
              Under no circumstances shall REDQ will be liable for any direct,
              indirect, special, incidental or consequential damages, including,
              but not limited to, loss of data or profit, arising out of the
              use, or the inability to use, the materials on this site, even if
              REDQ or an authorized representative has been advised of the
              possibility of such damages. If your use of materials from this
              site results in the need for servicing, repair, or correction of
              equipment or data, you assume any costs thereof.
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              Modifications
            </Text>

            <Text mb={30} fontSize={15}>
              You are allowed to modify any of our products according to your
              requirements.Modifications made directly inside the plugin or
              template will void the support license. REDQ will not be bound to
              offer support for customized installations. Also, additional costs
              may occur to provide support of the customizations that you have
              made.
            </Text>

            <Text fontSize={18} m={0} fontWeight={500}>
              Limitation of Liability
            </Text>

            <Text mb={30} fontSize={15}>
              Under no circumstances shall REDQ will be liable for any direct,
              indirect, special, incidental or consequential damages, including,
              but not limited to, loss of data or profit, arising out of the
              use, or the inability to use, the materials on this site, even if
              REDQ or an authorized representative has been advised of the
              possibility of such damages. If your use of materials from this
              site results in the need for servicing, repair, or correction of
              equipment or data, you assume any costs thereof.
            </Text>


            <Text fontSize={18} m={0} fontWeight={500}>
              Limitation of Liability
            </Text>

            <Text mb={30} fontSize={15}>
              Under no circumstances shall REDQ will be liable for any direct,
              indirect, special, incidental or consequential damages, including,
              but not limited to, loss of data or profit, arising out of the
              use, or the inability to use, the materials on this site, even if
              REDQ or an authorized representative has been advised of the
              possibility of such damages. If your use of materials from this
              site re
              
              sults in the need for servicing, repair, or correction of
              equipment or data, you assume any costs thereof.
            </Text>

          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default LagalNotic;
