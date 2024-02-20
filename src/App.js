import './App.css';
import BookingForm from './Components/BookingForm';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from "./Components/Main"
import './MainLayout.css';

function App() {
  return (
    <div className="grid-container">
<Header className="Header"/>
<Main className="Main"/>
<BookingForm/>
<Footer className="Footer"/>
    </div>
  )
}

export default App;
