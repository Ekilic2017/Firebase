import './App.css';
import { Toaster } from 'react-hot-toast';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/register';
import Login from './pages/Login';
function App() {
  

  return (
    <>
      <Toaster position='top-right'/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
      </>
  );
}

export default App;
