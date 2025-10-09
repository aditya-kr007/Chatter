import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import toast, { Toaster } from 'react-hot-toast';

const Logout=()=>{
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
    const logout=async()=>{
        setLoading(true)
        try {
            const res=await fetch('/api/auth/logout',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            
        
            localStorage.removeItem('chat-app')
            
            setAuthUser(null)
            toast.success("Logged out successfully")
        } catch (error) {
            toast.error(error)
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}

export default Logout