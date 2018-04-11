import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import adminPage from './adminPage';
import firebase from 'firebase';
import config from'./../../vendor/firebaseConfig';
import {Redirect,Link, Router} from 'react-router-dom';
class Login extends Component{


    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        firebase.initializeApp(config);
        this._handleChangeEmail=this._handleChangeEmail.bind(this);
        this._handleChangePassword=this._handleChangePassword.bind(this);
    
    }
    componentDidMount(){
        
           
    }

    _handleChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    _handleChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    _AuthWithEmailAndPassword(email,password){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(){
            alert("Succes Log In With Firebase");
            // return (<div><Redirect to="/administrator"/></div>)
        })
        .catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
    }
    render(){
        return(
            <center className="container" style={{textAlign:'center', marginTop:150}}>
                <div className="col-lg-5 jumbotron" style={{alignContent:'center',justifyContent:'center'}}>
                    <div className="col-lg-10">
                        <h1>Administrator</h1>
                        <br/>
                        <div className="form-group">
                            <input type="email" val={this.state.email} onChange={this._handleChangeEmail} className="form-control form-control-lg" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" val={this.state.password} onChange={this._handleChangePassword} className="form-control form-control-lg" placeholder="Password"/>
                        </div>
                        <button 
                            className="btn btn-success btn-lg" 
                            onClick={
                                ()=> this._AuthWithEmailAndPassword()
                            }>
                            Sign In
                        </button>
                    </div>
                </div>
            </center>
        )
    }
}
export default Login;