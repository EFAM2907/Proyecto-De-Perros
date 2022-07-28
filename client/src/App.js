import React from 'react';
import {Route} from 'react-router-dom';
import Landing from './Componentes/landing';
import Home from './Componentes/Home';
import detailDog from './Componentes/detailDog';
import CreateDogs from './Componentes/CreateDogs';
import Nav from './Componentes/Nav';
import Perfil from '../src/Componentes/perfil'
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/detail/:id" component={detailDog}/>
      <Route exact path="/create" component={CreateDogs}/>
      <Route exact path="/perfil" component={Perfil}/>




    </div>
  );
}

export default App;
