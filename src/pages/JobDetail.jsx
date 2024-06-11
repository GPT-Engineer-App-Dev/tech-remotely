import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { useJob } from "../integrations/supabase/index.js";

const JobDetail = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useJob(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading job details</div>;
  }

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
          {job.jobs_title}
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.500">
          {job.job_area}
        </Text>
        <Box>
          <Text fontSize="md">{job.job_type}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetail;