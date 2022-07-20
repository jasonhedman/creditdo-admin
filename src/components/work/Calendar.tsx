import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { default as CalendarComponent } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styled from 'styled-components';

import { theme } from '../../theme/index'

const CalendarContainer = styled.div`
    margin: auto;
    padding: 1rem;
    border-radius: 3px;
    .react-calendar { 
        border: none;
    }
    .react-calendar__navigation {
        display: flex;

        .react-calendar__navigation__label {
        font-weight: bold;
        font-family: 'Inter';
        border: 0px
        }

        .react-calendar__navigation__arrow {
        border: 0px
        }
    }
    .react-calendar__month-view__weekdays {
        text-align: center;
        text-decoration: none;
        color: ${theme.palette.secondary.main};
        font-family: 'Inter';
    }
    abbr {
        text-decoration: none;
    }
    .react-calendar__month-view__days__day--weekend {
        color: inherit;
    }
    button {
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 5px 0;
        font-family: 'Inter';

        &:hover {
        background-color: #556b55;
        }

        &:active {
            background-color: #000;
        }
    }
    .react-calendar__month-view__days {
        .react-calendar__tile {
            width: 40px;
            height: 40px
        }
    }
    .react-calendar__tile--now {
        background: ${theme.palette.primary.light};
    }

    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: ${theme.palette.primary.light};
        opacity: 0.8;
    }
    .react-calendar__tile--active {
        background: ${theme.palette.secondary.main};
        color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: ${theme.palette.secondary.main};
        opacity: 0.8; 
    }
`;

interface Props {
    filterDate: Date | null;
    setDate: (date: Date | null) => void;
}

const Calendar : FC<Props> = ({ filterDate, setDate }) => {

    return (
        <Stack
            alignItems='center'
        >
            <CalendarContainer>
                <CalendarComponent 
                    onChange={(date) => {date.setMinutes(1); setDate(date);}}
                    value={filterDate}
                />
            </CalendarContainer>
            <Button
                onClick={() => setDate(null)}
            >
                Clear
            </Button>
        </Stack>
    )
}

export default Calendar