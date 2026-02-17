import PageHead from '../components/ui/PageHead';
import Contact from '../components/pages/Contact';
import IconsContact from '../assets/icons/suport-icon.png';

const ContactPage = () => {
  return (
    <div>
      <PageHead title="Conatacto Page" icon={IconsContact} />
      <Contact />
    </div>
  );
};

export default ContactPage;
