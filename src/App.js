import './App.css';
import AboutUs from './Components/AboutUs';
import Body from './Components/Body';
import ConfirmBooking from './Components/ConfirmBooking';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Main from "./Components/Main"
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import './MainLayout.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const categories = [
    {
        id: 1,
        name: 'Appetizers',
        items: [
            { id: 1, name: 'Greek Salad', price: '$12.99' },
            { id: 2, name: 'Bruchette', price: '$5.99' },
            // Add more items as needed
        ]
    },
    {
        id: 2,
        name: 'Main Courses',
        items: [
            { id: 3, name: 'Lemmon Dessert', price: '$5.00' },
            { id: 4, name: 'Chicken Parmesan', price: '$14.99' },
            // Add more items as needed
        ]
    },
    // Add more categories as needed
];


  return (
    <div className="grid-container">
      <Header className="Header"/>
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/booking" element={<Main />}/>
      <Route path='/confirmed' element= {<ConfirmBooking/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}/>
      <Route path='/menu' element = {<Menu categories={categories}/>}/>
      <Route path='/orderonline' element = {<OrderOnline/>}/>
      <Route path='/login' element = {<Login/>}/>




      </Routes>

      <div className='Footer'>
      
      <Footer/>
      </div>
    </div>
  );
}

export default App;
