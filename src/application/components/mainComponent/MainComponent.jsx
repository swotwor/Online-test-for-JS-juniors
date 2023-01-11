import React from 'react';
import EndPage from "./components/endPage";
import WelcomePage from "./components/welcomePage";
import QuestionPage from "./components/questionPage";
import { useSelector } from "react-redux";
import './MainComponentsStyle.css'

const MainComponent = () => {
    const state = useSelector(state => state);
    console.log(state);

    const step = 1;

    return (
        <div className={'mainComponent_wrapper'}>
            {step === 1
                ? <WelcomePage />
                : null
            }
            {step === 2
                ? <QuestionPage />
                : null
            }
            {step === 3
                ? <EndPage />
                : null
            }
        </div>
    );
};

export default React.memo(MainComponent);