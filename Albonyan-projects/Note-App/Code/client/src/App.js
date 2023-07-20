import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import AddTask from './pages/AddTask';

import ProtectedRoute from '../src/pages/ProtectedRoute'
import UpdateUser from './components/UpdateUser';

function App() {

 
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
           <AddTask />

          </ProtectedRoute>
        }>
        </Route>

        <Route path='/updateuser' element={
          <ProtectedRoute>
            
            <UpdateUser />
          </ProtectedRoute>
        }></Route>
        <Route path="/register" element={<Login />} />

      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
