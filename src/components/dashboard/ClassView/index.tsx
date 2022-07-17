import {useState, FC} from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import ExpandedView from './ExpandedView';
import CompactView from './CompactView';

import { Class } from '../../../hooks/useClasses';
import useLessons from '../../../hooks/useLessons';

interface Props {
    classData: Class;
}

const ClassView : FC<Props> = ({ classData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const { lessons, loading } = useLessons(classData.id)

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader
                classData={classData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {
                loading ? (
                    null
                ) : (
                    isOpen ? (
                        <ExpandedView 
                            lessons={lessons}
                        />
                    ) : (
                        <CompactView
                            lessons={lessons}
                        />
                    )
                )
            }
        </Stack>
    )
}

export default ClassView