import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav/Nav';
import Sign from './Components/Sign/Sign.jsx';
import {Route , Routes} from 'react-router-dom';
import ResentImg from './Components/Resend/ResentImg';


function App() {
  return (
     <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Sign/>}/>
      <Route path='/resent' element={<ResentImg/>}/>
     </Routes>
   
     </>
  );
}

export default App;
