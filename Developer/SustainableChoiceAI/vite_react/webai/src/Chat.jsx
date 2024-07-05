import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const apiKey = 'YOUR_OPENAI_API_KEY';

  const handleSendMessage = async () => {
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: input,
        max_tokens: 150
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      const aiMessage = { text: response.data.choices[0].text.trim(), sender: 'ai' };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const aiError = { text: 'Sorry, there was an error. Please try again later.', sender: 'ai' };
      setMessages([...messages, userMessage, aiError]);
    }

    setInput('');
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
