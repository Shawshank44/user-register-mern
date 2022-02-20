import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/Signup';
import About from './components/About';
function App() {
    const user = localStorage.getItem("token")

  return (
    <>
      <Navbar auth={user}/>
      <Routes>
        {user && <Route path='/' exact element={<Home/>}/>}
        {user && <Route path='/about' exact element={<About/>}/>}
        {user && <Route path='/login' element={<Navigate replace to="/"/>}/>}
        {user && <Route path='/signup' element={<Navigate replace to="/"/>}/>}
        {user && <Route path='*' element={<Navigate replace to="/"/>}/>}
        <Route path='login' exact element={<Login/>}/>
        <Route path='signup' exact element={<Signup/>}/>
        <Route path='/' element={<Navigate replace to="/login"/>}/>
        <Route path='*' element={<Navigate replace to="/login"/>}/>
      </Routes>
    </>
  );
}

export default App;
