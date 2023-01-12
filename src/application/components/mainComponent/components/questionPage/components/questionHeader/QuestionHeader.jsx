import React from 'react';
import {useSelector} from "react-redux";
import {
    Questions,
    Wrapper,
} from "./styledComponents";

const QuestionHeader = () => {
    const state = useSelector(state => state);
    const {
        totalQuestions,
        currentQuestion,
    } = state.state;

    return (
        <Wrapper>
            <progress className={'progress'} value={currentQuestion} max={totalQuestions}/>
            <Questions className="questionNumber">
                {currentQuestion}
                /
                {totalQuestions}
            </Questions>
        </Wrapper>
    );
};

export default React.memo(QuestionHeader);