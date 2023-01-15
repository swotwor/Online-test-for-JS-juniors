import {questions} from "./questions";
import {setCurrentAnswer} from "./reducer";

export const defaultState = {
    step: 1,
    totalQuestions: questions.length,
    currentQuestion: 1,
    correctQuestions: 0,
    answersToQuestions: 0,
    questionWasAnswered: false,
    currentAnswer: 3, // 3 - не выбран ответ
};