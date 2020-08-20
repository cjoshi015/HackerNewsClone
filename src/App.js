import React from 'react';
import './App.css';
import Home from './components/home'
import Data from './components/Data'
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './components/newcomponent'
import Past from './pastcomponent';


function App() {

  
  return (
    <BrowserRouter>
    <div> 
      <Home/>
      <Switch>
        <Route path="/home" exact component={Data} />
        <Route path="/new" component={New} />
        <Route path="/past" component={Past} />
      </Switch>
    </div>   
    </BrowserRouter>
  )}

export default App;
