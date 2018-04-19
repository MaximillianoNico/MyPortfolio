import axios from 'axios';
import React,{Component} from 'react';
import firebase from 'firebase';
export default{
    
    setLoginError(errorText){
        return {
            type : "SET_LOGIN_ERROR",
            payload: errorText
        }
    },
    setUser(user){
        return {
            type: "SET_USER",
            payload:user
        }
    },
    

    Authentication(email, password){
        return (dispatch) =>{
            return window.firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response =>{
                alert("Success");
                return (
                    dispatch(this.setUser(response.data)),
                        window.location.href("/administrator")
                    )
            })
            .catch(e=>{
                return dispatch(this.setLoginError("Wrong email or password"));
            })
        }
    }
    // getSession(){
    //     return (dispatch) =>{
    //         return firebase.
    //     }
    // }
}