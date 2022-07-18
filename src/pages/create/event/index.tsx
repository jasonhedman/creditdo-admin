import React from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import DashboardLayout from '../../../components/layout/DashboardLayout'
import CreateEventComponent from '../../../components/create/event'

const CreateEvent : NextPage = () => {

    return (
        <DashboardLayout>
            <Head>
                <title>
                    Create Event | Credit Do
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
                    <CreateEventComponent />
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default CreateEvent