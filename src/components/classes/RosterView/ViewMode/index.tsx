import { FC } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import HeaderRow from './HeaderRow'
import StudentRow from './StudentRow';

import { Student } from '../../../../hooks/types'

interface Props {
    classId: string
    students: Student[]
}

const ViewMode : FC<Props> = ({ classId, students }) => {

    if(students.length === 0) {
        return (
            <Typography>
                No students found.
            </Typography>
        )
    }
    return (
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
                        classId={classId}
                    />
                ))
            }
        </Grid>
    )
}

export default ViewMode