import React from 'react';
import Button from "../../../../customeComponents/button";
import QuestionBody from "./components/questionBody";
import QuestionHeader from "./components/questionHeader";
import './QuestionPageStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {setQuestion, setQuestionWasAnswered, setStep} from "../../../../../store/reducer";

const QuestionPage = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.state);

    function handleClick() {
        if (state.questionWasAnswered) {
            dispatch(setQuestion());
            dispatch(setQuestionWasAnswered(false));
        }
    }

    return (
        <div className={'wrapper'}>
            <QuestionHeader />
            <QuestionBody />
            <Button onClick={() => handleClick()}>Продолжить</Button>
        </div>
    );
}

export default React.memo(QuestionPage);