import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product", description: "Manage product lifecycle and roadmap.", details: "Detailed description for Product Manager." },
  { id: 2, title: "UX Designer", category: "Design", description: "Design user interfaces and experiences.", details: "Detailed description for UX Designer." },
  { id: 3, title: "Software Engineer", category: "Engineering", description: "Develop and maintain software applications.", details: "Detailed description for Software Engineer." },
  { id: 4, title: "Data Scientist", category: "Engineering", description: "Analyze and interpret complex data.", details: "Detailed description for Data Scientist." },
  { id: 5, title: "Graphic Designer", category: "Design", description: "Create visual content for various media.", details: "Detailed description for Graphic Designer." },
];

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Job Not Found
        </Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          {job.title}
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.500">
          {job.category}
        </Text>
        <Box>
          <Text fontSize="md">{job.details}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetail;