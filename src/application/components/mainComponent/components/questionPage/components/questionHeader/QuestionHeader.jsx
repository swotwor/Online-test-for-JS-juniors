import React from 'react';
import './QuestionHeaderStyle.css';

const QuestionHeader = props => {
    const {
        id,
        answers,
        question,
        correctAnswer,
    } = props.questions;

    console.log(props.questions);

    return (
        <header className={'header'}>
            <progress className={'progress'} value="1" max={props.questions.length}/>
            <div className="questionNumber">
                {id}
                /
                {props.questions.length}
            </div>
        </header>
    );
};

export default React.memo(QuestionHeader);