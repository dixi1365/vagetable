import React from 'react'
import Navbar from '../Components/Navbar'

const Cart = () => {
  return (
    <>
     <Navbar/>

     <InputGroup size='md'>
            <FormLabel pb={8}>Password</FormLabel>
           
            <Input type="password" placeholder="Enter your password" h={40} w={284} />
            <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleitemClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup> 
    </>
  )
}

export default Cart
