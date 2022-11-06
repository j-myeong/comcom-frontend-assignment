import styled from 'styled-components';

export const MessageWrapper = styled.div`
  margin: ${(props) => (props.showThumbnail ? 0 : '0 0 0 30px')};
  display: flex;
  align-items: center;
  padding: 8px 12px;
  box-sizing: border-box;
  color: ${(props) => (props.send ? '#FFFFFF' : '#333333')};
  min-height: 40px;
  max-width: 270px;
  background: ${(props) => (props.send ? '#A56BEE' : '#FFFFFF')};
  border-radius: ${(props) => (props.send ? '10px 10px 0px 10px' : '0px 10px 10px 10px')};
  align-self: ${(props) => (props.send ? 'end' : 'start')};
  word-break: break-word;
  flex-shrink: 0;
  line-height: 24px;
`;

export const MessageContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ThumbnailPhoto = styled.img`
  width: 20px;
  object-fit: contain;
  pointer-events: none;
  align-self: start;
`;
