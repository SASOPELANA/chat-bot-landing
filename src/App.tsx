import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import NotFound from './pages/notFount';
import FlowbiteSetup from './components/FlowbiteSetup'; // Importar FlowbiteSetup

function App() {
  return (
    <BrowserRouter>
      <FlowbiteSetup /> {/* Colocar FlowbiteSetup dentro del BrowserRouter */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Route>

        {/* Ruta para manejar páginas no encontradas (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* 
        FlowbiteSetup debe estar dentro del BrowserRouter para tener acceso a useLocation.
        Se coloca aquí para que escuche todos los cambios de ruta y reinicialice los
        componentes de Flowbite (dropdowns, modales, tooltips, etc.) cada vez que 
        navegamos a una página diferente. Sin esto, los componentes interactivos de 
        Flowbite dejarían de funcionar al cambiar de ruta.
   */
}
