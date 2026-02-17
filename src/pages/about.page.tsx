import PageHead from '../components/ui/PageHead';
import About from '../components/pages/About';
import IconAbout from '../assets/icons/about-icon.png';

const AboutPage = () => {
  return (
    <div>
      <PageHead title="About Page" icon={IconAbout} />
      <About />
    </div>
  );
};

export default AboutPage;
