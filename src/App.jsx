import React, { useState } from 'react';
import styles from './App.module.css';
import ChatEntry from './components/ChatEntry';
import ChatHistory from './components/ChatHistory';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const addMessage = (message) => {
    setChatHistory([...chatHistory, message]);
  }

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        Chat
      </header>
      <ChatHistory messages={chatHistory} />
      <ChatEntry addMessage={addMessage} />
    </div>
  );
}

export default App;
