interface Lesson {
    id: string;
    title: string;
    lengthHours: number;
    completed: boolean;
}

const now = new Date();

const lessons : Lesson[] = [
    {
        id: '1',
        title: "Earn",
        lengthHours: 2,
        completed: false,
    },
    {
        id: '2',
        title: "Budget",
        lengthHours: 2,
        completed: false,
    },
    {
        id: '3',
        title: "Goal Setting",
        lengthHours: 1,
        completed: false,
    },
    {
        id: '4',
        title: "Spend",
        lengthHours: 2,
        completed: false,
    },
    {
        id: '5',
        title: "Save",
        lengthHours: 2,
        completed: false,
    },
    {
        id: '6',
        title: "Work Ethic",
        lengthHours: 2,
        completed: false,
    }
]

export default lessons;