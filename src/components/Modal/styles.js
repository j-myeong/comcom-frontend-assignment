import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  width: 95%;
  height: 100%;
  max-width: 280px;
  max-height: 240px;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
  
  > p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    font-family: Montserrat !important;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 44px;
  gap: 12px;
  > button {
    font-family: Montserrat !important;
    all: unset;
    width: 100%;
    max-width: 110px;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    &.cancel {
      background: #ECECF3;
      color: #828282;
    }
    &.clear {
      background: #FE7474;
      color: #ffffff;
    }
  }
`;
