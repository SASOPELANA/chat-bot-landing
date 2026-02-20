import { DeepChat } from 'deep-chat-react';
import api from '../../api/api';
import { useRef, type ElementRef } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { RiRobot2Line } from 'react-icons/ri';
import '../../style/deep-chat.css';

const Home = () => {
  const chatRef = useRef<ElementRef<typeof DeepChat>>(null);

  const clearChat = () => {
    chatRef.current?.clearMessages();
  };

  return (
    <section className="flex flex-col gap-6 items-center justify-center min-h-[90vh] lg:h-screen w-full bg-gray-200 px-4 mt-8 md:px-24 md:mt-10">
      <DeepChat
        ref={chatRef}
        className="chat-container shadow-2xl"
        // Activa el almacenamiento en el navegador y guarda el historial de la conversacion
        // Maximo 1000 mensajes de almacenamiento
        browserStorage={{ key: 'chat-bot', inputText: true, maxMessages: 1000 }}
        textInput={{ placeholder: { text: 'Ingrese su mensaje...' } }}
        connect={{
          handler: async (body, signals) => {
            try {
              const userMessage: string = body.messages[0].text;

              const response = await api.post('', {
                message: userMessage,
              });

              const resChat: string = response.data.message;

              //console.log(resChat); //> debug

              signals.onResponse({ text: resChat });
            } catch (error) {
              console.error('Error:', error);
              signals.onResponse({ text: 'Error conectando con el servidor.' });
            }
          },
        }}
      >
        <div
          style={{
            width: '200px',
            backgroundColor: '#f3f3f3',
            borderRadius: '10px',
            padding: '12px',
            paddingBottom: '15px',
            display: 'none',
          }}
        >
          <div>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '8px',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <b>Bienvenido al Chat Bot</b>
              <RiRobot2Line size={24} />
            </div>
            <div style={{ fontSize: '15px', lineHeight: '20px', textAlign: 'center' }}>
              Soy un asistente virtual que puede ayudarte con tus consultas.
            </div>
          </div>
        </div>
      </DeepChat>
      <button
        onClick={clearChat}
        className="flex items-center gap-2 mb-4 bg-gray-400 text-gray-900 px-8 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
      >
        <AiOutlineClear className="flex text-gray-900 size-6" /> Limpiar chat
      </button>
    </section>
  );
};

export default Home;

// deep-chat-react  --> metodos y propiedades
// introMessage='{"text": "Sirve para mostrar un mensaje de bienvenida al iniciar el chat"}'
// textInput={{ placeholder: { text: 'Ingrese su mensaje...' } }} --> placeholder del input
// connect --> metodo para conectar con el servidor
// browserStorage --> metodo para guardar el historial de la conversacion
// signals --> metodo para enviar la respuesta al servidor
// clear
