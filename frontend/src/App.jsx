import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis le Professeur Chatxistence, philosophe existentialiste et expert en réponses à côté de la plaque. Posez-moi n'importe quelle question !",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Ah ! Une erreur technique... C'est comme le paradoxe du menteur : cette phrase est-elle vraie ou fausse ? 🤔",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <div className="bot-avatar-large">🎭</div>
          <div className="header-text">
            <h1>Professeur Chatxistence</h1>
            <p>Philosophe existentialiste & expert en hors-sujet</p>
          </div>
        </div>

        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
            >
              {message.sender === 'bot' && (
                <div className="bot-avatar">🎭</div>
              )}
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot-message">
              <div className="bot-avatar">🎭</div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="input-container" onSubmit={sendMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Posez une question (qui recevra une réponse totalement à côté)..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !inputMessage.trim()}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
