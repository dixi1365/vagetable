import {
  Flex,
  Box,
  Container,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  useNumberInput,
  HStack,
  Input,
  IconButton,
  Tag,
  TagLabel, Icon, 
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";
const Productdetails = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 1,
      max: 16,
      // precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <Navbar />
      <Container px={45}>
        <Text p={20} fontWeight="bold" fontSize={24} m={0}>
          Fresh Green Leaf Lettuce
        </Text>

        <Flex gap={20}>
          <Flex flexDirection="column" pl={50} gap={10} >
            <Box
              style={{
                boxSizing: "border-box",
                 width: "100px",
               border:"1px solid  #a3c2c2"
              }}
            >
              <Image
               src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-1.png&w=750&q=75"
                style={{ width: "100%", height: "auto" }}
                
              />
            </Box>

            <Box
              style={{
                boxSizing: "border-box",
                width: "100px",
                border:"1px solid  #a3c2c2",
                 
              }}
            >
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-2.png&w=750&q=75"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Box
              style={{
                boxSizing: "border-box",
                width: "100px",
                border:"1px solid  #a3c2c2"

              }}
            >
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-3.png&w=750&q=75"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Flex>
          <Flex
            flexDirection="row"
            boxSizing="border-box"
            border="1px solid  #a3c2c2"
              borderRadius="5"
              height="390px"
             
          >

            <Image
              src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-1.png&w=256&q=75"
               style={{ width: "500px", height: "40" }}
           />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} width={"50%"}>
            <Flex
              justify="center"
              direction={"column"}
              gap={10}
              align={{ base: "center", lg: "flex-start" }}
              px={40}
            >
              <Heading
                as={"header"}
                lineHeight={1.1}
                fontWeight={"normal"}
                fontSize={{
                  base: "1xl",
                  sm: "2xl",
                  lg: "3xl",
                }}
                textAlign={{
                  base: "center",
                  lg: "start",
                }}
                textTransform={"capitalize"}
              >
                <Text fontWeight="bold" fontSize="1.5rem" m={0}>
                  {" "}
                  Fresh Green Leaf Lettuce
                </Text>
                <Text fontSize={15}  >1 each</Text>
                <Flex direction={"column"} m={0} mt={10}>
                  <Text fontSize={17} fontWeight="bold" mr={0} ml={8}>
                    $2.64{" "}
                    <del style={{ fontWeight: "100 !important" }}>$2.74</del>
                    <Button bg="#e0e0d1" borderRadius={4} border="none" ml={10}>
                      4% Off
                    </Button>
                  </Text>{" "}
                </Flex>
                <Text textColor="#F98F14" m={0} pb={10}>Only 70 item left!</Text>
                <Box w="100%">
                  {/* Quantity Control */}
                  <Flex
                    align="center"
                    justify="center"
                    bg="#f0f5f5"
                    borderRadius="md"
                    p={3}
                    border="#e5e7eb"
                    mb={12}
                    w="99%"
                  >
                    <IconButton
                      icon={<FiMinus size={32} />}
                      aria-label="Decrease quantity"
                      size="sm"
                      borderRadius="none"
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      width="3rem"
                      border="none"
                    />
                    <Text width="7rem" textAlign="center" fontSize={16}>
                      1
                    </Text>
                    <IconButton
                      icon={<GoPlus size={32} border="none" />}
                      aria-label="Increase quantity"
                      size="sm"
                      borderRadius="none"
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      width="3rem"
                      border="none"
                    />
                  </Flex>

                  {/* Add to Cart Button */}
                  <Button
                    leftIcon={
                      <HiOutlineShoppingBag
                        size={32}
                        border="none"
                        color="white"
                      />
                    }
                    colorScheme="teal"
                    size="lg"
                    w="100%"
                    borderRadius="md"
                    bg="#00cc99"
                    border="none"
                    mb={16}
                  >
                    <Text
                      width="7rem"
                      textAlign="center"
                      fontSize={16}
                      color="white"
                      fontWeight="bold"
                    >
                      Add to Cart
                    </Text>
                  </Button>

                  <Flex gap={9}>
                    <Button
                      leftIcon={<FaHeart size={20} />}
                      border="1px solid #a3c2c2"
                       borderRadius="5"
                      w="100%"
                      p={3}
                      bg="white"
                    >
                      <Text fontSize={16}>Wishlist</Text>
                    </Button>
                    <Button
                      leftIcon={<TbShare3 size={20} />}
                      border="1px solid #a3c2c2"
                    borderRadius="5"
                      w="100%"
                      p={3}
                      bg="white"
                    >
                      <Text fontSize={18}> Share </Text>
                    </Button>
                  </Flex>
                  <Flex align="center" pt={20}>
      {/* Icon and Tags Text */}
      <Icon as={ AiOutlineTag} boxSize={20} mr={2} color="#a3c2c2" />
      <Text mr={2} color="#4d4d4d">Tags:</Text>

      {/* Tags */}
      <Flex gap={6} flexWrap="wrap" width={900} >
        <Tag h={20} w={80}    borderRadius="4" color=" #4d4d4d" p={3} border="1px solid  #a3c2c2" ml={10}>
          <TagLabel >Fresh food</TagLabel>
        </Tag>
        <Tag h={20} w={57}    borderRadius="4" color=" #4d4d4d" p={3} border="1px solid  #a3c2c2" alignItems="center">
          <TagLabel >Organic</TagLabel>
        </Tag>
        <Tag h={20} w={40}    borderRadius="4" color=" #4d4d4d" p={3} border="1px solid  #a3c2c2" alignItems="center">
          <TagLabel >Cilantro</TagLabel>
        </Tag>
        <Tag h={20} w={66}    borderRadius="4" color=" #4d4d4d" p={3} border="1px solid  #a3c2c2">
          <TagLabel >Dry Food</TagLabel>
        </Tag>
      </Flex>
    </Flex>
    <Box pt={15}>
          <Heading fontSize="24" m={0}>Product Details:</Heading>
          <Text color="#595959" m={0} mt={10}>
            Vegetables are parts of plants that are consumed by humans or other animals as food. The first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter.
          </Text>
        </Box>
                </Box>
              </Heading>
            </Flex>
          </Stack>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
};

export default Productdetails;
