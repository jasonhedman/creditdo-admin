import React from 'react'

import { Wizard } from 'react-use-wizard';

import Link from 'next/link';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import useCreateClass from '../../../hooks/useCreateClass';

import CreateClass from './CreateClass';
import AddStudents from './AddStudents';
import CreateClassEvent from './CreateClassEvent';
import SubmitComponent from './SubmitComponent';

const CreateClassWizard = () => {

    const { classFormik, studentsFormik, eventFormik, submitted, submitting, saveClassData, saveStudentsData, saveEventData, submit } = useCreateClass();

    if(submitted){
        return (
            <Stack
                alignItems="center"
                spacing={2}
            >
                <Typography
                    variant="h4"
                >
                    Class Created!
                </Typography>
                <Link
                    href="/classes"
                    passHref
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Go to Classes
                    </Button> 
                </Link>
            </Stack>
        )
    }

    if(submitting){
        return (
            <Stack
                alignItems="center"
                spacing={2}
            >
                <Typography
                    variant="h4"
                >
                    Submitting...
                </Typography>
            </Stack>
        )
    }

    return (
        <Container
            maxWidth="sm"
        >
            <Wizard>
                <CreateClass
                    classValues={classFormik.values}
                    saveClassData={saveClassData}
                />
                <AddStudents 
                    studentsValues={studentsFormik.values}
                    saveStudentsData={saveStudentsData}
                />
                <CreateClassEvent 
                    eventValues={eventFormik.values}
                    saveEventData={saveEventData}
                />
                <SubmitComponent 
                    onSubmit={submit}
                    formValues={{...classFormik.values, ...studentsFormik.values, ...eventFormik.values}}
                />
            </Wizard>
        </Container>
    )
}

export default CreateClassWizard