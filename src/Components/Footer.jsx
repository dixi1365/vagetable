import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Stack,
  Link,
  Input,
  FormControl,
  Center,
  Button,
  Divider,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { color } from "framer-motion";
const Footer = () => {
  return (
    <>
    
      <Box width="100%" height="100%" mt={30}>
        <Flex gap={8} px={50}>
          <Box width="29%">
          <Image 
      src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg" // Replace with your image path
      alt="Logo" 
     // boxSize="80px" // Adjust size as needed
      mr={2} // Margin to space the image from the heading
      mt={9}
 w={131}
   h={30}
   />
            <Box h={20} opacity={0.8} mt={20}>
              <text>
                We offer high-quality foods and the best delivery service, and
                the food market you can blindly trust
              </text>
            </Box>
            <Flex color="black" bg={"transparent"} mt="80px" gap={4}>
              <Center w="40px" h="40px">
                <a
                  href="https://www.facebook.com/redqinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook style={{ color: "#4267B2", fontSize: "22px" }} />
                </a>
              </Center>
              <Center w="40px" h="40px">
                <a
                  href="https://x.com/redqinc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter style={{ color: "#1DA1F2", fontSize: "22px" }} />
                </a>
              </Center>
              <Center w="40px" h="40px">
                <a
                  href="https://www.instagram.com/redqinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{ color: "#C13584", fontSize: "22px" }} />
                </a>
              </Center>
              <Center w="40px" h="40px">
                <a
                  href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube style={{ color: "#FF0000", fontSize: "22px" }} />
                </a>
              </Center>
            </Flex>
          </Box>

          <Box width="15%">
            <Heading mb={19} fontSize="17px">
              about us
            </Heading>
            <Box>
              <Stack spacing={2} color="Black">
                <Link
                  href="/about-us"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                  _hover={{ color: "teal.500" }}
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Contact Us
                </Link>
                <Link
                  href="/about-team"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  About Team
                </Link>
                <Link
                  href="/customer-support"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Customer Support
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box width="20%">
            <Heading mb={20} fontSize="17px">
              Our Information
            </Heading>
            <Box>
              <Stack spacing={2}>
                <Link
                  href="/privacy-policy"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Privacy Policy Update
                </Link>
                <Link
                  href="/terms-conditions"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/return-policy"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Return Policy
                </Link>
                <Link
                  href="/site-map"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Site Map
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box width="15%">
            <Heading mb={20} fontSize="17px">
              Subscribe Now
            </Heading>
            <Box>
              <Stack spacing={2}>
                <Link
                  href="/faq"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  FAQ
                </Link>
                <Link
                  href="/discussion-boards"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Discussion Boards
                </Link>
                <Link
                  href="/giving-works"
                  isExternal
                  textDecoration="none"
                  textColor="black"
                  opacity={0.8}
                >
                  Giving Works
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box width="23%">
            <Heading mb={20} fontSize="17px">
              Subscribe Now
            </Heading>
            <Box h={20} opacity={0.8}>
              <text>
                Subscribe your email for newsletter and featured news based on
                your interest
              </text>
            </Box>
            <Box>
              <FormControl>
                <Input
                  placeholder="Write your email here"
                  minWidth={{ base: "330px", md: "100%" }}
                  p={20}
                  mt="30%"
                  borderRadius={8}
                  // value={email}
                />
              </FormControl>
            </Box>
          </Box>
        </Flex>
        <Box px={30} pt={30} opacity="0.8">
          {" "}
          {/* x-axis padding */}
          <Divider border={1} />
        </Box>
        <Flex mt={25}>
          <Text px={50}>
            © Copyright 2024{" "}
            <Link
              href="https://redq.io/"
              color="black"
              _hover={{ color: "red.500", textDecoration: "underline" }}
              style={{ textDecoration: "none" }}
            >
              REDQ
            </Link>{" "}
            All rights reserved
          </Text>
          <Spacer />
          <Flex color="white" box-sizing=" border-box" pr={30} pb={30}>
            <Center w="60px" bg="green.500" m={0}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/800px-MasterCard_Logo.svg.png"
                alt="Example Image"
                h="20px"
                w="34px"
              />
            </Center>
            <Center w="70px" bg="green.500">
              <Image
                src="https://dorve.com/wp-content/uploads/2021/07/Visa-Logo-2006-2014.png"
                alt="Example Image"
                h="20px"
                w="50px"
              />
            </Center>{" "}
            <Center w="90px" bg="green.500">
              <Image
                src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x547-tu0aql1a.png"
                alt="Example Image"
                h="20px"
                w="76px"
              />
            </Center>{" "}
            <Center w="40px" bg="green.500">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgber4MngQY983WF6ItDL0bzmmImENuVrPw&s"
                alt="Example Image"
                h="20px"
                w="26px"
              />
            </Center>{" "}
            <Center w="50px" bg="green.500">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXaamreO7mJL6P9FPWnN2woWAP0oZkgGh2Q&s"
                alt="Example Image"
                h="40px"
                w="39px"
              />
            </Center>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
