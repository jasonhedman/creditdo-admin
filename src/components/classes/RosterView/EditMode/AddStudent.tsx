import { FC } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { createStudent } from '../../../../services/students';

interface Props {
  classId: string
}

const labelMapping = {
  firstName: 'First Name',
  lastName: 'Last Name',
  parentEmail: 'Parent Email',
}

const AddStudent : FC<Props> = ({ classId }) => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      parentEmail: '',
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
      parentEmail: Yup
        .string()
        .email('Email is invalid')
        .required('Email is required'),
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
      {
        Object.keys(formik.values).map(key => (
          <TextField
            fullWidth
            error={Boolean(formik.touched[key] && formik.errors[key])}
            helperText={formik.touched[key] && formik.errors[key]}
            key={key}
            label={labelMapping[key]}
            value={formik.values[key]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name={key}
          />
        ))
      }
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