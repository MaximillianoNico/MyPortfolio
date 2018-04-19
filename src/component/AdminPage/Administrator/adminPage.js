import React, {Component} from 'react';
import firebase from 'firebase';
import config from'./../../../vendor/firebaseConfig';
import actions from './src/action';
import {connect} from 'react-redux';

class adminPage extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    componentDidMount(){
        actions.getSession();    
    }
    
    render(){
        return(
            <h1>Ini Admin Page</h1>
        )
    }
}
const mapStateToProps = (state) =>{

}
export default connect(mapStateToProps)(adminPage);