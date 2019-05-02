import React from 'react';
import styles from './ChatHistory.module.css';

const ChatHistory = ({ messages }) => {
  
  return (
    <div className={styles.container}>
      {messages.map(message => (
        <div className={styles.message}>
          {message}
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
