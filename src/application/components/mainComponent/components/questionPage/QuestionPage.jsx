import React from 'react';
import Button from "../../../../customeComponents/button";
import QuestionBody from "./components/questionBody";
import QuestionHeader from "./components/questionHeader";
import './QuestionPageStyle.css';
import { useDispatch, useSelector } from "react-redux";
import {
    setStep,
    setQuestion,
    setCurrentAnswer,
    setQuestionWasAnswered,
} from "../../../../../store/reducer";

const QuestionPage = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.state);

    function handleClickOnButton() {
        if (state.totalQuestions === state.currentQuestion) {
            dispatch(setStep());
        } else {
            if (state.questionWasAnswered) {
                dispatch(setQuestion());
                dispatch(setQuestionWasAnswered(false));
                dispatch(setCurrentAnswer(3));
            }
        }
    };

    return (
        <div className={'wrapper'}>
            <QuestionHeader />
            <QuestionBody />
            <Button onClick={() => handleClickOnButton()}>Продолжить</Button>
        </div>
    );
};

export default React.memo(QuestionPage);