import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 627px;
  display: flex;
  gap: 40px;
  justify-content: center;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    gap: 10px;
    max-height: none;
    align-items: center;
  }
`;
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  max-width: 600px;
  border-radius: 10px;
  background: #F4F4F7;
  padding: 20px 20px 15px 20px;
  box-sizing: border-box;
  gap: 15px
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export const ChatInput = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 13px 12px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ECECF3;
  border-radius: 10px;
  background: #ffffff;

  > input {
    all: unset;
    width: 100%;
  }

  > button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    outline: 1px solid #d3d3d3;
  }
`;

export const ClearWrapper = styled.div`
  width: 175px;
  height: 28px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Montserrat;
  cursor: pointer;
`;
