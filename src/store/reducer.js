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
        default:
            return state;
    };
};

export const setStep = () => ({type: 'NEXT_STEP'});
export const setQuestion = () => ({type: 'NEXT_QUESTION'});