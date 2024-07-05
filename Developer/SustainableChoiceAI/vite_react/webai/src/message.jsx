import React from 'react';

const Message = ({ message }) => {
  return (
    <div className={message.sender === 'user' ? 'text-right' : 'text-left'}>
      <div className={message.sender === 'user' ? 'alert alert-primary' : 'alert alert-secondary'}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;
