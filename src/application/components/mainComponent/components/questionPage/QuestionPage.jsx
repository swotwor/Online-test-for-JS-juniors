import React from 'react';
import Button from "../../../../customeComponents/button";
import QuestionBody from "./components/questionBody";
import QuestionHeader from "./components/questionHeader";
import './QuestionPageStyle.css';
import { useDispatch } from "react-redux";
import { setStep } from "../../../../../store/reducer";

const QuestionPage = () => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setStep())
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