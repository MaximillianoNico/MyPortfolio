const reducer = (state ={user:{},dataUser:[] },action) => {
            switch(action.type){
                case "SET_USER":
                    return Object.assign({},state,{
                        user:action.payload
                    });
                
                case "SET_LOGIN_ERROR":
                    return Object.assign({},state,{
                        loginError:action.payload
                    });
                
                default:
                    return state;
            }    
        }

    export default reducer;