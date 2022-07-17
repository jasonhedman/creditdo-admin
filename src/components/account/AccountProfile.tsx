import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import useAuth from '../../hooks/useAuth';

import { UserData } from '../../hooks/types';

interface Props {
  user: UserData;
}

export const AccountProfile: React.FC<Props> = ({ user, ...rest }) => {
  
  const { signOut } = useAuth();

  return (
    <Card 
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={'/static/images/avatars/avatar_6.png'}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.firstName} {user.lastName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.email}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
      <Button
        color="error"
        fullWidth
        variant="text"
        onClick={signOut}
      >
        Sign Out
      </Button>
    </CardActions>
  </Card>
  )

}