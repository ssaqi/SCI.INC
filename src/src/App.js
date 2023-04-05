import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from './Components/Nav/Nav';
import Sign from './Components/Sign/Sign.jsx';
import {Route , Routes} from 'react-router-dom';
import ResentImg from './Components/Resend/ResentImg';
import LoginImg from './Components/Login/LoginImg';

function App() {
  return (
     <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Sign/>}/>
      <Route path='/resent' element={<ResentImg/>}/>
      <Route path='/login' element={<LoginImg/>}/>
     </Routes>
   
     </>
  );
}

export default App;
