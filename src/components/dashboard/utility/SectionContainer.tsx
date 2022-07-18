import React from 'react'

import Stack from '@mui/material/Stack'

import SectionHeader from './SectionHeader';

interface Props {
    title: string;
    children: React.ReactNode;
    compact?: boolean;
    navigateTo?: string;
}

const SectionContainer : React.FC<Props> = ({ title, children, compact, navigateTo }) => {
  return (
    <Stack
      spacing={4}
      flex={1}
    >
      <SectionHeader
          title={title}
          compact={compact}
          navigateTo={navigateTo}
      />
      <Stack
        flex={1}
        justifyContent="space-around"
      >
        {children}
      </Stack>
    </Stack>
  )
}

export default SectionContainer