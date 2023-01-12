import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { questions } from "../../../../../../../store/questions";
import {
    AnswerBlock,
    BlockWithAnswers,
    QuestionTitle,
    Wrapper,
} from "./styledComponents";
import { setQuestion } from "../../../../../../../store/reducer";

const QuestionBody = () => {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const currentQuestionState = questions[state.currentQuestion - 1];
    const answersText = currentQuestionState.answers.map((answer, index) => {
        return (
            <AnswerBlock key={index} onClick={() => handleClickOnAnswer(index, currentQuestionState.correctAnswer)}>
                {answer}
            </AnswerBlock>)
    })

    console.log('state', state);
    console.log('questions', questions);
    console.log('currentQuestionState', currentQuestionState);

    function handleClickOnAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            console.log('GOOD');
            dispatch(setQuestion())
        } else {

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