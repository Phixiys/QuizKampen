import React from 'react';
import Spinner from '../styles/LoaderStyles';

const Loader = () => {
  return (
    <Spinner className='mb-4'>
      <span></span>
    </Spinner>
  )
}

export default Loader;