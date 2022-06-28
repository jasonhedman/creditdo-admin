import React from 'react'

import SectionContainer from '../utility/SectionContainer';
import EventInfo from './EventInfo';
import UserAvatars from '../../utility/UserAvatars';

interface Props {
    compact?: boolean
}

const UpcomingEvent : React.FC<Props> = ({ compact }) => {

    return (
        <SectionContainer
            title='Upcoming Event'
            compact={compact}
        >
            <EventInfo />
            {!compact && (
                <UserAvatars 
                    numStudents={10} 
                    size={40}
                />
            )}
        </SectionContainer>
    )
}

export default UpcomingEvent