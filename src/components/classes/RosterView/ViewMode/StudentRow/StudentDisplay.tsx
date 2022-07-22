import { FC } from 'react'


import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import useAvatar from '../../../../../hooks/useAvatar'

interface Props {
    firstName: string
    lastName: string
}

const StudentDisplay : FC<Props> = ({ firstName, lastName }) => {

  const { uri } = useAvatar();

  return (
    <Stack
      direction="row"
      alignItems='center'
      spacing={2}
      width='100%'
    >
      <Avatar 
        src={uri}
        width={40}
        height={40}
        alt={`${firstName} ${lastName}`}
      />
      <Typography>
        {lastName}, {firstName}
      </Typography>
    </Stack>
  )
}

export default StudentDisplay