import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../../../../../../store/questions";
import {
    Wrapper,
    AnswerBlock,
    QuestionTitle,
    BlockWithAnswers,
} from "./styledComponents";
import {
    setCurrentAnswer,
    setCorrectQuestions,
    setAnswersToQuestions,
    setQuestionWasAnswered,
} from "../../../../../../../store/reducer";

const QuestionBody = () => {
    const state = useSelector(state => state.state);
    const {
        currentAnswer,
        currentQuestion,
        answersToQuestions,
    } = state;
    const dispatch = useDispatch();
    const currentQuestionState = questions[currentQuestion - 1];
    const answerHighlighting = (correctAnswer, answerNumber) => {
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
    const answersText = currentQuestionState.answers.map((answer, answerNumber) => {
        return (
            <AnswerBlock
                key={answerNumber}
                correctAnswer={answerHighlighting(currentQuestionState.correctAnswer,answerNumber)}
                onClick={() => handleClickOnAnswer(answerNumber, currentQuestionState.correctAnswer)}>
                    { answer }
            </AnswerBlock>)
    });

    function handleClickOnAnswer(selectedAnswer, correctAnswer) {
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

    return (
        <Wrapper>
            <QuestionTitle>
                { currentQuestionState.question }
            </QuestionTitle>
            <BlockWithAnswers>
                { answersText }
            </BlockWithAnswers>
        </Wrapper>
    );
};

export default React.memo(QuestionBody);