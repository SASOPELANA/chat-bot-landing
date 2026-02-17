/*
 * Usamos useLocation para recargar las páginas y servicio de Flowbite.
 * Por motivos de que los componentes dinámicos necesitan reinicializarse.
 * Cada vez que cambia la ruta para que funcionen correctamente.
 */

import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { useLocation } from 'react-router-dom';

const FlowbiteSetup = () => {
  const location = useLocation();
  useEffect(() => {
    initFlowbite();
  }, [location.pathname]);

  return null;
};

export default FlowbiteSetup;
