import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Chat |</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme ">Integrated Llama 2</button>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="OPEN" borderRadius="10px" width="full" url=""/>
        </div>

    </div>
  );
};

export default Chat;