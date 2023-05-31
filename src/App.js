import logo from './logo.svg';
import './App.css';
import Header from './comnponent /Header';
import MovielList from './comnponent /MovielList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './comnponent /Booking';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path={"/"} element={<MovielList/>} />
      <Route path={"/Booking"} element={<Booking/>}/>
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
