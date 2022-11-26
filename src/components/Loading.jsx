import { Spinner } from 'flowbite-react';

const Loading = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return <Spinner style={style} aria-label="loading" size="xl" />;
};

export default Loading;
