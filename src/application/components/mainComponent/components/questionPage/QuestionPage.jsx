import React from 'react';
import Button from "../../../../customeComponents/button";
import QuestionBody from "./components/questionBody";
import QuestionHeader from "./components/questionHeader";
import './QuestionPageStyle.css';

const QuestionPage = () => {

    return (
        <div className={'wrapper'}>
            <QuestionHeader />
            <QuestionBody />
            <Button>Продолжить</Button>
        </div>
    );
}

export default React.memo(QuestionPage);