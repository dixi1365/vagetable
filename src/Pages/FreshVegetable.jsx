import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Flex,
  Container,
  Card,
  Grid,
  CardBody,
  Image,
  Text,
  Stack,
  Select,
  Input,
  Button,Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,  Icon
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

const FreshVegetable = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/'); // Replace with the desired route
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Container px={20}>
        <Flex >
          <Box height="10%" w="30%" fontWeight="bold" h="40px" ml={30} >
            <Box>Filters</Box>
          </Box>
          <Box
            height="30%"
            w="70%"
            justifyContent="space-between"
            fontWeight="bold"
            
          >
            2,683 Items Found
          </Box>
        </Flex>

        <Flex  border="none"  px={30}>
          <Box height="570px" width="25%" mt={30}   border="1px solid #e0ebeb"  borderRadius={4}>
       
        <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton background="white" border="none" px="0px" opacity={0.8}>
            <Box  flex="1" textAlign="left" height="30px"  fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20} >
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/fresh-vegetables.svg" alt=" Fresh Vegetables" boxSize="30px" mr={10}   ml={14}/>
              Fresh Vegetables
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl={8} onClick={() => handleClick('arugula')} cursor=" pointer">
        arugula
        </AccordionPanel>
        <AccordionPanel pb={4} pl={8}>
        asparagus
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
            <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20}>
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/diet-foods.svg" alt=" Diet Foods" boxSize="30px" mr={10}  ml={14}/>
              Diet Foods
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          List of diet foods...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
        <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20}>
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/diet-nutrition.svg" alt="Diet Nutrition" boxSize="30px" mr={10} ml={14} />
              Diet Nutrition
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Diet nutrition details...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
        <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20}>
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/fast-food.svg" alt="Diet Nutrition" boxSize="30px" mr={10}  ml={14}/>
              Fast Food Items
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          List of fast food items...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
        <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20} >
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/fruits-items.svg" alt="Diet Nutrition" boxSize="30px" mr={10}  ml={14} />
              Fruits Items
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          List of fruits...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
        <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20}>
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/healthy-foods.svg" alt="Diet Nutrition" boxSize="30px" mr={8} ml={14}/>
              Healthy Foods
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          List of healthy foods...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton background="white"  border="none" px="0px" opacity={0.8}>
        <Box  flex="1" textAlign="left" height="30px"fontSize="18px"  borderBottom="1px solid #e0ebeb" pb={20}>
            <Image src="https://borobazar.vercel.app/assets/images/category/icon/grocery-items.svg" alt="Diet Nutrition" boxSize="30px" mr={10} ml={14} />
            Grocery Items
            </Box>
            <AccordionIcon  boxSize="24px" opacity={0.8} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          List of healthy foods...
        </AccordionPanel>
      </AccordionItem>



      
    </Accordion>
       
        
       
          </Box>
          <Grid
            templateColumns="repeat(4, 1fr)"
            mt={20}
            ml={10}
            gap={16}
            justifyContent="center"
            w="75%"
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>

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
                //onClick={handleClick}
                cursor="pointer"
              >
                <Image
                  src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=640&q=100"
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
                  px="17px  "
                />
                <Stack mt="6" spacing="3" pb="20px" px="20px">
                  <Text m="0" mb="6px" fontWeight="bold">
                    $2.6 <del>$3.74</del>
                  </Text>

                  <Text color="blue.600" m="0" fontSize="17px">
                    Fresh Green Leaf Lettuce
                  </Text>
                  <Text
                    color="blue.600"
                    m="0"
                    mt="10px"
                    fontSize="17px"
                    opacity={0.8}
                  >
                    1 each
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
      </Container>
    </>
  );
};

export default FreshVegetable;
