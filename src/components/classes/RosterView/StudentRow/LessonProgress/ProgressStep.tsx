import React from 'react'

import Box from '@mui/material/Box'

import type { Status } from './types'

interface Props {
    isFirst?: boolean;
    isLast?: boolean;
    status: Status;
}

const backgroundColor = {
    completed: '#9fc440',
    pastDue: '#de483a',
    notStarted: '#dcdcdc',
}

const ProgressStep : React.FC<Props> = ({isFirst, isLast, status}) => {

    const borderLeftRadius = isFirst ? '10px' : '4px';
    const borderRightRadius = isLast ? '10px' : '4px';

    return (
        <Box
            sx={{
                backgroundColor: backgroundColor[status],
                borderRadius: `${borderLeftRadius} ${borderRightRadius} ${borderRightRadius} ${borderLeftRadius}`,
                height: 20,
                flex: 1,
            }}
        />
    )
}

export default ProgressStep