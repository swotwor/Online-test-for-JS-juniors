import React from 'react';
import WelcomePage from "./components/welcomePage";
import QuestionPage from "./components/questionPage";
import EndPage from "./components/endPage";
import './MainComponentsStyle.css'
import { questions } from "../../../helper/auestions";

const MainComponent = () => {
    const [step, setStep] = React.useState(1);
    const [questionState, setQuestionState] = React.useState({
        currentQuestion: 1,
        totalQuestions: questions.length,
        correctQuestion: 0,
    });

    return (
        <div className={'mainComponent_wrapper'}>
            {step === 1
                ? <WelcomePage setStep={setStep}/>
                : null
            };
            {step === 2
                ? <QuestionPage
                    setStep={setStep}
                    setQuestionState={setQuestionState}
                   />
                : null
            };
            {step === 3
                ? <EndPage setStep={setStep}/>
                : null
            };
        </div>
    );
};

export default React.memo(MainComponent);