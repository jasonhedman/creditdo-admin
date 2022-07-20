import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import AddStudent from './AddStudent'

import { Student } from '../../../../hooks/types';
import EditStudent from './EditStudent';

interface Props {
    students: Student[];
    classId: string;
}

const EditMode : FC<Props> = ({ students, classId }) => {
  return (
    <Stack
        spacing={2}
    >
        <Typography
            variant="h6"
        >
            Edit Mode
        </Typography>
        {
            students.map(student => (
                <EditStudent
                    key={student.id}
                    student={student}
                    classId={classId}
                />
            ))
        }
        <AddStudent
            classId={classId}
        />
    </Stack>
  )
}

export default EditMode