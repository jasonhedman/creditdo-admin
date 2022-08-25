import React from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import DashboardLayout from '../../components/layout/DashboardLayout'
import CreateClassWizard from '../../components/create/class/CreateClassWizard'

const CreateClass : NextPage = () => {
  return (
    <DashboardLayout>
        <Head>
            <title>
                Create Class | Credit Do
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
          <CreateClassWizard />
        </Container>
      </Box>
    </DashboardLayout>
  )
}

export default CreateClass