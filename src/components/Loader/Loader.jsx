import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { SearchRing } from './Loader.styled';

const Loader = () => {
  return (
    <SearchRing>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </SearchRing>
  );
};

export default Loader;
