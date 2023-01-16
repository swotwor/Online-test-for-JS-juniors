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
import {answerHighlighting, handleClickOnAnswer} from "../../../../../../../logic/logic";

const QuestionBody = () => {
    const state = useSelector(state => state.state);
    const {
        currentAnswer,
        currentQuestion,
        answersToQuestions,
    } = state;
    const dispatch = useDispatch();
    const currentQuestionState = questions[currentQuestion - 1];

    const answersText = currentQuestionState.answers.map((answer, answerNumber) => {
        return (
            <AnswerBlock
                key={answerNumber}
                correctAnswer={answerHighlighting(currentQuestionState.correctAnswer, answerNumber, currentAnswer)}
                onClick={() => handleClickOnAnswer(answerNumber, currentQuestionState.correctAnswer, answersToQuestions, currentQuestionState, dispatch)}>
                    { answer }
            </AnswerBlock>)
    });

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