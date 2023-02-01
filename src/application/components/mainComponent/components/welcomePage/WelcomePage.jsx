import React from 'react';
import Button from "../../../../customeComponents/button";
import {
    Link,
    Text,
    Title,
    Wrapper,
    WarningText,
} from "./styledComponents";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../../store/reducer";

const WelcomePage = () => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setStep())
    }

    return (
        <Wrapper>
            <Title>Приветствую</Title>
            <Text>Сделал не большую викторину с ответами на вопросы. Удачи))</Text>
            <Button onClick={() => handleClick()}>Начать</Button>
            <WarningText>
                Предупреждение! В данный момент, процесс не сохраняется. Если обновите страницу, тест начнется сначала.
            </WarningText>
        </Wrapper>
    );
};

export default WelcomePage;