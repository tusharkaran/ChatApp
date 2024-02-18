import React, { useEffect } from 'react';
import {Container,Box,Text,Tab,Tabs,TabList,TabPanels,TabPanel} from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = () => {
  const history = useHistory();
   useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) history?.push("/");
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box 
      display="flex"
      justifyContent="center"
      p="3"
      w="100%"
      bg="white"
      borderRadius="lg"
      borderWidth="1px"
      m="40px 0 15px 0 "
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black" textAlign="center">Chat With ME</Text>
      </Box>
      <Box bg="white" w="100%" p="4" borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>

    </Container>
  )
}

export default HomePage