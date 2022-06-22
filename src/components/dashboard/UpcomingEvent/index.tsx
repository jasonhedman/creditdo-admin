import React from 'react'

import SectionContainer from '../utility/SectionContainer';
import EventInfo from './EventInfo';
import Students from './Students';

const UpcomingEvent = () => {

    return (
        <SectionContainer
            title='Upcoming Event'
        >
            <EventInfo />
            <Students />
        </SectionContainer>
    )
}

export default UpcomingEvent