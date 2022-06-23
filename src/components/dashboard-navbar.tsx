import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Typography, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';

import useAuth from '../hooks/useAuth';

const DashboardNavbarRoot = styled(AppBar)(({ theme } : {theme: Theme}) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  const { signOut, user } = useAuth();

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <NotificationsIcon 
                fontSize="small"
                color='primary'
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mail">
            <IconButton>
              <EmailIcon 
                fontSize="small"
                color='primary'
              />
            </IconButton>
          </Tooltip>
          {user && (
            <Typography 
              variant='body2' 
              color='text.primary'
              sx={{
                ml: 1,
              }}
            >
              Welcome, {user.firstName} {user.lastName}!
            </Typography>
          )}
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
            onClick={signOut}
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
