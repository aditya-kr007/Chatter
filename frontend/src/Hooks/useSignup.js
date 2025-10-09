import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from "../../context/AuthContext";

const useSignup = () => {
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()


    const signup=async({email,name,username,password,confirmPassword,gender})=>{
    const success=handleInputErrors({email,name,username,password,confirmPassword,gender})

    if(!success){
        return ;
    }
    setLoading(true)
    try {
        const res= await fetch("/api/auth/signup",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,name,username,password,confirmPassword,gender})
            }
        )
        
        const data= await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        toast.success("Hurrehh!")
        //setting up the local storage
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data)

        //context
        // setAuthUser(data)

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
    }

    return {loading,signup}
}
const handleInputErrors=({email,name,username,password,confirmPassword,gender})=>{
    if(!email ||!name ||!username ||!password ||!confirmPassword ||!gender){
        toast.error("All fields are required")
        return false;
    }
    if(password!==confirmPassword){
        toast.error("Passwords don't match")
        return false;
    }
    if(password.length<0){
        toast.error("Password should be at least 6 characters")
        return false;
    }
    return true;
}

export default useSignup