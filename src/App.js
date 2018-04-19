import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Route,Switch,withRouter} from 'react-router-dom';
import ShowApp from './component/ShowApp';
import Header from './component/Header';
import Login from './component/AdminPage/Login/Login';
import Portfolio from './component/Portfolio';
import './App.css';
import Logout from './component/AdminPage/Logout/Logout';
import AdminPage from './component/AdminPage/Administrator/adminPage';
import actions from './component/AdminPage/Login/src/action';
import {connect} from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Portfolio}/>
            <Route exact path="/Show-App" component={ShowApp}/>
            <Route exact path="/myAdmin" component={Login}/>
            <Route exact path="/myAdmin/logout" component={Logout}/>
            <Route exact path="/administrator" component={AdminPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
