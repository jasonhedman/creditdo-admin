import React from 'react'

import SectionContainer from '../utility/SectionContainer';
import EventInfo from './EventInfo';
import Students from './Students';

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
            {!compact && <Students />}
        </SectionContainer>
    )
}

export default UpcomingEvent