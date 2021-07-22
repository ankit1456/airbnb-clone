import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SearchPage from './Components/SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
      
      <Header/>
      <Switch>
    <Route path="/search">
    <SearchPage/>
    </Route>
 <Route>
   <Home/>
 </Route>
   
      </Switch>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
