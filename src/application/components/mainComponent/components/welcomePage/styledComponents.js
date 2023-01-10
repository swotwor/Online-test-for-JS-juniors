import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Link = styled.div`
  color: #3030b0;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Warning = styled.div`
  font-size: 15px;
  color: #ff9966;
  text-align: center;
  margin-top: 15px;
`;