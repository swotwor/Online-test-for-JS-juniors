import React from 'react';
import './QuestionHeaderStyle.css';

const QuestionHeader = props => {

    return (
        <header className={'header'}>
            <progress className={'progress'} value="1" max={30}/>
            <div className="questionNumber">

                /

            </div>
        </header>
    );
};

export default React.memo(QuestionHeader);