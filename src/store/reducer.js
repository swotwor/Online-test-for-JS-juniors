import { defaultState } from "./state";

export const questionnaireReducer = (state = defaultState, action) => {
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
        case 'SET_ANSWERS_TO_QUESTIONS':
            return {
                ...state,
                answersToQuestions: state.answersToQuestions + 1
            };
        case 'SET_QUESTION_WAS_ANSWERED':
            console.log(action)
            return {
                ...state,
                questionWasAnswered: action.payload
            };
        default:
            return state;
    };
};

export const setStep = () => ({type: 'NEXT_STEP'});
export const setQuestion = () => ({type: 'NEXT_QUESTION'});
export const setCorrectQuestions = () => ({type: 'CORRECT_QUESTION'});
export const setAnswersToQuestions = () => ({type: 'SET_ANSWERS_TO_QUESTIONS'});
export const setQuestionWasAnswered = payload => ({type: 'SET_QUESTION_WAS_ANSWERED', payload});