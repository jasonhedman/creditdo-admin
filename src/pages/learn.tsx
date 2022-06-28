import React from 'react'

import Head from 'next/head';

import { Box, Container, Stack } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import Header from '../components/learn/Header';
import WeekView from '../components/learn/WeekView';

import { Lesson } from '../components/learn/types';

interface Week {
    weekNumber: number;
    lessons: Lesson[];
}

const weeks : Week[] = [
    {
        weekNumber: 1,
        lessons: [
            {
                title: 'Lesson 1',
                duration: 2,
                date: new Date(),
                status: 'completed'
            },
            {
                title: 'Lesson 2',
                duration: 2,
                date: new Date(),
                status: 'completed'
            },
            {
                title: 'Lesson 3',
                duration: 1,
                date: new Date(),
                status: 'completed'
            },
        ]
    },
    {
        weekNumber: 2,
        lessons: [
            {
                title: 'Lesson 4',
                duration: 2,
                date: new Date(),
                status: 'pastDue'
            },
            {
                title: 'Lesson 5',
                duration: 2,
                date: new Date(),
                status: 'notStarted'
            },
            {
                title: 'Lesson 6',
                duration: 1,
                date: new Date(),
                status: 'notStarted'
            },
        ]
    },
]

const Learn = () => {
  return (
    <>
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
                    <Header />
                    <Stack
                        spacing={8}
                    >
                        {
                            weeks.map(week => (
                                <WeekView
                                    key={week.weekNumber}
                                    weekNumber={week.weekNumber}
                                    lessons={week.lessons}
                                />
                            ))
                        }
                    </Stack>
                </Stack>
            </Container>
        </Box>
    </>
  )
}

Learn.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Learn