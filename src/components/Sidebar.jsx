import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between items-center">

      <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <img
      src="/Aero.svg"
      alt="logo"
      className="w-1/4 h-1/4 object-contain"
      //style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(100) hue-rotate(600deg) grayscale(20) contrast(1)'}}
  />
            <span className='ml-3 mb-2'>AeroIntruder</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
              <button type='button'
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-2.5 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
            
      </div>
      <div className='mt-10'>
              {links.map((item) =>(
                <div key={item.title}>
                  <p className='text-red-400 m-3 mt-4 uppercase'>
                  {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                      {link.icon}
                      <span className='capitalize'>{link.name}</span>

                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>)}
    </div>
  )
}

export default Sidebar