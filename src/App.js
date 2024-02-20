import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from "./Components/Main"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import './MainLayout.css';
import { useReducer } from 'react';

function App() {
  const reducer = (state, action) => {
    if (action.type === "increase")
      return { count: state.count + 1 }; 
    if (action.type === "decrease")
      return { count: state.count - 1 };
    return state;
  }

  const [state, dispatch] = useReducer(reducer, { count: 2 });  

  return (
    <div className="grid-container">
      <Header className="Header"/>
      <Main className="Main"/>
      <Section1/>
        <Section2/>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
