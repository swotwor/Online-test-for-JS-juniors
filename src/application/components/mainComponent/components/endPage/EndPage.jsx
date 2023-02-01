import React from 'react';
import {
    Body,
    Title,
    Wrapper,
    BodyTitle, BodyText, ContentWrapper,
} from "./styledComponents";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../customeComponents/button";
import { RESET } from "../../../../../store/reducer";

const EndPage = () => {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();

    const handleClickOnButton = () => {
        dispatch(RESET());
    };

    return (
        <Wrapper>
            <Body>
                <Title>
                    Поздравляю!
                </Title>
                <ContentWrapper>
                    <BodyTitle>
                        Итак, вот твои результаты:
                    </BodyTitle>
                    <BodyText>
                        - вопросов: {state.totalQuestions}
                    </BodyText>
                    <BodyText>
                        - правильных ответов: {state.correctQuestions}
                    </BodyText>
                </ContentWrapper>
            </Body>
            <Button onClick={() => handleClickOnButton()}>
                Пройти ещё раз
            </Button>
        </Wrapper>
    );
};

export default EndPage;