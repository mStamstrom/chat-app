import React, { useState } from 'react';
import styles from './Chat.module.css';
import ChatHistory from './ChatHistory';

const ChatEntry = ({addMessage}) => {
  const [ message, setMessage ] = useState('');

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const onClick = () => {
    setMessage('');
    addMessage(message);
  }

  return (
    <div className={styles["chat-entry"]}>
      <textarea rows="5" className={styles["message-area"]} value={message} onChange={onChangeMessage}/>
      <button onClick={onClick} className={styles["send-button"]}>Send message</button>
    </div>
  );
}

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);

  const addMessage = (message) => {
    setChatHistory([...chatHistory, message]);
  }

  return (
    <div className={styles.Chat}>
      <header className={styles["Chat-header"]}>
        Chat
      </header>
      <ChatHistory messages={chatHistory} />
      <ChatEntry addMessage={addMessage} />
    </div>
  );
}

export default Chat;
