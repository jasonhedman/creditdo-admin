import React from 'react'

import Stack from '@mui/material/Stack'

import SectionHeader from './SectionHeader';

interface Props {
    title: string;
    children: React.ReactNode;
    compact?: boolean;
}

const SectionContainer : React.FC<Props> = ({ title, children, compact }) => {
  return (
    <Stack
        spacing={2}
        flex={1}
    >
        <SectionHeader
            title={title}
            compact={compact}
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