import PageHead from '../components/ui/PageHead';
import Service from '../components/pages/Service';
import IconsService from '../assets/icons/service-icon.png';

const ServicePage = () => {
  return (
    <div>
      <PageHead title="Service Page" icon={IconsService} />
      <Service />
    </div>
  );
};

export default ServicePage;
