import React, { createContext, useState, useEffect } from 'react';
import { auth, onAuthStateChanged} from '../services/firebaseConfig';

export const AuthContext= createContext({userDataPresent:false,user:null})

export default function FirebaseAuthContext({children}){  
    const [state,SetState] = useState({
        userDataPresent:false, 
        user:null,
        listener:null
    })
 
    useEffect(()=>{
        if(state.listener == null){
            SetState({...state, listener:onAuthStateChanged(auth, (currentUser)=>{
                if(currentUser)
                SetState(oldState=>({...oldState,userDataPresent:true,user:currentUser}));
                else
                SetState(oldState=>({...oldState,userDataPresent:true,user:null}));
            })});
        }
        return ()=>{
            if(state.listener)
            state.listener()
        }
    },[])

    
  
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}
