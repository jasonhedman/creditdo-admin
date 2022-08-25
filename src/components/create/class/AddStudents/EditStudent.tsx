import { FC, ChangeEventHandler, FocusEventHandler } from 'react'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

const labelMapping = {
    firstName: 'First Name',
    lastInitial: 'Last Initial',
    parentEmail: 'Parent Email',
}
  

import { StudentInput } from '../../../../services/students';

interface Props {
    student: StudentInput;
    handleBlur: FocusEventHandler<HTMLInputElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    touched: { [fieldName: string]: boolean };
    error: { [fieldName: string]: string };
    index: number;
}

const EditStudent : FC<Props> = ({ student, handleBlur, handleChange, touched, error, index }) => {


    return (
        <Stack
            direction="row"
            spacing={2}
        >
            {
                Object.keys(student).map(key => (
                    <TextField
                        name={`students[${index}].${key}`}
                        fullWidth={key !== 'lastInitial'}
                        error={Boolean(touched?.[key] && error?.[key])}
                        helperText={touched?.[key] && error?.[key]}
                        key={key}
                        label={labelMapping[key]}
                        value={student[key]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        sx={{
                            minWidth: '120px'
                        }}
                    />
                ))
            }
        </Stack>
    )
}

export default EditStudent