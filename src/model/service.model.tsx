import { AiOutlineRobot, AiOutlineGlobal, AiOutlineBarChart } from 'react-icons/ai';
import { BiShield, BiSupport, BiPulse } from 'react-icons/bi';
import { FaWhatsapp, FaFacebookMessenger, FaLaptopCode } from 'react-icons/fa';
import { MdAnalytics, MdFeedback, MdDashboard } from 'react-icons/md';
import type { Service } from '../types/service.types';

export const services: Service[] = [
  {
    title: 'Desarrollo de Chatbot IA',
    description:
      'Creamos chatbots con IA que entienden a tus usuarios, automatizan respuestas y mejoran la experiencia.',
    Icon: <AiOutlineRobot className="w-8 h-8 text-green-500" />,
    features: [
      { label: 'Soporte 24/7', icon: <BiSupport className="w-5 h-5 text-black" /> },
      { label: 'Flujos personalizados', icon: <BiPulse className="w-5 h-5 text-cyan-500" /> },
      { label: 'Entrenamiento continuo', icon: <BiShield className="w-5 h-5 text-gray-600" /> },
    ],
  },
  {
    title: 'Integración Omnicanal',
    description:
      'Llevamos tu chatbot IA a WhatsApp, Messenger, Web y más para atención en todos los frentes.',
    Icon: <AiOutlineGlobal className="w-8 h-8 text-cyan-400" />,
    features: [
      { label: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5 text-green-400" /> },
      { label: 'Messenger', icon: <FaFacebookMessenger className="w-5 h-5 text-blue-500" /> },
      { label: 'Web Chat', icon: <FaLaptopCode className="w-5 h-5 text-black" /> },
    ],
  },
  {
    title: 'Optimización y Analytics',
    description: 'Métricas, reportes y mejoras constantes para que tu IA sea cada vez más smart.',
    Icon: <AiOutlineBarChart className="w-8 h-8 text-yellow-400" />,
    features: [
      {
        label: 'Dashboard en tiempo real',
        icon: <MdDashboard className="w-5 h-5 text-gray-500" />,
      },
      { label: 'Feedback loop', icon: <MdFeedback className="w-5 h-5 text-orange-300" /> },
      { label: 'Analítica avanzada', icon: <MdAnalytics className="w-5 h-5 text-gray-800" /> },
    ],
  },
];
