
import './App.css';
import Header from './comnponent /Header';
import MovielList from './comnponent /MovielList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './comnponent /Booking';
import Counter from './comnponent /Counter';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path={"/"} element={<MovielList/>} />
      <Route path={"/Booking"} element={<Booking/>}/>
      <Route path='/counter' element={<Counter/>}/>
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
