import {
  Flex,
  Box,
  Heading,
  Link,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Portal,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Image,
  SimpleGrid,
  Switch,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Signin from "./Signin";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    switch (item) {
      case "Sign in":
        navigate("/sign-in");
        break;
      case "Cart":
        navigate("/cart");
        break;
      default:
        console.log("Item not handled:", item);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"container.xl"} px={0}>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        px={20}
        bg="white"
        height={85}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            navigate("/");
          }}
          cursor="pointer"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg" // Replace with your image path
              alt="Logo"
              // boxSize="80px" // Adjust size as needed
              mr={2} // Margin to space the image from the heading
              w={131}
              h={30}
            />
          </Box>
        </Link>

        <Box display="flex" gap="20px" alignItems="center">
          {/* Dropdown Menu for Demos */}
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton
                  background="white"
                  border="none"
                  fontSize="15px"
                  px="0px"
                  ml={20}
                  pt={9}
                  opacity={0.8}
                >
                  Fresh Vegetables
                  <AccordionIcon boxSize="24px" opacity={0.8} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                pl={8}
                onClick={() => handleClick("arugula")}
                cursor=" pointer"
              >
                arugula
              </AccordionPanel>
              <AccordionPanel pb={4} pl={8}>
                asparagus
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Static links */}
          <GridItem w="70px" h="20" bg="red.500">
            Categories
          </GridItem>

          <GridItem w="70px" h="20" bg="red.500">
            Dietary
          </GridItem>

          <GridItem w="70px" h="20" bg="red.500">
            Search
          </GridItem>

          <GridItem w="70px" h="20" bg="red.500">
            Shops
          </GridItem>

          <GridItem w="70px" h="20" bg="red.500">
            Pages
          </GridItem>
        </Box>

        <Spacer />

        {/* Right side */}
        <Box display="flex" gap="20px" alignItems="center">
          <GridItem
            w="90px"
            h="20"
            bg="red.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            Engkifh-En
          </GridItem>

          <GridItem
            w="50px"
            h="20"
            bg="red.500"
            onClick={() => handleClick("Cart")} // Add onClick handler with identifier
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            Cart
          </GridItem>
          <Button
            onClick={onOpen}
            style={{ border: "none", background: "transparent" }}
          >
            Sign in
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay
              bg="blackAlpha.600"
              backdropFilter="blur(10px)" // Apply the blur effect here
            />
            <ModalContent
              width="90%"
              height="92%"
              mx="10%"
              mt="32px"
              bg="white"
              zIndex={100}
            >
              <ModalBody>
                <Flex>
                  <Box flex="1">
                    {" "}
                    {/* Image Section */}
                    <Image
                      src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogin.png&w=1920&q=75"
                      alt="Description"
                      borderRadius="md"
                      h={600}
                      w={700}
                    />
                  </Box>
                  <Box flex="1" px={48}>
                    {" "}
                    {/* Form Section */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg" // Replace with your image path
                        alt="Logo"
                        // boxSize="80px" // Adjust size as needed
                        mr={2} // Margin to space the image from the heading
                        mt={30}
                        h={32}
                      />
                      {/* <Heading fontSize="20px" color="Black" fontWeight="bold">
      BaroBazar
    </Heading> */}
                    </Box>
                    <Heading textAlign="center" fontSize="26px" my={0} mt={10}>
                      Welcome Back!
                    </Heading>
                    <Heading
                      textAlign="center"
                      fontSize="16px"
                      opacity={0.8}
                      fontWeight="normal"
                    >
                      Don’t have an account?{" "}
                      <Link
                        href="/create-account" // Replace with your route
                        color="#00cc99"
                        fontWeight="bold"
                        textDecoration="none"
                      >
                        Create Account
                      </Link>
                    </Heading>
                    <FormControl opacity={0.8}>
                      <FormLabel pb={8}>Email Address</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        h={40}
                        w={284}
                      />
                    </FormControl>
                    <FormControl mt={4} opacity={0.8}>
                      <FormLabel pb={8}>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        h={40}
                        w={284}
                      />
                    </FormControl>
                    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
                      <FormLabel htmlFor="isRequired">isRequired:</FormLabel>
                      <Switch id="isRequired" isRequired />
                    </FormControl>
                  </Box>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>

          {/* <Signin/> */}
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
