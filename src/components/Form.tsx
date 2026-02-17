const Form = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/sopekof@gmail.com"
        method="POST"
        className="space-y-4 w-full"
      >
        <div>
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingrese su nombre completo"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="empresa@example.com"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-600 font-semibold mb-1">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Ej: 3878xxxxxx (10 dígitos)"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                'El teléfono debe tener exactamente 10 números.',
              )
            }
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-1">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Escribe tu mensaje aquí..."
            rows={4}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none resize-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="text-center pt-2">
          <button
            type="submit"
            className="w-full py-4 px-8 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
          >
            Enviar Mensaje
          </button>
        </div>

        {/* Configuración de FormSubmit al final como en el ejemplo */}
        <input type="hidden" name="_next" value="http://localhost:5173" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Form;
