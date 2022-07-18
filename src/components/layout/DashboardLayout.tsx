import { useState, FC, ReactNode } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar, { sidebarWidth } from './DashboardSidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: sidebarWidth
  }
}));

interface Props {
  children: ReactNode;
}

const DashboardLayout : FC<Props> = ({ children }) => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;