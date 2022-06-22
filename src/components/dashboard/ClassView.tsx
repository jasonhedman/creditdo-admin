import React from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import UpcomingEvent from './UpcomingEvent'
import ImplementationProgress from './ImplementationProgress'
import LessonProgress from './LessonProgress'

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
                isOpen && (
                    <Stack
                        direction="row"
                        spacing={2}
                        height={'100%'}
                    >
                        <Stack 
                            flex={1}
                        >
                            <UpcomingEvent />
                            <LessonProgress />
                        </Stack>
                        <ImplementationProgress />
                    </Stack>
                )
            }
        </Stack>
    )
}

export default ClassView