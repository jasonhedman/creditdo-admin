import React from 'react';

import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { DashboardLayout } from '../components/dashboard-layout';
import Header from '../components/classes/Header';
import MetricsView from '../components/classes/MetricsView';

const Classes = () => {
  return (
    <>
        <Head>
            <title>
                Classes | Credit Do
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 4
            }}
        >
            <Container 
                maxWidth={false}
            >
                <Stack
                    spacing={4}
                >
                    <Header />
                    <MetricsView />
                </Stack>
            </Container>
        </Box>
    </>
  )
}

Classes.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Classes