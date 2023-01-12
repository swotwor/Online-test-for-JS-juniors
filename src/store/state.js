import {questions} from "./questions";

export const defaultState = {
    step: 1,
    totalQuestions: questions.length,
    currentQuestion: 1,
    correctQuestions: 0,
};