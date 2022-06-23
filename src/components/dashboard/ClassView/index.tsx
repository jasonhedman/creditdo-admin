import React from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import ExpandedView from './ExpandedView';
import CompactView from './CompactView';

const ClassView = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(true);

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {
                isOpen ? (
                    <ExpandedView />
                ) : (
                    <CompactView />
                )
            }
        </Stack>
    )
}

export default ClassView