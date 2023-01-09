import React from 'react';
import './HeaderStyle.scss';

const Header = props => {
    const {
        id,
        answers,
        question,
        correctAnswer,
    } = props.questions;

    return (
        <header className={'header'}>
            <progress className={'progress'}/>
            <div className="questionNumber">
                {id}
                /
                {props.questions.length}
            </div>
        </header>
    );
};

export default React.memo(Header);