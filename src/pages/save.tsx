import React from 'react'

import Head from 'next/head';

import { Box, Container, Stack, Typography } from '@mui/material';

import DashboardLayout from '../components/layout/DashboardLayout';

import { NextPage } from 'next';
import PageHeader from '../components/utility/PageHeader';

const Save : NextPage = () => {

    return (
        <DashboardLayout>
            <Head>
                <title>
                    Save | Credit Do
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
                            title='Save'
                        />
                        <Stack
                            spacing={4}
                        >
                            <Typography>
                                WORK IN PROGRESS
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default Save