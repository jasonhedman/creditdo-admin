import React from 'react'

import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import PageHeader from '../../../components/utility/PageHeader';

import useEvent from '../../../hooks/useEvent';

const Work : NextPage = () => {

    const { query } = useRouter();

    const { classId, eventId } = query;

    const { event } = useEvent(classId as string, eventId as string);

    return (
        <DashboardLayout>
            <Head>
                <title>
                    Event | Credit Do
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
                        <PageHeader 
                            title='Event Details'
                        />
                    </Stack>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default Work