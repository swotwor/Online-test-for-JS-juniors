import { defaultState } from "./state";
import {questions} from "./questions";

export const questionnaireReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion === state.totalQuestions
                    ? null
                    : state.currentQuestion + 1
            };
        case 'SET_CORRECT_QUESTION':
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
            // console.log(action);
            return {
                ...state,
                questionWasAnswered: action.payload
            };
        case 'SET_CURRENT_ANSWER':
            return {
                ...state,
                currentAnswer: action.payload
            };
        case 'RESET':
            return {
                ...state,
                step: 1,
                totalQuestions: questions.length,
                currentQuestion: 1,
                correctQuestions: 0,
                answersToQuestions: 0,
                questionWasAnswered: false,
                currentAnswer: 3,
            };
        default:
            return state;
    };
};

export const setStep = () => ({type: 'NEXT_STEP'});
export const RESET = () => ({type: 'RESET'});
export const setQuestion = () => ({type: 'NEXT_QUESTION'});
export const setCurrentAnswer = payload => ({type: 'SET_CURRENT_ANSWER', payload});
export const setCorrectQuestions = () => ({type: 'SET_CORRECT_QUESTION'});
export const setAnswersToQuestions = () => ({type: 'SET_ANSWERS_TO_QUESTIONS'});
export const setQuestionWasAnswered = payload => ({type: 'SET_QUESTION_WAS_ANSWERED', payload});
