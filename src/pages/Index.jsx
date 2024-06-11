import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, Text, Select, Heading, SimpleGrid, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useJobs } from "../integrations/supabase/index.js";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading jobs</div>;
  }

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.job_area === selectedCategory)
    : jobs;

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Remote Tech Jobs
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your next remote job in tech. Filter by category to narrow down your search.
        </Text>
        <Select
          placeholder="Filter by category"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredJobs.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg">
              <Link to={`/job/${job.id}`}>
                <CardHeader>
                  <Heading as="h3" size="md">
                    {job.job_title}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {job.job_area}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Text>{job.job_type}</Text>
                </CardBody>
              </Link>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;