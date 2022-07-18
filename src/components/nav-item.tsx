import { FC, ReactNode } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Box, Typography, ListItem, Stack } from '@mui/material';

interface Props {
  href: string;
  icon: ReactNode;
  title: string;
}

const NavItem : FC<Props> = ({ href, icon, title }) => {
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
    >
      <NextLink
        href={href}
        passHref
      >
        <Stack
          alignItems="center"
          p={1}
          sx={{
            backgroundColor: active && '#FFF',
            borderRadius: 1,
            color: active ? 'primary.main' : '#FFF',
            '&:hover': {
              cursor: 'pointer',
            }
          }}
        >
          {icon}
          {
            active && (
              <Typography
                fontSize={'10px'}
                fontWeight='bold'
              >
                {title}
              </Typography>
            )
          }
          

        </Stack>
        {/* <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && '#FFF',
            borderRadius: 1,
            color: active ? 'primary.main' : '#FFF',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'primary.main' : '#FFF'
            },
            '&:hover': {
              backgroundColor: active ? 'rgba(255,255,255, 0.95)' : 'rgba(255,255,255, 0.2)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button> */}
      </NextLink>
    </Box>
  );
};

export default NavItem;