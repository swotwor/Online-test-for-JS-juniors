import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.div`
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const BlockWithAnswers = styled.div`
  
`;

export const AnswerBlock = styled.div`
  padding: 5px 10px;
  //background-color: #d3d3d3ff;
  text-align: center;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${props => props.correctAnswer};
  
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// export const Wrapper = styled.div`
//
// `;

// export const Wrapper = styled.div`
//
// `;

// export const Wrapper = styled.div`
//
// `;