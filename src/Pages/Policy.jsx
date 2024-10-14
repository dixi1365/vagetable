import React from "react";
import { Box, Text, Container, Flex, Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Policy = () => {
  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} centerContent>
        {/* <Container py={1} px={0} position="relative"> */}
        <Image
          src="https://borobazar.vercel.app/assets/images/page-hero-bg.png"
          maxW="100%"
          height="auto"
          objectFit="cover"
        />

        <Text
          pb={2}
          color={"brand.100"}
          textAlign={"center"}
          //fontSize={"xxx-large"}
          fontSize={"xx-large"}
          fontWeight="600"
          position="absolute"
          //top="20%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          // Optional: Add background to improve text readability
        >
          privat policy
        </Text>
      </Container>
      <Container maxW={"container.xl"} centerContent>
        <Flex px={30} gap={30} maxW={"container.xl"} centerContent>
          <Box
            height="420px"
            width="25%"
            mt={30}
            borderRadius={5}
            position="sticky"
            top="30px" 
          >
            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Personal Information</Text>
            </Flex>

            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Snap</Text>
            </Flex>

            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Other Information</Text>
            </Flex>

            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Links</Text>
            </Flex>

            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Third Party Advertisers</Text>
            </Flex>

            <Flex
              h={30}
              alignItems="center"
              p={11}
              onClick={() => handleClick("/Myaccount")}
              cursor="pointer"
            >
              <Box mx={14} mt={4}>
                {/* <VscAccount color="#8c8c8c" size="21px" /> */}
              </Box>
              <Text fontSize={16}>Security</Text>
            </Flex>
          </Box>

          <Box
            mt={30}
            h="1600px"
            w="79%"
            justifyContent="space-between"
            //fontWeight="bold"
            //border="1px solid #e0ebeb"
            borderRadius={5}
            p={25}

            //fontSize={20}
            //borderBottom="1px solid #e0ebeb"
          >
            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Personal Information
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              “BoroBazar” is a trademark of BoroBazar Private Limited
              (“Company”), a company incorporated under the Companies Act, 2013
              with its registered and corporate office at Plot 64H, Sector 18,
              Gudgeon 122001 in the course of its business. The domain name
              grocers.com is owned by the Company. <br />
              <br /> If you are a California resident, the information below
              also applies to you. Certain terms used in this section have the
              meanings given to them in the California Consumer Privacy Act of
              2018 (“CCPA”).
            </Text>

            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Snap
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              Customer are advised to read and understand our Privacy Policy
              carefully, as by accessing the website/app you agree to be bound
              by the terms and conditions of the Privacy Policy and consent to
              the collection, storage and use of information relating to you as
              provided herein.
              <br />
              <br />
              If you do not agree with the terms and conditions of our Privacy
              Policy, including in relation to the manner of collection or use
              of your information, please do not use or access the website/app.
              <br />
              <br />
              Our Privacy Policy is incorporated into the Terms and Conditions
              of Use of the website/app, and is subject to change from time to
              time without notice. It is strongly recommended that you
              periodically review our Privacy Policy as posted on the App/Web.
            </Text>

            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Other Information
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              We may automatically track certain information about you based
              upon your behavior on the website. We use this information to do
              internal research on our users’ demographics, interests, and
              behavior to better understand, protect and serve our users. This
              information is compiled and analyzed on an aggregated basis. This
              information may include the URL that you just came from (whether
              this URL is on the website or not), which URL you next go to
              (whether this URL is on the website or not), your computer browser
              information, your IP address, and other information associated
              with your interaction with the website. We may also share your
              Mobile IP/Device IP with third party(ies) and to the best of our
              knowledge, be-life and representations given to us by these third
              party(ies) this information is not stored.
            </Text>

            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Links
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              We use this information to do internal research on our users’
              demographics, interests, and behavior to better understand,
              protect and serve our users. This information is compiled and
              analyzed on an aggregated basis. This information may include the
              URL that you just came from (whether this URL is on the website or
              not), which URL you next go to (whether this URL is on the website
              or not), your computer browser information, your IP address
              <br />
              <br />
              1.Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
              <br />
              2.Characteristics of protected classifications (e.g. gender, age)
              <br />
              3.Commercial information (e.g. products or services purchased,
              purchase history)
              <br />
              4.Internet or other electronic network activity (e.g. browse or
              search history)
              <br />
              5.Geo location data (e.g. latitude or longitude)
              <br />
              6.Audio, electronic, visual, or similar information (e.g.
              recording of Guest service calls)
              <br />
              7.Inferences drawn from any of the above (e.g. preferences or
              characteristics)
            </Text>

            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Third Party Advertisers
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              “BoroBazar” is a trademark of BoroBazar Private Limited
              (“Company”), a company incorporated under the Companies Act, 2013
              with its registered and corporate office at Plot 64H, Sector 18,
              Gudgeon 122001 in the course of its business. The domain name
              grocers.com is owned by the Company. If you are a California
              resident, the information below also applies to you. Certain terms
              used in this section have the meanings given to them in the
              California Consumer Privacy Act of 2018 (“CCPA”).To protect
              against the loss, misuse and alteration of the information under
              its control, the Company has in place appropriate physical,
              electronic and managerial procedures. For example, the Company
              servers are accessible only to authorized personnel and your
              information is shared with employees and authorized personnel on a
              need to know basis to complete the transaction and to provide the
              services requested by you. Although the Company endeavour to
              safeguard the confidentiality of your personally identifiable
              information, transmissions made by means of the Internet cannot be
              made absolutely secure. By using the website, you agree that the
              Company will have no liability for disclosure of your information
              due to errors in transmission and/or unauthorized acts of third
              parties.
            </Text>

            <Text fontWeight={600} fontSize={20} m={0} mb={20}>
              Security
            </Text>
            <Text
              fontSize={14.2}
              m={0}
              mb={20}
              fontWeight={400}
              color="#8c8c8c"
            >
              Please note that the Company will not ask you to share any
              sensitive data or information via email or telephone. If you
              receive any such request by email or telephone, please do not
              respond/divulge any sensitive data or information and forward the
              information relating to the same to info@borobazar.com for
              necessary action.
              <br />
              <br />
              1.Performing services, including maintaining or servicing
              accounts, providing customer service, processing or fulfilling
              orders and transactions, verifying customer information,
              processing payments, providing advertising or marketing services,
              providing analytics services, or providing similar services;
              <br />
              2.Auditing related to a current interaction with you and
              concurrent transactions, including, but not limited to, counting
              ad impressions to unique visitors, verifying positioning and
              quality of ad impressions, and auditing compliance;
              <br />
              3.Short-term, transient use, including, but not limited to, the
              contextual customization of ads shown as part of the same
              interaction;
              <br />
              4.Detecting security incidents, protecting against malicious,
              deceptive, fraudulent, or illegal activity, and prosecuting those
              responsible for that activity;
              <br />
              5.Debugging to identify and repair errors that impair existing
              intended functionality;
              <br />
              6.Undertaking internal research for technological development and
              demonstration; and
              <br />
              7.Undertaking activities to verify or maintain the quality or
              safety of a service or device that is owned, manufactured,
              manufactured for, or controlled by us, and to improve, upgrade, or
              enhance the service or device that is owned, manufactured,
              manufactured for, or controlled by us.
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Policy;
