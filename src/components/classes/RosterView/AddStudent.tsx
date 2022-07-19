import { FC } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { createStudent } from '../../../services/students';

interface Props {
  classId: string
}

const AddStudent : FC<Props> = ({ classId }) => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .max(255)
        .required('First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required('Last name is required'),
    }),
    onSubmit: async () => {
      await createStudent(classId, {...formik.values});
      formik.resetForm();
    }
  });

  return (
    <Stack
        direction="row"
        alignItems='center'
        spacing={2}
    >
      <TextField
        error={Boolean(formik.touched.firstName && formik.errors.firstName)}
        fullWidth
        helperText={formik.touched.firstName && formik.errors.firstName}
        label="First Name"
        name="firstName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
        variant="outlined"
      />
      <TextField
        error={Boolean(formik.touched.lastName && formik.errors.lastName)}
        fullWidth
        helperText={formik.touched.lastName && formik.errors.lastName}
        label="Last Name"
        name="lastName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.lastName}
        variant="outlined"
      />
      <Button
          variant="contained"
          onClick={() => formik.handleSubmit()}
      >
          Add
      </Button>
    </Stack>
  )
}

export default AddStudent