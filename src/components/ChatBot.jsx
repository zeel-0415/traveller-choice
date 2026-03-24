import React, { useState } from 'react';

const initMessages = [
  { role: 'bot', text: "Hello! I'm your AI travel guide. How can I help you plan your next adventure today?" },
  { role: 'user', text: 'Looking for a beach trip under $1000.' },
  { role: 'bot', text: "I found great deals for Bali and Thailand within that budget! Would you like to see the flight details?" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initMessages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { role: 'user', text: input }]);
    const q = input;
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, { role: 'bot', text: `Thanks for asking about "${q}"! Our travel experts will assist you shortly. You can also call us at +91 98250 81806.` }]);
    }, 800);
  };

  return (
    <div className="chat-bubble">
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#4caf50'}}></div>
              <div>
                <h4>Travel Assistant</h4>
                <p>Online now</p>
              </div>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((m,i) => <div key={i} className={`chat-msg ${m.role}`}>{m.text}</div>)}
          </div>
          <div className="chat-input-row">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask anything..." />
            <button onClick={send}>→</button>
          </div>
        </div>
      )}
      <button className="chat-btn" onClick={() => setOpen(o => !o)}>
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#fff"/>
        </svg>
      </button>
    </div>
  );
}
