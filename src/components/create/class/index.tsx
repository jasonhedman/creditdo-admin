import React, {useState} from 'react'

import Head from 'next/head';

import useAuth from '../../../hooks/useAuth';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { createClass } from '../../../services/classes';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Link from 'next/link';

const CreateClassComponent : React.FC = () => {

    const { auth } = useAuth();

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
  
    const formik = useFormik({
      initialValues: {
        name: '',
        time: null,
      },
      validationSchema: Yup.object({
        name: Yup
          .string()
          .max(255)
          .required(
              'Name is required'),
          time: Yup
            .date()
            .nullable()
            .required(
                'Time is required'),
      }),
      onSubmit: async () => {
        createClass({teacherId: auth.uid, ...formik.values})
        .then(() => {
            setSubmitted(true);
        })
        .catch(error => {
            formik.setSubmitting(false);
            setError(error.message);
        });
      }
    });
  
    return (
      <>
        <Head>
          <title>
            Register
          </title>
        </Head>
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
          }}
        >
            <Container maxWidth="sm">
                {
                    submitted ? (
                        <Stack
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h4">
                                Class Created!
                            </Typography>
                            <Link
                                href="/"
                                passHref
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Go to Dashboard
                                </Button>
                            </Link>
                        </Stack>
                    ) : (
                        <form onSubmit={formik.handleSubmit}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Create Class
                            </Typography>
                            <Stack spacing={2}>
                                <TextField
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                    fullWidth
                                    helperText={formik.touched.name && formik.errors.name}
                                    label="Class Name"
                                    margin="normal"
                                    name="name"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    variant="outlined"
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Time"
                                        value={formik.values.time}
                                        onChange={val => formik.setFieldValue('time', val)}
                                        renderInput={(params) => (
                                            <TextField 
                                                {...params} 
                                                fullWidth 
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Stack>
                            <Stack
                                py={2}
                                spacing={1}
                            >
                                <Button
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Create Class
                                </Button>
                                <Typography 
                                    textAlign='center' 
                                    color='error'
                                >
                                    {error}
                                </Typography>
                            </Stack>
                        </form>
                    )
                }
            </Container>
        </Box>
      </>
    );
}

export default CreateClassComponent