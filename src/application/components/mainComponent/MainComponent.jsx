import React from 'react';
import EndPage from "./components/endPage";
import WelcomePage from "./components/welcomePage";
import QuestionPage from "./components/questionPage";
import { useSelector } from "react-redux";
import './MainComponentsStyle.css'

const MainComponent = () => {
    const state = useSelector(state => state.state);

    return (
        <div className={'mainComponent_wrapper'}>
            { state.step === 1 && <WelcomePage /> }
            { state.step === 2 && <QuestionPage /> }
            { state.step === 3 && <EndPage /> }
        </div>
    );
};

export default MainComponent;