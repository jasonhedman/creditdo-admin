export type Status = 'completed' | 'pastDue' | 'notStarted';

export interface Lesson {
    title: string;
    date: Date;
    duration: number;
    status: Status;
}