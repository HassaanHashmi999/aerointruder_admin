import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ bgColor, color, size, text, borderRadius, url }) => {
  const { setIsClicked, initialState } = useStateContext();

  // Function to handle button click
  const handleClick = () => {
    if (url) {
      // Open the specified URL in a new tab
      window.open(url, '_blank');
    } else {
      setIsClicked(initialState);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
