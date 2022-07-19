import { FC, ReactNode} from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

import useClasses from '../../hooks/useClasses';

interface Props {
    title: string;
    actionButton?: ReactNode;
}

const PageHeader : FC<Props> = ({ title, actionButton }) => {

    const { classOptions, classView, setClassView } = useClasses();

    const handleChange = (event: SelectChangeEvent) => {
        setClassView(event.target.value as string);
    }

    return (
        <Stack
            direction="row"
            alignItems='center'
            spacing={4}
        >
            <Typography
                variant='h5'
            >
                {title}
            </Typography>
            <FormControl>
                <InputLabel>
                    View
                </InputLabel>
                <Select
                    value={classView}
                    label="View"
                    onChange={handleChange}
                >
                    {
                        classOptions.map(option => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <Box flex={1} />
            {actionButton}
        </Stack>
    )
}

export default PageHeader