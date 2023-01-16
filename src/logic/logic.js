import {
    setAnswersToQuestions,
    setCorrectQuestions,
    setCurrentAnswer,
    setQuestionWasAnswered
} from "../store/reducer";

export const answerHighlighting = (correctAnswer, answerNumber, currentAnswer) => {
    if (currentAnswer === 3 ){
        return '#d3d3d3ff'
    } else {
        if (correctAnswer === answerNumber) {
            return 'rgba(58,255,31,0.61)'
        } else if (correctAnswer !== answerNumber) {
            if (currentAnswer === answerNumber) {
                return 'rgba(255,47,47,0.6)'
            } else {
                return '#d3d3d3ff'
            }
        }
    }
};

export function handleClickOnAnswer(selectedAnswer, correctAnswer, answersToQuestions, currentQuestionState, dispatch) {
    if (answersToQuestions < currentQuestionState.id) {
        dispatch(setQuestionWasAnswered(true)); // Отмечаем, был ли дан ответ на вопрос
        if (selectedAnswer === correctAnswer) {
            dispatch(setCorrectQuestions()); // Делаем +1 к правильным ответам
            dispatch(setAnswersToQuestions()); // Делаем +1 к отвеченным вопросам
            dispatch(setCurrentAnswer(selectedAnswer)); // Пользователь выбрал ответ
        } else {
            dispatch(setAnswersToQuestions()); // Делаем +1 к отвеченным вопросам
            dispatch(setCurrentAnswer(selectedAnswer)); // Пользователь выбрал ответ
        }
    }
};