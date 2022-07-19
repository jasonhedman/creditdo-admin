import { useState, FC } from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';

import ClassHeader from './ClassHeader'
import HeaderRow from './HeaderRow'
import StudentRow from './StudentRow';
import AddStudent from './AddStudent';

import { Class } from '../../../hooks/useClasses';
import useStudents from '../../../hooks/useStudents';
import useLessons from '../../../hooks/useLessons';

interface Props {
    classData: Class
}

const ClassView : FC<Props> = ({ classData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { students } = useStudents(classData.id);

    return (
        <Stack
            spacing={2}
        >
            <ClassHeader
                classData={classData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Grid 
                container
                spacing={2}
            >
                <HeaderRow />
                {
                    students.map(student => (
                        <StudentRow 
                            key={student.id}
                            student={student}
                            classId={classData.id}
                        />
                    ))
                }
            </Grid>
            <AddStudent
                classId={classData.id}
            />
        </Stack>
    )
}

export default ClassView