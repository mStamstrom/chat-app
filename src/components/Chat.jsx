import React, { useState } from 'react';
import styles from './Chat.module.css';
import ChatEntry from './ChatEntry';
import ChatHistory from './ChatHistory';

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
