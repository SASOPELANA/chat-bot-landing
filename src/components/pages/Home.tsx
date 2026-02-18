import { useState, useRef, useEffect } from 'react';
import '../../style/home.css';
import { PiRobotBold } from 'react-icons/pi';
import { GiPlayButton } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import api from '../../api/api';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

const Home = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chat_history');
    return savedMessages
      ? (JSON.parse(savedMessages) as Message[])
      : [{ text: 'Hola 👋\n¿En qué puedo ayudarte hoy?', sender: 'bot' }];
  });
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
    scrollToBottom();
  }, [messages, isTyping]);

  const clearChat = () => {
    const initialMessage: Message[] = [
      { text: 'Hola 👋\n¿En qué puedo ayudarte hoy?', sender: 'bot' },
    ];
    setMessages(initialMessage);
    localStorage.removeItem('chat_history');
  };

  const handleSend = async () => {
    if (!userMessage.trim() || isTyping) return;

    const messageToSend = userMessage.trim();
    // Añadir mensaje del usuario
    setMessages((prev) => [...prev, { text: messageToSend, sender: 'user' }]);
    setUserMessage('');
    setIsTyping(true);

    try {
      const response = await api.post('', { message: messageToSend });
      //console.log('Respuesta completa de la API:', response.data);
      const botResponse = response.data.message || 'Sin respuesta';

      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: 'Lo siento, hubo un error al conectar con la IA. Inténtalo de nuevo.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="chatbot bg-gray-200 min-h-screen flex items-center justify-center p-0 sm:p-4">
      <div className="flex items-center justify-center w-full">
        <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-6xl border flex flex-col sm:rounded-xl bg-white relative shadow-lg overflow-hidden">
          <header className="w-full bg-primary-500 flex justify-between px-4 py-3 rounded-t-lg items-center shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <PiRobotBold className="size-7" />
              Chatbot
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-gray-800 cursor-pointer hover:bg-white/20 p-1.5 px-3 rounded-full transition-colors flex items-center gap-2"
                title="Limpiar chat"
              >
                <RiDeleteBin6Line className="size-5" />
              </button>
              <span className="text-white cursor-pointer hover:bg-white/20 p-1 rounded-full transition-colors">
                <IoClose className="size-7" />
              </span>
            </div>
          </header>

          <ul className="chatbox flex flex-col gap-4 p-4">
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`chat ${msg.sender === 'bot' ? 'incoming' : 'outgoing'} flex items-end ${
                  msg.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <span
                  className={`rounded ${
                    msg.sender === 'bot' ? 'bg-primary-500' : 'bg-gray-400'
                  } w-8 aspect-square p-1.5 h-8 flex items-center justify-center shrink-0`}
                >
                  {msg.sender === 'bot' ? (
                    <PiRobotBold className="text-black size-8" />
                  ) : (
                    <FaUser className="text-white text-xs" />
                  )}
                </span>
                <p>
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </li>
            ))}
            <div ref={chatEndRef} />
          </ul>

          <div className="chat-input flex items-center p-3 border-t bg-gray-50">
            <textarea
              id="chat"
              rows={1}
              spellCheck="false"
              required
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-white border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 hover:border-gray-400 transition-colors resize-none"
              placeholder="Ingresa tu mensaje..."
            ></textarea>
            <span
              id="send-btn"
              onClick={handleSend}
              className="ml-2 flex justify-center items-center h-10 aspect-square text-[#72ca1f] cursor-pointer hover:scale-110 transition-transform"
            >
              <GiPlayButton className="size-8" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
