import React from 'react'

import Head from 'next/head'
import { NextPage } from 'next'
import NextLink from 'next/link';

import { Link, Typography, Box, Container, Stack, Paper } from '@mui/material'

const accountTypes = [
  "Teacher",
  "Student",
]


const RegisterPage : NextPage = () => {

  const optionStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    "&:hover": {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    },
  }

  return (
    <>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Box
        component="main"
        py={4}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container
          maxWidth="sm"
        >
          <Stack
            spacing={2}
          >
            <Typography
              variant="h4"
            >
              Register
            </Typography>
            <Stack
              width='100%'
              direction='row'
              spacing={2}
            >
              {
                accountTypes.map((type, index) => (
                  <NextLink
                    href={`/register/${type.toLowerCase()}`}
                    key={index}
                  >
                    <Paper
                      variant='outlined'
                      sx={optionStyle}
                    >
                      <Typography>
                        {type}
                      </Typography>
                    </Paper>
                  </NextLink>
                ))
              }
            </Stack>
            <Typography
                color="textSecondary"
                variant="body2"
              >
                Have an account?
                {' '}
                <NextLink
                  href="/login"
                  passHref
                >
                  <Link
                    variant="subtitle2"
                    underline="hover"
                  >
                    Sign In
                  </Link>
                </NextLink>
              </Typography>
            </Stack>
        </Container>
      </Box>
    </>
  )
}

export default RegisterPage