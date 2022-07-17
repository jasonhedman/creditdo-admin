interface Lesson {
    id: string;
    title: string;
    createdAt: Date;
    lengthHours: number;
    dueDate: Date;
    completed: boolean;
}

const now = new Date();

const lessons : Lesson[] = [
    {
        id: '1',
        title: "Earn",
        createdAt: now,
        lengthHours: 2,
        dueDate: now,
        completed: false,
    },
    {
        id: '2',
        title: "Budget",
        createdAt: now,
        lengthHours: 2,
        dueDate: now,
        completed: false,
    },
    {
        id: '3',
        title: "Goal Setting",
        createdAt: now,
        lengthHours: 1,
        dueDate: now,
        completed: false,
    },
    {
        id: '4',
        title: "Spend",
        createdAt: now,
        lengthHours: 2,
        dueDate: now,
        completed: false,
    },
    {
        id: '5',
        title: "Save",
        createdAt: now,
        lengthHours: 2,
        dueDate: now,
        completed: false,
    },
    {
        id: '6',
        title: "Work Ethic",
        createdAt: now,
        lengthHours: 2,
        dueDate: now,
        completed: false,
    }
]

export default lessons;