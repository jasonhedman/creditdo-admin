import React, { useState } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button, {} from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const viewOptions = [
  'Class'
] as const;
type ViewOptionTypes = typeof viewOptions[number];

import { DisplayOptionTypes, displayOptions } from '../../pages/classes';
import PageHeader from '../utility/PageHeader';

interface Props {
  display: DisplayOptionTypes,
  handleDisplayChange: (display: DisplayOptionTypes) => void
}

const Header : React.FC<Props> = ({ display, handleDisplayChange }) => {

  const [view, setView] = useState<ViewOptionTypes>('Class');

  const handleViewChange = (event: SelectChangeEvent) => {
    setView(event.target.value as ViewOptionTypes);
  }

  return (
    <Stack
      spacing={2}
    >
      <PageHeader 
        title='Classes'
      />
      <ButtonGroup 
        sx={{
          gap: 4,
        }}
      >
        {
          displayOptions.map((option, index) => (
            <Button
              key={index}
              variant='text'
              onClick={() => handleDisplayChange(option)}
              sx={{
                color: display === option ? 'primary.main' : 'text.primary',
              }}
            >
              {option}
            </Button>
          ))
        }
      </ButtonGroup>
    </Stack>
  )
}

export default Header;