import { services } from '../../model/service.model';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-gray-700 text-white">
            AI Powered
          </p>
          <h2 className="mb-6 font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Servicios de Chatbot con Inteligencia Artificial
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Soluciones conversacionales que optimizan atención, ventas y experiencia de usuario con
            IA.
          </p>
        </div>

        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          {services.map((srv) => (
            <div key={srv.title} className="flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  {srv.Icon}
                </div>
              </div>

              <div>
                <h6 className="mb-2 font-semibold leading-5">{srv.title}</h6>
                <p className="mb-3 text-sm text-gray-900">{srv.description}</p>

                {/* Lista de características */}
                <ul className="mb-4 -ml-1 space-y-2">
                  {srv.features.map((feat) => (
                    <li key={feat.label} className="flex items-start">
                      <span className="mr-1 mt-px">{feat.icon}</span>
                      {feat.label}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-semibold text-gray-800 hover:text-gray-500 transition-colors duration-200"
                >
                  Saber más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
