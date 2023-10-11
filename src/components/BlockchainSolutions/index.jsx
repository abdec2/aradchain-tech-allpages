import {
  Box,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Image,
  CardBody,
  Card,
  Container,
} from "@chakra-ui/react";
import SupplyChainImage from "./../../assets/images/supplychain.jpg";
import Agriculture from "./../../assets/images/agriculture.jpg";
import energy from "./../../assets/images/energy.jpg";
import finance from "./../../assets/images/finance.jpg";
import healthcare from "./../../assets/images/healthcare.jpg";
import insurance from "./../../assets/images/insurance.jpg";
import retailStore from "./../../assets/images/retailStore.jpg";
import transport from "./../../assets/images/transport.jpg";

const index = () => {
  const data = [
    {
      image: SupplyChainImage,
      title: "Blockchain in Supply Chain",
      desc: "Integrate smart contracts into your trading process so that you can eliminate inaccurate invoices; use immutable master ledgers between trading parties; provide a single system of record that all parties can access.",
    },
    {
      image: finance,
      title: "Blockchain in Finance",
      desc: "Increase functionality, accuracy, transparency, and traceability of transactions; simplify and accelerate cross-border payments; improve online identity management; automate transactions.",
    },
    {
      image: insurance,
      title: "Blockchain in Insurance",
      desc: "Automate payments to insurees through smart contracts by creating a secure ledger of information, verifying trusted and verifiable provenance information, and executing terms binding the insurer and insuree.",
    },
    {
      image: healthcare,
      title: "Blockchain in Healthcare",
      desc: "Automate verification of medical claims through smart contracts; streamline medical records; simplify drug traceability; create tamper-proof, secure information; achieve nationwide interoperability.",
    },
    {
      image: energy,
      title: "Blockchain in Energy: Oil and Gas",
      desc: "Provide monitoring and reporting for regulated substances; track fleet and fuel usage; utilize peer-to-peer interactions; eliminate broker fees and high energy trading costs; manage complex supply chains.",
    },
    {
      image: retailStore,
      title: "Blockchain in Retail",
      desc: "Track inventory more efficiently, automate payments for consumer and B2B products using smart contracts, prove authenticity, and safeguard consumer privacy using decentralized, tamper-proof ledgers.",
    },
    {
      image: transport,
      title: "Blockchain in Transporation",
      desc: "Enhance the visibility of the supply chain, uphold reliable data throughout the transportation and logistics ecosystem, expedite customs clearance through the utilization of intelligent contracts, and facilitate seamless coordination of documents on a mutually accessible distributed ledger.",
    },
    {
      image: Agriculture,
      title: "Blockchain in Agriculture",
      desc: "The objective is to instill trust and transparency in the supply chain by establishing a secure and distributed ledger of information. This will be achieved through the facilitation of data exchange among specific stakeholders via smart contracts. Additionally, the system will enable effective management of weather crises and promote better decision-making.",
    },
  ];
  return (
    <Box bg={"#f9f9f9"} py={20} mt={"8rem"}>
      <Stack spacing={0} align={"center"}>
        <Heading
          as="h1"
          fontWeight={"900"}
          color={"#00234F"}
          textAlign={"center"}
          fontSize={"2rem"}
        >
          Blockchain Solutions for the Enterprise
        </Heading>
        <Text mt={1} color="#000" textAlign={"center"} maxW={"2xl"}>
          Industries adopting the next wave of digital business
        </Text>
      </Stack>

      
        <Box maxW={'1280px'} margin={'auto'} mt={30}>
          <SimpleGrid minChildWidth="250px" spacing="20px">
            {data.map((item, i) => (
              <Card maxW="sm">
                <CardBody>
                  <Image src={item.image} alt={item.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading as={'h3'} size="md">{item.title}</Heading>
                    <Text fontSize='sm'>{item.desc}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
    </Box>
  );
};

export default index;
