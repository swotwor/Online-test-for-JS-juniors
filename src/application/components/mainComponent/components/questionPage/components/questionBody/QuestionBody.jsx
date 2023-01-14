import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../../../../../../store/questions";
import {
    Wrapper,
    AnswerBlock,
    QuestionTitle,
    BlockWithAnswers,
} from "./styledComponents";
import {
    setQuestion,
    setCorrectQuestions,
    setAnswersToQuestions,
    setQuestionWasAnswered,
} from "../../../../../../../store/reducer";

const QuestionBody = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const currentQuestionState = questions[state.currentQuestion - 1];
    const answersText = currentQuestionState.answers.map((answer, index) => {
        return (
            <AnswerBlock
                key={index}
                correctAnswer={selectedAnswer === index}
                onClick={() => handleClickOnAnswer(index, currentQuestionState.correctAnswer)}>
                    { answer }
            </AnswerBlock>)
    });

    function handleClickOnAnswer(selectedAnswer, correctAnswer) {
        if (state.answersToQuestions < currentQuestionState.id) {
            dispatch(setQuestionWasAnswered(true)); // Отмечаем, был ли дан ответ на вопрос
            if (selectedAnswer === correctAnswer) {
                dispatch(setCorrectQuestions()); // Делаем +1 к правильным ответам
                dispatch(setAnswersToQuestions()); // Делаем +1 к отвеченным вопросам
                setSelectedAnswer(selectedAnswer); // Выделяем вопрос, если верный то водсвечиваем зеленоватым
            } else {
                console.log('Не верно')
            }
        }
    }

    return (
        <Wrapper>
            <QuestionTitle>
                {currentQuestionState.question}
            </QuestionTitle>
            <BlockWithAnswers>
                {answersText}
            </BlockWithAnswers>
        </Wrapper>
    );
};

export default React.memo(QuestionBody);