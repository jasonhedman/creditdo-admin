import _ from "lodash";

interface ToDoData {
	title: string;
	description: string;
	dueDate: Date;
	completed: boolean;
    beforeEvent: boolean;
}

interface ToDo extends ToDoData {
    id: number;
}

const toDoData : ToDoData[] = [
    {
        title: "Upload class rosters",
        description: "Upload class rosters on admin dashboard",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Print permission slips",
        description: "Print permission slips for each student",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Recruit volunteers & brief them on roles",
        description: "Recruit volunteers & brief them on roles",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Course Introduction",
        description: "Teacher introduces the Smarter Barter program to students",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Hand out permission slips",
        description: "Teacher sends permission slips to students' parents, who must fill out a form",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Administer pre-test",
        description: "Administer pre-test",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 1",
        description: "Begin lesson 1",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 2",
        description: "Begin lesson 2",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 3",
        description: "Begin lesson 3",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Promote food drive",
        description: "Students familiarize themselves with the Give Healthy page and share with friends and family",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 4",
        description: "Begin lesson 4",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 5",
        description: "Begin lesson 5",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Begin lesson 6",
        description: "Begin lesson 6",
        dueDate: new Date(),
        completed: false,
        beforeEvent: true,
    },
    {
        title: "Administer post-test",
        description: "Administer post-test",
        dueDate: new Date(),
        completed: false,
        beforeEvent: false,
    },
    {
        title: "Students submit reflection",
        description: "Students submit reflection",
        dueDate: new Date(),
        completed: false,
        beforeEvent: false,
    },
    {
        title: "Students earn store credit",
        description: "Partnered grocery store rewards each student with a $50 gift card",
        dueDate: new Date(),
        completed: false,
        beforeEvent: false,
    },
]

const toDos : ToDo[] = toDoData.map((toDo, index) => ({...toDo, id: index + 1}));

export default toDos;