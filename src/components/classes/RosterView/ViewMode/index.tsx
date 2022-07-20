import { FC } from 'react'

import Grid from '@mui/material/Grid'

import HeaderRow from './HeaderRow'
import StudentRow from './StudentRow';

import { Student } from '../../../../hooks/types'

interface Props {
    classId: string
    students: Student[]
}

const ViewMode : FC<Props> = ({ classId, students }) => {
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