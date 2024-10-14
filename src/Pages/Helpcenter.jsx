import {
  Container,
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import React, { useState } from "react";
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
import Navbar from "../Components/Navbar";
const Helpcenter = () => {
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
      <Container centerContent>

      
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
            p={8}
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
          //h="500px"
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
          <Accordion defaultIndex={[0]} allowMultiple p={10}>
            <AccordionItem>
              <h2>
                <AccordionButton p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    p={10}
                    bg="white"
                    border="none" // Set border to none
                    fontWeight="600"
                    color="black"
                    
                    //letterSpacing={0.50}
                  >
                    Can I use this Template For Next JS or TypeScript learning?
                  </Box>
                  <AccordionIcon style={{ width: "20px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color="#595959"
                fontWeight={500}
                fontSize={15}
                border="none" 
              >
                Yes, You can use this Template for your Learning process. The
                coding structure is made easy for our customers.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    p={10}
                    bg="white"
                    border="none" // Set border to none
                    fontWeight="600"
                    color="black"
                    //letterSpacing={0.50}
                  >
                    How can I deploy BoroBazar Template?
                  </Box>
                  <AccordionIcon style={{ width: "20px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color="#595959"
                fontWeight={500}
                fontSize={15}
                border="none" // Set border to none here as well
              >
                We have made the deployment process clean and simple. You can deploy the Template easily by following our documentation
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
  <h2>
    <AccordionButton p={0}>
      <Box 
        as="span" 
        flex="1" 
        textAlign="left" 
        p={10} 
        bg="white"  
        border="none" // Set border to none
        fontWeight="600" 
        color="black" 
        //letterSpacing={0.50}
      >
        How can I get the customer support?
      </Box>
      <AccordionIcon style={{ width: "20px" }} />
    </AccordionButton>
  </h2>
  <AccordionPanel 
    pb={4} 
    color="#595959" 
    fontWeight={500} 
    fontSize={15} 
    border="none" // Set border to none here as well
  >
   After purchasing the product please open a ticket in the support forum and our support guys are always ready to help you at any kind of case. Follow this link: https://redqsupport.ticksy.com/
  </AccordionPanel>
</AccordionItem>
<AccordionItem>
  <h2>
    <AccordionButton p={0}>
      <Box 
        as="span" 
        flex="1" 
        textAlign="left" 
        p={10} 
        bg="white"  
        border="none" // Set border to none
        fontWeight="600" 
        color="black" 
        //letterSpacing={0.50}
      >
        Will you regularly give updates of BoroBazar Template?
      </Box>
      <AccordionIcon style={{ width: "20px" }} />
    </AccordionButton>
  </h2>
  <AccordionPanel 
    pb={4} 
    color="#595959" 
    fontWeight={500} 
    fontSize={15} 
    border="none" // Set border to none here as well
  >
   The refund is available when we have shown the feature on our demo however it is not available on our template..
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton p={0}>
      <Box 
        as="span" 
        flex="1" 
        textAlign="left" 
        p={10} 
        bg="white"  
        border="none" // Set border to none
        fontWeight="600" 
        color="black" 
        //letterSpacing={0.50}
      >
        How can I get the refund?
        
      </Box>
      <AccordionIcon style={{ width: "20px" }} />
    </AccordionButton>
  </h2>
  <AccordionPanel 
    pb={4} 
    color="#595959" 
    fontWeight={500} 
    fontSize={15} 
    border="none" // Set border to none here as well
  >
   Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton p={0}>
      <Box 
        as="span" 
        flex="1" 
        textAlign="left" 
        p={10} 
        bg="white"  
        border="none" // Set border to none
        fontWeight="600" 
        color="black" 
        //letterSpacing={0.50}
      >
       
        Template installation failed, how to run the template? 
      </Box>
      <AccordionIcon style={{ width: "20px" }} />
    </AccordionButton>
  </h2>
  <AccordionPanel 
    pb={4} 
    color="#595959" 
    fontWeight={500} 
    fontSize={15} 
    border="none" // Set border to none here as well
  >
   Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum
  </AccordionPanel>
</AccordionItem>
          </Accordion>
        </Box>
       
      </Flex>
      </Container>
    </>
  );
};

export default Helpcenter;
