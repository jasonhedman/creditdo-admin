interface ToDo {
	id: string;
	title: string;
	description: string;
	dueDate: Date;
	completed: boolean;
}

const toDos : ToDo[] = [
    {
        id: '1',
        title: "Upload class rosters",
        description: "Upload class rosters on admin dashboard",
        dueDate: new Date(),
        completed: false,
    },
    {
        id: '2',
        title: "Print permission slips",
        description: "Print permission slips for each student",
        dueDate: new Date(),
        completed: false,
    },
    {
        id: '3',
        title: "Recruit volunteers & brief them on roles",
        description: "Recruit volunteers & brief them on roles",
        dueDate: new Date(),
        completed: false,
    },
    {
        id: '4',
        title: "Administer pre-test",
        description: "Administer pre-test",
        dueDate: new Date(),
        completed: false,
    },
    {
        id: '5',
        title: "Begin lesson 1",
        description: "Begin lesson 1",
        dueDate: new Date(),
        completed: false,
    },
]

export default toDos;