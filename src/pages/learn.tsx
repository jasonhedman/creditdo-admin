import React from 'react'

import Head from 'next/head';

import { Box, Container, Stack } from '@mui/material';

import DashboardLayout from '../components/layout/DashboardLayout';

import { NextPage } from 'next';
import useClasses from '../hooks/useClasses';
import ClassView from '../components/learn/ClassView';
import PageHeader from '../components/utility/PageHeader';

const Learn : NextPage = () => {

    const { classes } = useClasses();

    return (
        <DashboardLayout>
            <Head>
                <title>
                    Learn | Credit Do
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
                            title='Learn'
                        />
                        <Stack
                            spacing={4}
                        >
                            {
                                classes.map(classData => (
                                    <ClassView
                                        key={classData.id}
                                        classData={classData}
                                    />
                                ))
                            }
                            {/* {
                                weeks.map(week => (
                                    <WeekView
                                        key={week.weekNumber}
                                        weekNumber={week.weekNumber}
                                        lessons={week.lessons}
                                    />
                                ))
                            } */}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default Learn