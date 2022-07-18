import { useState, FC } from 'react'

import Link from 'next/link';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { createEvent } from '../../../services/events';

interface Props {
    classId: string;
}

const CreateEventComponent : FC<Props> = ({ classId }) => {

    const [submitted, setSubmitted] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            date: new Date(),
            address: '',
        },
        validationSchema: Yup.object({
          title: Yup
            .string()
            .max(255)
            .required(
                'Title is required'),
            date: Yup
              .date()
              .required(
                  'Date is required'),
            address: Yup
                .string()
                .max(255)
                .required(
                    'Address is required'),
        }),
        onSubmit: async () => {
            await createEvent(classId, formik.values);
            setSubmitted(true);
        }
    });

    if(submitted) {
        return (
            <Stack
                alignItems='center'
                spacing={2}
            >
                <Typography variant='h5'>
                    Event Created!
                </Typography>
                <Link
                    href='/work'
                    passHref
                >
                    <Button
                        variant='contained'
                        color='primary'
                    >
                        Go to Events
                    </Button>
                </Link>
            </Stack>
        )
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack
                alignItems='center'
            >
                <Typography
                    color="textPrimary"
                    variant="h4"
                >
                    Create an Event
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        error={Boolean(formik.touched.title && formik.errors.title)}
                        fullWidth
                        helperText={formik.touched.title && formik.errors.title}
                        label="Event Title"
                        margin="normal"
                        name="title"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Event Date"
                            value={formik.values.date}
                            onChange={(val) => {
                                formik.setFieldValue('date', val);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        error={Boolean(formik.touched.address && formik.errors.address)}
                        fullWidth
                        helperText={formik.touched.address && formik.errors.address}
                        label="Event Address"
                        margin="normal"
                        name="address"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        variant="outlined"
                    />
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
                        Create Event
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}

export default CreateEventComponent