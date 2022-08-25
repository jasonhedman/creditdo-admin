import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useWizard } from 'react-use-wizard';
import WizardFooter from './WizardFooter';

import { useClassFormik } from '../../../hooks/useCreateClass';
import { ClassInputData } from '../../../services/classes';

interface Props {
    classValues: ClassInputData;
    saveClassData: (data: ClassInputData) => void;
}

const CreateClass : React.FC<Props> = ({ saveClassData, classValues }) => {

    const { nextStep } = useWizard();

    const classFormik = useClassFormik(classValues);

    const onNext = () => {
        saveClassData(classFormik.values);
        nextStep();
    }

    return (
        <Stack
            alignItems="center"
            width='100%'
            spacing={2}
        >
            <Typography
                color="textPrimary"
                variant="h4"
            >
                Create Class
            </Typography>
            <TextField
                error={Boolean(classFormik.touched.name && classFormik.errors.name)}
                fullWidth
                helperText={classFormik.touched.name && classFormik.errors.name}
                label="Class Name"
                margin="normal"
                name="name"
                onBlur={classFormik.handleBlur}
                onChange={classFormik.handleChange}
                value={classFormik.values.name}
                variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Time"
                    value={classFormik.values.time}
                    onChange={val => classFormik.setFieldValue('time', val)}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            fullWidth 
                        />
                    )}
                />
            </LocalizationProvider>
            <WizardFooter 
                isFirstStep
                onNext={onNext}
                isNextDisabled={!classFormik.isValid}
            />
        </Stack>
  )
}

export default CreateClass