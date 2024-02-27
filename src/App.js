import './App.css';
import Body from './Components/Body';
import ConfirmBooking from './Components/ConfirmBooking';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from "./Components/Main"
import './MainLayout.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="grid-container">
      <Header className="Header"/>
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/booking" element={<Main />}/>
      <Route path='/confirmed' element= {<ConfirmBooking/>}/>
      </Routes>
      
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
