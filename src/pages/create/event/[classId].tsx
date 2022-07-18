import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import DashboardLayout from '../../../components/layout/DashboardLayout'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import CreateEventClass from '../../../components/create/event/CreateEventClass'

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
                    <CreateEventClass 
                        classId={classId}
                    />
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default CreateEvent