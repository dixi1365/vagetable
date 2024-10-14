import { Flex, Image, Text } from '@chakra-ui/react';
import { IoHeartOutline } from 'react-icons/io5';
import React, { useState } from "react";
// Define and export the component as default
const ProductCard = ({ imageSrc, productName, price, originalPrice, quantity }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Step 2: Function to toggle the favorite status
    const toggleFavorite = () => {
      setIsFavorited(!isFavorited); // Toggle state between true/false
    };

    
  return (
    <Flex w="100%" py={16} borderBottom="1px solid #e0ebeb">
      <Image src={imageSrc} alt={productName} boxSize="80px" maxW="100%" h="auto" />
      <Text color="blue.600" m="0" fontSize="15px" w={260} ml={7}>
        {productName}
        <Text m="0" my="6px" fontWeight="bold" w={90}>
          ${price} <del>${originalPrice}</del>
        </Text>
        <Text color="blue.600" m="0" fontSize="17px" opacity={0.8}>
          {quantity}
        </Text>
      </Text>
      <Flex pt={28} ml={490}>
        <IoHeartOutline color="#4d4d4d" size="24px" />
        <Text ml={2} m={0}>Favorite</Text>
      </Flex>
    </Flex>
  );
};

// Use default export
export default ProductCard;