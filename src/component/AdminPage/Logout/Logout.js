import React, {Component} from 'react';

class Logout extends Component{

    componentDidMount(){
        console.log("Running.....");
        window.firebase.auth().signOut().then(s=>{
            window.location.href("/myAdmin");
        }).catch(function(e){
            alert("error");
        })
    }

    render(){
        return(
            <center style={{marginTop:50}}>
                <h1>"Logging Out ......"</h1>
            </center>
        )
    }
}
export default Logout;