import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Route} from 'react-router-dom';
import ShowApp from './component/ShowApp';
import Header from './component/Header';
import AdminPage from './component/AdminPage/adminPage';
import Login from './component/AdminPage/Login';
import Portfolio from './component/Portfolio';
import './App.css';
import adminPage from './component/AdminPage/adminPage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <div>
          <Header/>
          <Route exact path="/" component={Portfolio}/>
          <Route path="/Show-App" component={ShowApp}/>
          <Route path="/myAdmin" component={Login}/>
          <Route path="/administrator" component={adminPage}/>
        </div>
      </div>
    );
  }
}

export default App;
