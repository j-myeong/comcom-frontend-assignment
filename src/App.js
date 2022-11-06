import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import * as style from './styles';
import Message from './components/Message';
import Modal from './components/Modal';

function App() {
  // ChatContent Ref (for Scroll Down)
  const messageBoxRef = useRef();

  // States
  const [modalOn, setModalOn] = useState(false); // Modal Condition
  const [input, setInput] = useState(''); // Input Value
  const [messages, setMessages] = useState([]); // Messages (in Chat)
  const [loading, setLoading] = useState({ // Loading Condition
    send: false,
    receive: false,
    receiveCount: 0,
  });

  // Functions
  const handleSendMessage = async (e) => { // Axios를 통한 API 호출 (메시지 전송) 및 데이터 받기
    if (!input) return;
    setMessages((curr) => [...curr, { send: true, content: input }]);
    setInput('');
    // 메시지가 두 개 이상의 요청 시를 위해, receiveCount 를 통한 관리.
    setLoading((prev) => ({ ...prev, receive: true, receiveCount: prev.receiveCount + 1 }));
    await axios.post('https://main-chatbot-api-ainize-team.endpoint.ainize.ai/v1/bot/chat', {
      message: input,
    }).then((res) => {
      setMessages((curr) => [...curr, { send: false, content: res.data }]);
    }).catch((err) => {
      // 오류 발생 시,
      alert('Sorry, your message cannot send to server, right now.\n Try Again please.');
      console.log(err);
    });
    setLoading((prev) => ({ ...prev, receiveCount: prev.receiveCount - 1 }));
  };

  const handleInput = (e) => { // Input Value Update
    setInput((prev) => e.target.value);
  };

  const scrollToBottom = () => { // Scroll To Bottom (in Chat)
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  // useEffect
  useEffect(() => { // Scroll To Bottom (when messages / loading changes)
    scrollToBottom();
  }, [messages, loading.send, loading.receive]);

  // (무분별한 Re-render 방지를 위하여 useLayoutEffect 사용)
  useLayoutEffect(() => { // receiveCount가 비동기적인 업데이트로 위에 함수에서 감지하지 못했을 경우를 대비하여 작성
    if (loading.receiveCount === 0) setLoading((prev) => ({ ...prev, receive: false }));
  }, [loading.receiveCount]);

  return (
    <style.AppContainer>
      <Header />
      <style.ContentContainer>
        <style.ChatContainer>
          <style.ChatContent ref={messageBoxRef}>
            { messages.map((item, idx) => { // Message Render
              let showThumbnail = true;
              if (!(messages[idx - 1]?.send)) showThumbnail = false;
              return (
                <Message
                  key={uuidv4()}
                  send={item.send}
                  showThumbnail={showThumbnail}
                >
                  {item.content}
                </Message>
              );
            })}
            {loading.receive && ( // Loading Render (receive)
              <Message showThumbnail={messages[messages.length - 1].send}>
                <img src="/images/loading_receive.gif" alt="loading..." width="30px" />
              </Message>
            )}
            {loading.send && ( // Loading Render (send)
              <Message send>
                <img src="/images/loading_send.gif" alt="loading..." width="30px" />
              </Message>
            )}
          </style.ChatContent>
          <style.ChatInput>
            <input
              type="text"
              autoFocus
              onChange={handleInput}
              value={input}
              placeholder="Input your message..."
              onFocus={() => { setLoading({ ...loading, send: true }); }}
              onBlur={() => { setLoading({ ...loading, send: false }); }}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
            />
            <button type="button" onClick={handleSendMessage}>
              <img src="/images/send.svg" alt="send" />
            </button>
          </style.ChatInput>
        </style.ChatContainer>
        <style.ClearWrapper onClick={() => { setModalOn(true); }}>
          <img src="/images/loader.svg" alt="clear conversation" />
          Clear Conversation
        </style.ClearWrapper>
      </style.ContentContainer>
      {modalOn // Modal Render
        && (
        <Modal
          cancelClick={() => { setModalOn(false); }}
          clearClick={() => { setMessages([]); setModalOn(false); }}
        />
        )}
    </style.AppContainer>
  );
}

export default App;
