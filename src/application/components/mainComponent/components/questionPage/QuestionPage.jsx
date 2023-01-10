import React from 'react';
import Button from "./components/button";
import QuestionBody from "./components/questionBody";
import QuestionHeader from "./components/questionHeader";
import { questions } from "../../../../../helper/auestions";
import './QuestionPageStyle.css';

const QuestionPage = () => {
    const [questionState, setQuestionState] = React.useState({
        currentQuestion: 1,
        totalQuestions: questions.length,
        correctQuestion: 0,
    });

    return (
        <div className={'wrapper'}>
            <QuestionHeader questions={questions}/>
            <QuestionBody questions={questions}/>
            <Button>Продолжить</Button>
        </div>
    );
}

export default React.memo(QuestionPage);