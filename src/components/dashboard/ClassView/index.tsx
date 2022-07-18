import {useState, FC} from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import UpcomingEvent from '../UpcomingEvent';
import LessonProgress from '../LessonProgress';
import ImplementationProgress from '../ImplementationProgress';

import { Class } from '../../../hooks/useClasses';

interface Props {
    classData: Class;
}

const ClassView : FC<Props> = ({ classData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader
                classData={classData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Stack
                direction='row'
                spacing={2}
            >
                <Stack
                    direction={isOpen ? 'column' : 'row'}
                    spacing={isOpen ? 4 : 2}
                    flexGrow={isOpen ? 1 : 2}
                >
                    <UpcomingEvent
                        compact={!isOpen}
                        classId={classData.id}
                    />
                    <LessonProgress
                        compact={!isOpen}
                        classId={classData.id}
                    />
                </Stack>
                <Stack
                    spacing={2}
                    flexGrow={1}
                >
                    <ImplementationProgress
                        compact={!isOpen}
                        classId={classData.id}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ClassView