import React from 'react';
import Button from "../../../../customeComponents/button";
import {
    Link,
    Text,
    Title,
    Wrapper,
    WarningText,
} from "./styledComponents";

const WelcomePage = props => {
    console.log(props);

    return (
        <Wrapper>
            <Title>Приветствую</Title>
            <Text>Этот проект призван помочь Junior JS Developer-ам проверить свои знания.</Text>
            <Text>Тут будет 70 вопросов по JavaScript для подготовки к собеседованию взятых на
                <Link onClick={() => window.open('https://habr.com/ru/post/486820')}>
                    https://habr.com/ru/post/486820.
                </Link>
            </Text>
            <Button onClick={() => ''}>Начать</Button>
            <WarningText>
                Предупреждение! В данный момент, процесс не сохраняется. Если обновите страницу, тест начнется сначала.
            </WarningText>
        </Wrapper>
    );
};

export default React.memo(WelcomePage);