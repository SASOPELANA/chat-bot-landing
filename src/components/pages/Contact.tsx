import { FaWhatsapp } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Form from '../Form';

const Contact = () => {
  return (
    <section className="lg:flex lg:gap-5 py-40 lg:px-20 md:px-10 px-5 text-blue-950 bg-gray-200">
      <div className="lg:w-1/2 lg:pb-0 pb-10">
        <h2 className="text-[38px] font-bold mb-5">
          Contacto <span className="text-blue-800 ">+Info</span>
        </h2>
        <p className="pb-5 lg:pr-20">
          &quot; Queremos escucharte. Escribinos por correo o WhatsApp y te responderemos rápido.
          &quot;
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-normal">Oficina de Contacto</h4>

            <address className="flex items-start gap-1 pt-3">
              <IoLocationOutline className="text-red-600 text-2xl" />: Muy pronto tendremos nuestras
              oficinas en la ciudad de San Ramón de la Nueva Orán, Salta, Argentina.
            </address>
          </div>
          <div>
            <h4 className="text-lg font-medium">Email</h4>
            <p className="flex items-center gap-2  hover:underline">
              <MdOutlineEmail className="text-blue-500 text-xl" />
              <a href="mailto:sopekof@gmail.com">: sopekof@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium ">Contacto</h4>
            <a
              href="https://wa.me/5493878375394?text=Hola,%20quiero%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  hover:underline"
            >
              <FaWhatsapp className="text-green-500" />
              +54 3878******
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col text-blue-950 py-6 rounded-xl pt-16 lg:px-10  md:px-16 px-5 bg-slate-50 lg:pt-7">
        <h2 className="text-xl font-medium text-black mb-6">
          ¿Tiene preguntas? Contacte con nosotros.
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
