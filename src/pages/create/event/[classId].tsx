import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { DashboardLayout } from '../../../components/dashboard-layout'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import CreateEventComponent from '../../../components/create/event'

const CreateEvent = () => {

    const { query } = useRouter();
    const classId = query.classId as string;

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
                    <CreateEventComponent 
                        classId={classId}
                    />
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default CreateEvent