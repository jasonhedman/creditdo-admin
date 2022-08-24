
interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

const sections : {[key: string] : Question[]} = {
    Budgeting: [
        {
            question: "Justine earns $100 per week mowing lawns. She must spend $35 per week on food and $12 per week on water and juice. She needs new uniforms for school, so she spends around $37 per month on clothes.  She also spends $7 per week on downloadable music. Justine would like to save $450. How many months will it take her to save $450?",
            answers: [
                "0. She already had that much money saved.", 
                "2", 
                "3", 
                "4", 
                "5"
            ],
            correctAnswer: "4"
        },
        {
            question: "From the question above, if Justine wanted to cut down on her expenses, which item could she spend less money on?",
            answers: [
                "Food",
                "Water and Juice",
                "Uniforms",
                "Downloadable Music"
            ],
            correctAnswer: "Downloadable Music"
        },
        {
            question: "Which form of payment for a purchase may incur fees if the balance is not paid by the due date?",
            answers: [
                "Credit Card",
                "Debit Card",
                "Currency",
                "Check"
            ],
            correctAnswer: "Credit Card"
        },
        {
            question: "People with a poor credit history will usually pay a:",
            answers: [
                "Higher inflation rate",
                "Lower inflation rate",
                "Lower interest rate",
                "Higher interest rate"
            ],
            correctAnswer: "Higher interest rate"
        },
        {
            question: 'A budget is a record of:',
            answers: [
                "Profits and Losses",
                "Income and Expenses",
                "Costs and Benefits",
                "Assets and Liabilities"
            ],
            correctAnswer: "Expenses and Income"
        }
    ],
    Earning: [
        {
            question: "What is the difference between a credit card and a debit card?",
            answers: [
                "A debit card is linked directly to your credit card whereas your credit card is not linked to your debit card.",
                "A person can purchase food on a debit card, but not on a credit card.",
                "Purchases on your debit card are taken directly from your bank account whereas purchases with credit cards are not.",
                "With credit cards, if the balance is not paid, the bank will charge you interest on your purchase. With debit cards you are not charged interest for your purchases.",
                "Both \"Purchases on your debit card are taken directly from your bank account whereas purchases with credit cards are not.\" and \"With credit cards, if the balance is not paid, the bank will charge you interest on your purchase. With debit cards you are not charged interest for your purchases.\""
            ],
            correctAnswer: "Both \"Purchases on your debit card are taken directly from your bank account whereas purchases with credit cards are not.\" and \"With credit cards, if the balance is not paid, the bank will charge you interest on your purchase. With debit cards you are not charged interest for your purchases.\""
        },
        {
            question: "You are employed, but your income is low because you have few job skills. What would be the best action to take to increase your income?",
            answers: [
                "Get more training",
                "Apply for a credit card",
                "Stay with the current job",
                "Look for another similar job"
            ],
            correctAnswer: "Get more training"
        },
        {
            question: "Minimum wage is…",
            answers: [
                "It is an amount of money that, by state law, an employer has to pay you for your work.",
                "It is the amount of money you make each month.",
                "It is the money you have left over after all of your expenses are paid.",
                "It is the minimum amount of money you have to pay for a bank account."
            ],
            correctAnswer: "It is an amount of money that, by state law, an employer has to pay you for your work."
        },
        {
            question: "What is the opportunity cost of dropping out of school before your high school graduation?",
            answers: [
                "Higher wages in the future",
                "Freedom to do what you want right now",
                "What you earn working after you drop out",
                "No expenses for textbooks and school supplies"
            ],
            correctAnswer: "Higher wages in the future"
        },
        {
            question: "What should not be included on a resume?",
            answers: [
                "Previous work experience",
                "Awards",
                "Education",
                "Your personal information such as social security number, birth date, and bank account information."
            ],
            correctAnswer: "Your personal information such as social security number, birth date, and bank account information."
        }
    ],
    Savings: [
        {
            question: "When you have a savings account which of the following is correct?",
            answers: [
                "You will begin to earn interest on your money after you turn 18.",
                "You will begin to earn interest on your money anytime.",
                "You will lose all of your money when you turn 18.",
            ],
            correctAnswer: "You will begin to earn interest on your money anytime."
        },
        {
            question: "You are not allowed to have a savings account until you turn 18.",
            answers: [
                "True",
                "False"
            ],
            correctAnswer: "False"
        },
        {
            question: "You should keep all records of financial transactions including bank account information, credit card information and budgets.",
            answers: [
                "True",
                "False"
            ],
            correctAnswer: "True"
        },
        {
            question: "Juanita has a debit card, a credit card, a certificate of deposit (CD), and an automobile insurance policy. Which of these is a savings instrument?",
            answers: [
                "The debit card",
                "The credit card",
                "The certificate of deposit (CD)",
                "The automobile insurance policy"
            ],
            correctAnswer: "The certificate of deposit (CD)"
        },
        {
            question: "What does the bank pay you for holding your savings?",
            answers: [
                "Interest",
                "Loan",
                "Profit",
                "Dividend"
            ],
            correctAnswer: "Interest"
        }
    ],
    "Work Ethic": [
        {
            question: "When working at a job, it is a good idea to:",
            answers: [
                "Be on time",
                "Dress appropriately",
                "Invite all of your friends to come to your job",
                "Both be on time and dress appropriately",
                "All of the above"
            ],
            correctAnswer: "Both be on time and dress appropriately"
        },
        {
            question: "Having a strong work ethic means…",
            answers: [
                "Working hard for the money you receive.",
                "Having a positive attitude towards work.",
                "Respecting others in the workplace including bosses and co-workers.",
                "All of the above",
            ],
            correctAnswer: "All of the above"
        },
        {
            question: "Alex has a job interview tomorrow at 8AM: What should he do?",
            answers: [
                "Stay up all night playing video games",
                "Go to bed early",
                "Learn about the job he is interviewing for",
                "Both go to bed early and learn about the job he is interviewing for"
            ],
            correctAnswer: "Both go to bed early and learn about the job he is interviewing for"
        }
    ]
}

export default sections;