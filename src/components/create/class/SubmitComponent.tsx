import React from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface Props {
    formValues: { [key: string]: any };
    onSubmit: () => Promise<void>
}

const SubmitComponent : React.FC<Props> = ({ onSubmit, formValues }) => {

  return (
    <Stack
      alignItems='center'
      spacing={2}
    >
        <Typography
          variant='h4'
        >
          Create Class
        </Typography>
        <Typography
          variant='h6'
        >
          Class Information
        </Typography>
        <Typography>
          Class Name: {formValues.name}
        </Typography>
        <Typography>
          Time: {formValues.time.toLocaleString()}
        </Typography>
        <Typography
          variant='h6'
        >
          Students
        </Typography>
        {
          formValues.students.length > 0 ? (
            formValues.students.map((student, index) => (
              <Typography key={index}>
                {student.firstName} {student.lastInitial}.
              </Typography>
            ))
          ) : (
            <Typography>
              No students added.
            </Typography>
          )
        }
        <Typography
          variant='h6'
        >
          Event Information
        </Typography>
        {
          formValues.title ? (
            <>
              <Typography>
                Event Name: {formValues.title}
              </Typography>
              <Typography>
                Start Date: {formValues.startDate.toLocaleString()}
              </Typography>
              <Typography>
                End Time: {formValues.endDate.toLocaleString()}
              </Typography>
              <Typography>
                Address: {formValues.address}
              </Typography>
            </>
          ) : (
            <Typography>
              No event information added.
            </Typography>
          )
        }
        <Button 
          onClick={onSubmit}
          variant='contained'
        >
            Submit
        </Button>
    </Stack>
  )
}

export default SubmitComponent