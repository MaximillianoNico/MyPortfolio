import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Route} from 'react-router-dom';
import ShowApp from './component/ShowApp';
// import firebase from 'firebase';
import AdminPage from './component/AdminPage/adminPage';
import Login from './component/AdminPage/Login';
import Portfolio from './component/Portfolio';
import './App.css';
import adminPage from './component/AdminPage/adminPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      linkedin:"https://www.linkedin.com/in/maximilliano-nico-lolong-3b976b136/"}
      
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Maximilliano</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Show-App">My Portfolio</Link>
              </li>
            </ul>
            <span className="navbar-text">
              <a href={this.state.linkedin} className="link"> Go to LinkedIn Profile <span> <a style={{fontSize:'30px'}} class="fab fa-linkedin"></a></span></a>
            </span>
          </div>
        </nav>
        {/* <Profile name={this.state.name} job={this.state.job} location={this.state.location} summary={this.state.summary}/> */}
        <div>
          {/* <Route exact path="/" component={Profile}/> */}
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
