import React, { useState } from 'react';
import styles from './ChatEntry.module.css';

const ChatEntry = ({addMessage}) => {
  const [ message, setMessage ] = useState('');

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const onClick = () => {
    addMessage(message);
  }

  return (
    <div className={styles.container}>
      <textarea rows="5" className={styles["message-area"]} value={message} onChange={onChangeMessage}/>
      <button onClick={onClick} className={styles["send-button"]}>Send message</button>
    </div>
  );
}

export default ChatEntry;
