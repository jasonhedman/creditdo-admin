import React from 'react'

import Skeleton from '@mui/material/Skeleton'

import SectionContainer from '../utility/SectionContainer';
import EventInfo from './EventInfo';
import UserAvatars from '../../utility/UserAvatars';
import NoEvent from './NoEvent';

import useUpcomingEvent from '../../../hooks/useUpcomingEvent';

interface Props {
    compact?: boolean
    classId: string;
}

const UpcomingEvent : React.FC<Props> = ({ compact, classId }) => {

    const { event, loading } = useUpcomingEvent(classId);

    return (
        <SectionContainer
            title='Upcoming Event'
            compact={compact}
            navigateTo='/work'
        >
            {
                loading ? (
                    <Skeleton
                        variant="rectangular"
                    />
                ) : (
                    event ? (
                        <>
                            <EventInfo
                                event={event}
                            />
                            {!compact && (
                                <UserAvatars 
                                    numStudents={event.participants.length} 
                                    size={40}
                                />
                            )}
                        </>
                    ) : (
                        <NoEvent 
                            classId={classId}
                        />
                    )
                )
            }
        </SectionContainer>
    )
}

export default UpcomingEvent