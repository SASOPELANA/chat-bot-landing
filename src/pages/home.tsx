import PageHead from '../components/ui/PageHead';
import Icons1 from '../assets/icons/chatbot.png';
import Home from '../components/pages/Home';

const home = () => {
  return (
    <div>
      <PageHead title="Home Chat Bot" icon={Icons1} />
      <Home />
    </div>
  );
};

export default home;
