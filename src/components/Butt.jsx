import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Butt = ({bgColor,color,size,text,borderRadius}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
    type="button"
    onClick={() => setIsClicked(initialState)}
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={` text-${size} p-3 hover:drop-shadow-xl`}
  >
   {text}
  </button>
  )
}

export default Butt