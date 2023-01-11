const questions = [
    {
        id: 1,
        answers: [1, 4, 7],
        question: 'Сколько будет 2 + 2 ??',
        correctAnswer: 1,
    },
    {
        id: 2,
        answers: [5, 4, 7],
        question: 'Сколько будет 3 + 2 ??',
        correctAnswer: 1,
    },
    {
        id: 3,
        answers: [1, 4, 6],
        question: 'Сколько будет 4 + 2 ??',
        correctAnswer: 2,
    },
    {
        id: 4,
        answers: [1, 4, 7],
        question: 'Сколько будет 5 + 2 ??',
        correctAnswer: 2,
    },
    {
        id: 5,
        answers: [1, 8, 7],
        question: 'Сколько будет 6 + 2 ??',
        correctAnswer: 1,
    },
];

const defaultState = {
    step: 1,
    totalQuestions: questions.length,
    currentQuestion: 1,
    correctQuestions: 0,
};

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion === state.totalQuestions
                    ? null
                    : state.currentQuestion + 1
            };
        case 'CORRECT_QUESTION':
            return {
                ...state,
                correctQuestions: state.correctQuestions + 1
            };
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            };
        default:
            return state;
    };
};