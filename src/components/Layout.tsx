// Para usar rutas anidadas en layout
// En vez de usar children, se usa Outlet para renderizar el contenido de las rutas hijas
// Esto es de la librería react-router-dom, que permite manejar rutas en aplicaciones React.
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
