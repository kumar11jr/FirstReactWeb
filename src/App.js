import './App.css';
import Navbar from './MyComponent/Navbar';
import About from './MyComponent/About';
import Home from './MyComponent/Home';
import Services from './MyComponent/Services';
import Contact from './MyComponent/Contact';
import Footer from './MyComponent/Footer';

import { Switch , Route , Redirect } from "react-router-dom"


function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
