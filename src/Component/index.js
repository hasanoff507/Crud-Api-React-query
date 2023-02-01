import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './Listing/EmpListing';
import EmpCreate from './Create/EmpCreate';
import EmpDetail from './Detail/EmpDetail';
import EmpEdit from './Edit/EmpEdit';

function Component() {
  return (
    <div className='app'>
      <h1>React JS crud Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default Component;
