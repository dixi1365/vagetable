import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Text,
  Container,
  Input,
  Stack,
  HStack,
  Heading,
  Button,
  ButtonGroup,
  Image,
  IconButton,
  Card,
  CardBody,
  Flex,
  Link,
  Grid,
  GridItem,
  CardFooter,
  Divider,
  Center,
  Square,
  useNumberInput,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import banner from "../Images/banner.jpg";
import banner2 from "../Images/banner-2.webp";
import img1 from "../Images/1.webp";
import img2 from "../Images/2.webp";
import img3 from "../Images/3.webp";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { transform } from "framer-motion";
import Footer from "../Components/Footer";
import { useCallback } from "react";
const Home =  () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/Productdetails'); // Replace with the desired route
  }, [navigate]);

  const cardData = [
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Ffresh-vegetables.png&w=256&q=100",
      alt: "Fresh vegetable",
      text: "Fresh vegetable",
          },
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fdiet-foods.png&w=256&q=100",
      alt: "Diet foods",
      text: "Diet foods",
      //url: "/diet-foods", // Example URL
    },
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fdiet-nutrition.png&w=256&q=100",
      alt: "Diet-Nutrition",
      text: "Diet-Nutrition",
      // url: "/diet-nutrition", // Example URL
    },
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Ffruits-items.png&w=256&q=100",
      alt: "Fast food items",
      text: "Fast food items",
      // url: "/fast-food-items", // Example URL
    },
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fhealthy-foods.png&w=256&q=100",
      alt: "Fruits item",
      text: "Fruits item",
      // url: "/fruits-item", // Example URL
    },
    {
      src: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fgrocery-items.png&w=256&q=100",
      alt: "Healthy foods",
      text: "Healthy foods",
      // url: "/healthy-foods", // Example URL
    },
  ];
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 16,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
      <Box
        position="relative"
        // height={{ base: "70vh", md: "100%" }} // Full viewport height
        width="100%" // Full viewport width
        backgroundImage="https://borobazar.vercel.app/assets/images/hero/banner-4.webp"// Set background image
        backgroundSize="cover" // Ensure the image covers the entire box
        backgroundPosition="center" // Center the image
        backgroundRepeat="no-repeat" // Prevent repeating the image
        mb={30}
        overflow={"hidden"}
      >
        <Container
          height="100%" // Make container fill the full height
          //alignItems="center" // Center vertically
          justifyContent="center" // Center horizontally
          textAlign="center"
          py={80}
          px={350}
        >
          <Text
            color="#0B4635" // Change text color to make it more visible
            fontSize="47" // Responsive font sizes
            fontWeight="bold"
            zIndex="1"
            margin="auto"
            lineHeight="1.3em"
          >
            Healthy vegetables that you deserve to eat fresh
          </Text>
          <Text
            color="black" // Change text color to make it more visible
            fontSize="1.125rem" // Responsive font sizes
            zIndex="1"
            opacity={0.8}
            margin="auto"
            mt={10}
            mb={40}
          >
            We source and sell the very best beef, lamb and pork, sourced with
            the greatest care from farmer.
          </Text>

          <Input
            p="8px 64px 8px 24px"
            opacity={0.9}
            htmlSize={4}
            fontSize={16}
            width="90%"
            height="40"
            // borderRadius={6}
            isInvalid
            //variant="outline"
            placeholder="What are you looking for..."
            icon={<CiSearch />}
          >
            {/* <IconButton icon={<CiSearch />} /> */}
          </Input>
        </Container>
      </Box>
     
     
      <Container
        maxW="container.xl"
        p={4}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={6}
        >
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor={"#ffeed6"}
            flex="1" // Allows the card to take available space
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={img1}
              _hover={{
                transform: "scale(1.02)",
              }}
              style={{
                opacity: 1,
                transition: "opacity 0.7s",
              }}
              alt="Spring cleaning"
            />
            <Stack>
              <CardBody py={4} px={6}>
                <Heading size="md">Spring cleaning for home appliance</Heading>
                <Text py="2">Get your clean on supplies.</Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor={"#d9ecd2"}
            flex="1"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={img2}
              _hover={{
                transform: "scale(1.02)",
              }}
              style={{
                opacity: 1,
                transition: "opacity 0.7s",
              }}
              alt="Pet food"
            />
            <Stack>
              <CardBody py={4} px={6}>
                <Heading size="md">
                  Your pet choice for fresh healthy food
                </Heading>
                <Text py="2">Get your clean on supplies.</Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor={"#dbe5ef"}
            flex="1" // Allows the card to take available space
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={img3}
              _hover={{
                transform: "scale(1.02)",
              }}
              style={{
                opacity: 1,
                transition: "opacity 0.7s",
              }}
              alt="Discount products"
            />
            <Stack>
              <CardBody py={4} px={6}>
                <Heading size="md">Washing item with discount product</Heading>
                <Text>Get your clean on supplies.</Text>
              </CardBody>
            </Stack>
          </Card>
        </Box>
        <Box px={26}>
          <Text
            align={"center"}
            fontWeight="bold"
            fontSize="24"
            m="0px"
            mt="5%"
          >
            What food you love to order
          </Text>
          <Text align={"center"} fontSize="18" m="0" mt="18">
            Here order your favorite foods from different categories
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={3} // Increased gap for better spacing
            justifyContent={"space-around"} // Distribute space around items
            wrap="wrap" // Allow wrapping to next line
            mt={30} // Adjusted margin-top
          >
            {cardData.map(({ src, alt, text, url }) => (
              <Link key={alt} href={url} isExternal>
                <Box
                  width={{ base: "100%", sm: "45%", md: "30%" }}
                  p={4}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  height="150px" // Adjust height to accommodate larger images
                  borderRadius="50%" // Changed to md for less extreme border-radius
                  boxShadow="md"
                  bgColor={"#f5f5f0"}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  // transform: translatex(-40px);

                  _hover={{ textDecoration: "none", boxShadow: "lg" }} // Hover effect
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px" // Adjusted size to be larger
                    src={src}
                    onClick={() => { navigate('/FreshVegetable')}}
                    alt={alt}
                    cursor="pointer"
                    m="10px"
                  />
                  
                </Box>
                <Text textAlign="center" fontSize="lg" >
                  {text}
                </Text>
              </Link>
            ))}
          </Flex>
          <Box>
            <Text
              align={"center"}
              fontWeight="bold"
              fontSize="24"
              m="0px"
              mt="5%"
            >
              Best seller grocery near you
            </Text>
            <Text align={"center"} fontSize="18" m="0" mt="18">
              We provide the best quality & fresh grocery items near your
              location
            </Text>
          </Box>

          <Grid
            templateColumns="repeat(5, 1fr)"
            mt={20}
            gap={20}
            justifyContent="center"
            // overflow="hidden"
          >
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //mx="10px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                onClick={handleClick}
               cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&w=640&q=100"
                  alt="Green double couch with wooden legs"
                  borderRadius="md"
                  maxWidth="90%"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  // transition: transform .2s;

                  height="auto"
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                  IconButton={<CiCirclePlus />}
                />
                {/* <HStack maxW='180%' px="20px">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack> */}
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                onClick={handleClick}
               cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&w=640&q=100"
                  alt="Leafy Romaine Mixed Lettuce"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $2.50 <del>$2.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Leafy Romaine Mixed Lettuce
                  </Text>
                  <Text color="blue.600" m="0" mt="10px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&w=640&q=100"
                  alt="Fresh Express Iceberg Garden Salad Blend"
                  borderRadius="md"
                  maxWidth="90%"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  height="auto"
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $25.00 - $40.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Express Iceberg Garden Salad Blend
                  </Text>
                  <Text color="blue.600" m="0" mt="10px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&w=640&q=100"
                  alt="Organic Girl Lettuce"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $1.50
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Organic Girl Lettuce
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=640&q=100"
                  alt="Organic Spring Mix"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $2.60 <del>$3.00</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Organic Spring Mix
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&w=640&q=100"
                  alt="Organic Firm Fresh White Lettuce"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $3.00 -$5.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Organic Firm Fresh White Lettuce
                  </Text>
                  <Text color="blue.600" m="0" mt="10px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=640&q=100"
                  alt="Fresh Organic Broccoli"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $5.00 - $8.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Organic Broccoli
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&w=640&q=100"
                  alt="Great Value Tortilla Chips, Cantina Style"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $5.00 - $15.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Great Value Tortilla Chips, Cantina Style
                  </Text>
                  <Text color="blue.600" m="0" mt="10px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&w=640&q=100"
                  alt="Frito Lay's Family Fun Mix Snacks"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Frito Lay's Family Fun Mix Snacks
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&w=640&q=100"
                  alt="Fresh Cilantro"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $6.20$6.98
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Cilantro
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=640&q=100"
                  alt="Organic Green Cabbage"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $1.50 <del>$1.99</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Organic Green Cabbage
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&w=640&q=100"
                  alt="Green Giant Peas"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $1.99
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Green Giant Peas
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              // ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=640&q=100"
                  alt="Lay's Kettle Cooked Jalapeno Potato Chips"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $15.00 - $25.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Lay's Kettle Cooked Jalapeno Potato Chips
                  </Text>
                  <Text color="blue.600" m="0" mt="10" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&w=640&q=100"
                  alt="Calavo Fresh Avocados"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $25.00 - $40.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Calavo Fresh Avocados
                  </Text>
                  <Text color="blue.600" m="0" mt="30px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="100%"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              //ml="20px"
              borderRadius="10px"
            >
              <CardBody
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&w=640&q=100"
                  alt="Ruffles Party Size Cheddar & Sour Cream"
                  borderRadius="md"
                  maxWidth="90%"
                  height="auto"
                  cursor={"pointer"}
                  transition="all 3s ease"
                  _hover={{
                    transform: "scale(1.10)",
                  }}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                  }}
                  pt="17px"
                  px="17px  " // Apply padding on all sides
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px">
                    $15.00 - $25.00
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Ruffles Party Size Cheddar & Sour Cream
                  </Text>
                  <Text color="blue.600" m="0" mt="10px" fontSize="17px">
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Grid>
        </Box>
        <Container mt="60px" px={26}>
          <Box
            position="relative"
            height={{ base: "80vh", md: "100%" }} // Full viewport height
            width="100%" // Full viewport width
            backgroundImage={`url(${banner2})`} // Set background image
            backgroundSize="cover" // Ensure the image covers the entire box
            backgroundPosition="center" // Center the image
            backgroundRepeat="no-repeat" // Prevent repeating the image
            mb={30}
            pt="140px"
          >
            <Container
              height={{ base: "70vh", md: "100%" }} // Full viewport height
              width="100%" // Make container fill the full height
              alignItems="center" // Center vertically
              justifyContent="center" // Center horizontally
              textAlign="center"
              py={80}
            ></Container>
          </Box>
        </Container>
        <Box>
          <Text
            align={"center"}
            fontWeight="bold"
            fontSize="24"
            m="0px"
            mt="20px"
          >
            Curated collections
          </Text>
          <Text align={"center"} fontSize="18" m="0" mt="18">
            We have categories the best quality grocery items
          </Text>
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={20}
          justifyContent="center"
          pt={30}
          px={26}
        >
          <Card
            w="100%"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            // ml="10px"
            borderRadius="10px"
            //mx="30px"
          >
            <CardBody
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F1.png&w=640&q=75"
                alt="Green double couch with wooden legs"
                transition="all 3s ease"
                _hover={{
                  transform: "scale(1.02)",
                }}
                style={{
                  opacity: 6,
                  transition: "opacity 0.7s",
                }}
                borderRadius="md"
                Width="100%"
                height="250px"
              />
              <Stack mt="6" spacing="3" pt="20px">
                <Text m="0" mb="6px" fontWeight="bold">
                  Feel the Thirst in summer anytime
                </Text>
                <Text m="0" mb="6px">
                  Your body's way of telling you that it's make strong
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            w="100%"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            //ml="10px"
            borderRadius="10px"
            // mx="30px"
          >
            <CardBody
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F2.png&w=640&q=75"
                alt="Green double couch with wooden legs"
                borderRadius="md"
                transition="all 3s ease"
                _hover={{
                  transform: "scale(1.02)",
                }}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s",
                }}
                Width="100%"
                height="250px"
              />
              <Stack mt="6" spacing="3" pt="20px">
                <Text m="0" mb="6px" fontWeight="bold">
                  Most popular item for Fast food
                </Text>
                <Text m="0" mb="6px">
                  Your body's way of telling you that it's make strong
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            w="100%"
            x
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            //ml="10px"
            borderRadius="10px"
            //mx="30px"
          >
            <CardBody
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F3.png&w=640&q=75"
                alt="Green double couch with wooden legs"
                borderRadius="md"
                transition="all 3s ease"
                _hover={{
                  transform: "scale(1.02)",
                }}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s",
                }}
                Width="100%"
                height="250px"
              />
              <Stack mt="6" spacing="3" p="20px">
                <Text
                  m="0"
                  mb="6px"
                  fontWeight="bold"
                  _hover={{ color: "blue.500" }}
                >
                  Feel the Thirst in summer anytime
                </Text>
                <Text m="0" mb="6px">
                  Your body's way of telling you that it's make strong
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Container mt={60}>
          <Grid templateColumns="repeat(2, 1fr)" gap={3} bg="#ebebe0">
            <GridItem h="500" pl={80}>
              <Container
                height="60%" // Make container fill the full height
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                textAlign="center"
                py={40}
              >
                <Text
                  color="black" // Change text color to make it more visible
                  fontSize="42" // Responsive font sizes
                  fontWeight="bold"
                  //zIndex="1"
                >
                  Make your online shop easier with our mobile app
                </Text>
                <Text
                  color="black" // Change text color to make it more visible
                  fontSize="17" // Responsive font sizes
                  zIndex="1"
                  m={0}
                  pr={32}
                  pb={28}
                >
                  BoroBazar makes online grocery shopping fast and easy. Get
                  groceries delivered and order the best of seasonal farm fresh
                  food.
                </Text>
                <Flex gap={10} alignItems="center">
                  <Image
                    src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&w=256&q=75"
                    alt="App-Store"
                    borderRadius="md"
                    Width="30%"
                    height="55px"
                  />
                  <Image
                    src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75"
                    alt="Google-Pay"
                    borderRadius="md"
                    Width="30%"
                    height="55px"
                  />
                </Flex>
              </Container>
            </GridItem>
            <GridItem h="500" pr="80px" pl="20">
              {" "}
              <Image
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&w=640&q=75"
                alt="Google-Pay"
                borderRadius="md"
                Width="100%"
                height="100%"
              />
            </GridItem>
          </Grid>
        </Container>
        <Flex></Flex>
      </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
