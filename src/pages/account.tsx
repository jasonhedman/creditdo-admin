import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { Box, Container, Typography, Stack, CircularProgress, Button } from '@mui/material';

import { AccountProfileDetails } from '../components/account/AccountProfileDetails';
import DashboardLayout from '../components/layout/DashboardLayout';


import useAuth from '../hooks/useAuth';

const Account : NextPage = () => { 

  const router = useRouter();

  const { loading, auth, user, updateUser, signOut } = useAuth();

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
  if (!user) {
    return null;
  }
  return (
    <DashboardLayout>
      <Head>
        <title>
          Account | Credit Do
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            alignItems='center'
          >
            <Typography
              variant="h4"
            >
              Account
            </Typography>
            <AccountProfileDetails
              user={user}
              updateUser={updateUser}
            />
            <Button
              color="error"
              onClick={signOut}
            >
              Sign Out
            </Button>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Account;
