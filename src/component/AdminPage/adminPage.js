import React, {Component} from 'react';
import firebase from 'firebase';
import config from'./../../vendor/firebaseConfig';

class adminPage extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        firebase.initializeApp(config);
    }
    componentDidMount(){
        var credential = firebase.auth.EmailAuthProvider.credential(this.state.email, this.state.password);
        firebase.auth.currentUser.link(credential)
        .then(function(){
            alert('Success Linking auth');
        },function(error){
            alert('Failed Linking auth');
        })
    }
    render(){
        return(
            <h1>Ini Admin Page</h1>
        )
    }
}
export default adminPage;