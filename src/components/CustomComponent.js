// src/components/CustomComponent.js
import React, { useEffect } from 'react';

const CustomComponent = () => {
  useEffect(() => {
    // Your custom JavaScript logic here
    console.log('Custom script loaded');
  }, []);

  return (
    <div>
      <h2>Custom Component</h2>
    </div>
  );
};

export default CustomComponent;
