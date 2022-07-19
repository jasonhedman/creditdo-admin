import React from 'react'

import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import EventComponent from '../../../components/event';

const Work : NextPage = () => {

    const { query } = useRouter();

    const { classId, eventId } = query;

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
                        {
                            classId && eventId && (
                                <EventComponent 
                                    classId={classId as string}
                                    eventId={eventId as string}
                                />
                            )
                        }
                    </Stack>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default Work