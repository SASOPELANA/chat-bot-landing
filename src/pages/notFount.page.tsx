import Error404 from '../components/pages/NotFount';
import PageHead from '../components/ui/PageHead';
import IconError from '../assets/icons/erro404-icon.png';

const notFount = () => {
  return (
    <div>
      <PageHead title="Error 404" icon={IconError} />
      <Error404 />
    </div>
  );
};

export default notFount;
