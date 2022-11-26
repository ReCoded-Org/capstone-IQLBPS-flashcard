import React from 'react';
import { Button, Spinner } from 'flowbite-react';

const LoadingButton = ({ isLoading }) => {
  return (
    <Button>
      <div className="mr-3">{isLoading && <Spinner size="sm" light />}</div>
      Loading ...
    </Button>
  );
};

export default LoadingButton;
