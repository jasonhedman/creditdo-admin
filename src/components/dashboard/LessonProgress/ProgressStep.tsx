import React from 'react'

import Box from '@mui/material/Box'

import type { Status } from './types'

interface Props {
    isFirst?: boolean;
    isLast?: boolean;
    status: Status;
    selected: boolean;
    onClick: () => void;
}

const backgroundColor = {
    completed: '#9fc440',
    pastDue: '#de483a',
    notStarted: '#dcdcdc',
}

const ProgressStep : React.FC<Props> = ({isFirst, isLast, status, selected, onClick}) => {

    const borderLeftRadius = isFirst ? '15px' : '4px';
    const borderRightRadius = isLast ? '15px' : '4px';

    return (
        <Box
            onClick={onClick}
            sx={{
                backgroundColor: backgroundColor[status],
                border: selected ? 4 : 0,
                borderRadius: `${borderLeftRadius} ${borderRightRadius} ${borderRightRadius} ${borderLeftRadius}`,
                height: 30,
                flex: 1,
            }}
        />
    )
}

export default ProgressStep