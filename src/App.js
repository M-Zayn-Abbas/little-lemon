import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from "./Components/Main"
import './MainLayout.css';

function App() {
  return (
    <div className="grid-container">
<Header className="Header"/>
<Main className="Main"/>
<Footer className="Footer"/>
    </div>
  )
}

export default App;
