export interface UserData {
    email: string;
    firstName: string;
    lastName: string;
}
export const userDataKeys = ['email', 'firstName', 'lastName'];

interface Time {
    seconds: number;
    nanoseconds: number;
}

export interface Event {
    id: string;
	title: string;
	startDate: Time;
	endDate: Time;
	address: string;
	participants: string[]; // array of ids
	complete: boolean;
	poundsCollected: number;
}

export interface Class {
    name: string;
    teacherId: string;
    time: Time;
    id: string;
}

export interface Lesson {
    id: string;
	title: string;
	createdAt: Time;
	lengthHours: number;
	dueDate: Time;
	completed: boolean;
}

export interface Student {
    id: string;
	firstName: string;
    lastName: string;
}

export interface ToDo {
	id: string;
	title: string;
	description: string;
	dueDate: Time;
	completed: boolean;
}
export const statuses = ['Not Started', 'Past Due', 'Completed'] as const;


