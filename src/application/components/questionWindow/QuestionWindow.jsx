import React from 'react';
import Header from "./components/header";
import { questions } from "../../../helper/auestions";


const QuestionWindow = props => {
    const {} = props;
    console.log('dfsfsadgf')

    return (
        <div>
            <Header questions={questions}/>
        </div>
    );
}

export default React.memo(QuestionWindow);