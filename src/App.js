import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Home/Home/Inventiry/Inventory';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import InventoryDetail from './Pages/Home/Home/InventoryDetail/InventoryDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';
import AddNewItem from './Pages/Home/Home/AddNewItem/AddNewItem';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/add-new' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
