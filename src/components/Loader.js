import React from 'react';
import Spinner from '../styles/LoaderStyles';

const Loader = () => {
  return (
    <Spinner className='mb-6'>
      <span></span>
    </Spinner>
  )
}

export default Loader;