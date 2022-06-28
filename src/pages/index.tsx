import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, CircularProgress, Stack } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

import useAuth from '../hooks/useAuth';
import Header from '../components/dashboard/Header';
import ClassView from '../components/dashboard/ClassView';

const Dashboard = () => {

  const router = useRouter();

  const { auth, loading } = useAuth();

  if (loading) return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Stack>
  );
  if (!auth) {
    router.push('/login'); 
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard | Credit Do
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container 
          maxWidth={false}
        >
          <Stack
            spacing={2}
          >
            <Header />
            <ClassView />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
