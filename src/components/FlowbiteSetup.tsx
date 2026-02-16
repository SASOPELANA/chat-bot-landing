import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

const FlowbiteSetup = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return null;
};

export default FlowbiteSetup;
