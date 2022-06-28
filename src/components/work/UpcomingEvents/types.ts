import { Moment } from 'moment';

export interface Event {
    title: string;
    date: Moment;
    address: string;
}