import {useState} from 'react'

const useHook = () => {
const [values,setValues]=useState({
    username:'',
    email:'',
    password:'',
    conPassword:''
 
})




const handleChange = e =>{
    const{name,value}=e.target
    setValues({
        ...values,
        [name]:value
    });
};

const handleSubmit = e =>{
    e.preventDefault();
      
};


return {handleChange,values,handleSubmit}
  
}

export default useHook

