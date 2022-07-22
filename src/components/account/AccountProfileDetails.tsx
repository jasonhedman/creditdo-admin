import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Avatar,
  Stack,
} from '@mui/material';

import { UserData } from '../../hooks/types';

interface Props {
  user: UserData;
  updateUser: (user: UserData) => Promise<void>;
}

export const AccountProfileDetails: React.FC<Props> = ({ user, updateUser }) => {

  const formik = useFormik({
    initialValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
      profilePicture: Yup
        .string()
        .max(255)
        .required(
          'Profile picture is required'),
    }),
    onSubmit: async () => {
      updateUser(formik.values);
    }
  });

  const randomizeAvatar = () => {
    formik.setFieldValue(
      'profilePicture', 
      `https://api.multiavatar.com/${Math.random().toString(8).substring(2)}.png`
    );
  }

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Card
        variant="outlined"
      >
        <CardHeader
          subheader="Edit your profile information"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Stack
            alignItems='center'
            spacing={4}
          >
            <Stack
              alignItems='center'
              spacing={1}
            >
              <Avatar
                alt='Profile picture'
                src={formik.values.profilePicture}
                sx={{
                  height: 64,
                  width: 64
                }}
              />
              <Button
                color='primary'
                onClick={randomizeAvatar}
                variant='text'
              >
                Randomize
              </Button>
            </Stack>
            <Stack
              direction='row'
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
            </Stack>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
          </Stack>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};
