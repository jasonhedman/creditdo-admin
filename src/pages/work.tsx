import React from 'react'

import Head from 'next/head';
import { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import DashboardLayout from '../components/dashboard-layout';
import Header from '../components/work/Header';
import UpcomingEvents from '../components/work/UpcomingEvents';
import Calendar from '../components/work/Calendar';

const Work : NextPage = () => {
  return (
    <DashboardLayout>
        <Head>
            <title>
                Work | Credit Do
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
                    <Stack
                        direction='row'
                        spacing={1}
                    >
                        <UpcomingEvents />
                        <Stack
                            flex={1}
                        >
                            <Calendar />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    </DashboardLayout>
  )
}

export default Work