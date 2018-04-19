import React, {Component} from 'react';
// import adminPage from './../adminPage';
import firebase from 'firebase';
import actions from "./src/action";
import config from'./../../../vendor/firebaseConfig';
import {connect} from 'react-redux';
import {Router} from 'react-router-dom';
class Login extends Component{


    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.loginEmailPassword = this.loginEmailPassword.bind(this);
    }

    loginEmailPassword(e){
        e.preventDefault();
        let email = e.target.inputEmail.value;
        let password = e.target.inputPassword.value;

        alert(password);
        this.props.dispatch(
            actions.Authentication(email, password)
        )
            
    }
    render(){
        return(
            <center className="container" style={{textAlign:'center', marginTop:150}}>
                <div className="col-lg-5 jumbotron" style={{alignContent:'center',justifyContent:'center'}}>
                    <div className="col-lg-10">
                        <form 
                            onSubmit={this.loginEmailPassword} 
                            className="form-signin">
                            {this.props.loginError &&
                                <div className="alert alert-danger">
                                    <p>{this.props.loginError}</p>
                                </div>
                            }
                        
                        
                            <h1>Administrator</h1>
                            <br/>
                            <div className="form-group" htmlFor="inputEmail">
                                <input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Email" required autoFocus />
                            </div>
                            <div className="form-group" htmlFor="inputPassword">
                                <input type="password" id="inputPassword" className="form-control form-control-lg" placeholder="Password" required/>
                            </div>
                            <button 
                                className="btn btn-success btn-lg" 
                                type="submit"
                                >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </center>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        loginError: state.loginError
    }
}
export default connect(mapStateToProps)(Login);