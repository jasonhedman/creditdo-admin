import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Typography, Stack, CircularProgress } from '@mui/material';
import { AccountProfile } from '../components/account/AccountProfile';
import { AccountProfileDetails } from '../components/account/AccountProfileDetails';
import { DashboardLayout } from '../components/dashboard-layout';

import useAuth from '../hooks/useAuth';

const Account = () => { 

  const router = useRouter();

  const { loading, auth, user, updateUser } = useAuth();

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
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Account
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile
                user={user}
              />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails
                user={user}
                updateUser={updateUser}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Account;
