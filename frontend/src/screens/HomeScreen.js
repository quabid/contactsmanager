import React, { useEffect } from 'react';

const HomeScreen = () => {
  useEffect(() => {
    document.title = 'Home';
  });

  return <h1 className='h2'>Home</h1>;
};

export default HomeScreen;
