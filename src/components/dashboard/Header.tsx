import React, { useState } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const viewOptions = [
    'Class'
] as const;
type ViewOptionTypes = typeof viewOptions[number];

const Header : React.FC = () => {

    const [view, setView] = useState<ViewOptionTypes>('Class');

    const handleChange = (event: SelectChangeEvent) => {
        setView(event.target.value as ViewOptionTypes);
    };

    return (
        <Stack
            direction="row"
            alignItems='center'
            spacing={4}
        >
            <Typography
                variant='h5'
            >
                Dashboard
            </Typography>
            <FormControl>
                <InputLabel>
                    View
                </InputLabel>
                <Select
                    value={view}
                    label="View"
                    onChange={handleChange}
                >
                    {
                        viewOptions.map((option, index) => (
                            <MenuItem 
                                key={index} 
                                value={option}
                            >
                                {option}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <Box flex={1} />
            <Link
                href='/create/class'
                passHref
            >
                <Button
                    variant='contained'
                >
                    Create Class
                </Button>
            </Link>
        </Stack>
    )
}

export default Header