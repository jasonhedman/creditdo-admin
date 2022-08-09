
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
        }
    ]
}

export default sections;