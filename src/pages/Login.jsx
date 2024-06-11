import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Heading } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container maxW="container.sm" py={10}>
      <Box textAlign="center" mb={6}>
        <Heading as="h1" size="xl">
          Admin Login
        </Heading>
      </Box>
      <SupabaseAuthUI />
    </Container>
  );
};

export default Login;