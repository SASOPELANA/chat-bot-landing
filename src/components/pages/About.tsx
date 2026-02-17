import { RiCustomerService2Line } from 'react-icons/ri';
import { IoLanguageSharp } from 'react-icons/io5';
import { CgChanel } from 'react-icons/cg';
import { MdLeaderboard } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';

const About = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="mb-34 ">
        <h1 className="text-4xl font-semibold text-center mx-auto mt-32">
          Por qué elegir Chat Bot IA
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          Potencia tu negocio con atención automatizada inteligente, disponible 24/7 para tus
          clientes.
        </p>
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
          <div className="s -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <RiCustomerService2Line />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Atención 24/7</h3>
              <p className="text-sm text-slate-500">
                Tus clientes nunca esperarán. Respuestas instantáneas en cualquier momento del día.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <IoLanguageSharp />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Multilenguaje</h3>
              <p className="text-sm text-slate-500">
                Capacidad para entender y responder en múltiples idiomas de forma fluida y natural.
              </p>
            </div>
          </div>
          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <CgChanel />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Fácil Integración</h3>
              <p className="text-sm text-slate-500">
                Conecta el chatbot con tus canales favoritos: Web, WhatsApp, Instagram y más.
              </p>
            </div>
          </div>
          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <MdLeaderboard />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Captación de Leads</h3>
              <p className="text-sm text-slate-500">
                Califica prospectos automáticamente y convierte visitantes en clientes potenciales.
              </p>
            </div>
          </div>
          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <PiStudentBold />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Adaptación</h3>
              <p className="text-sm text-slate-500">
                Adaptación a tus estudios y análisis para la universidad u otros ciclos educativos.
              </p>
            </div>
          </div>
          <div>
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <IoAnalyticsSharp />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Analíticas Avanzadas</h3>
              <p className="text-sm text-slate-500">
                Mide el rendimiento y descubre qué es lo que más preocupa a tus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
