import React,{useEffect} from 'react'
import './App.css'
import{FiSettings} from 'react-icons/fi'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import{TooltipComponent} from '@syncfusion/ej2-react-popups'
import { Navbar,Footer,ThemeSettings,Sidebar} from './components'
import {Access,DataControl,Vulnerabilities,AdminPanel,TimeTable,Editor,RiskManagment,LineChart,AreaChart,BarChart,PieChart,ColorMapping,Pyramid,Stacked} from './pages'
import { useStateContext } from './contexts/ContextProvider'
const App = () => {
  const {activeMenu} = useStateContext();

  return (
    <div >
        <BrowserRouter>
      <div className='flex relative dark:bg-m'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content='Settings' position='Top'>
            <button type='button' className='text-3x1 p-3
            hover:drop-shadow-x1
            hover:bg-light-grey text-white' 
            style={{background:'blue', borderRadius:'50%'}}>
              <FiSettings size="1.5em"/>
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar/>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<AdminPanel/>} />
              <Route path='/Admin Panel' element={<AdminPanel/>} />
              {/* Pages */}
              <Route path='/Vulnerabilities' element={<Vulnerabilities/>} />
              <Route path='/Access' element={<Access/>} />
              <Route path='/Data Control' element={<DataControl/>} />

              {/* Apps for Security Control*/}
              <Route path='/Risk Managment' element={<RiskManagment/>} />
              <Route path='/Time Table' element={<TimeTable/>} />
              <Route path='/Editor' element={<Editor/>} />

              {/* Charts */}
                <Route path="/line" element={<LineChart/>} />
                <Route path="/area" element={<AreaChart/>} />
                <Route path="/bar" element={<BarChart/>} />
                <Route path="/pie" element={<PieChart/>} />
                <Route path="/color-mapping" element={<ColorMapping/>} />
                <Route path="/pyramid" element={<Pyramid/>} />
                <Route path="/stacked" element={<Stacked/>} />

            </Routes>
           </div>
           </div>
       </div>
       </BrowserRouter>
     </div>
     )
}

export default App