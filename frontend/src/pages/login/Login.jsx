import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../Hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { loading, login } = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full p-6 w-full bg-white-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
                <h1 className='text-3xl font-semibold text-center text-white' style={{ fontFamily: "serif" }}>Login
                    <span style={{ fontWeight: "bolder" }} className='text-pink-400'> Eye</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "18px" }}>Username</span>
                        </label>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "18px" }}>Password</span>
                        </label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div style={{ paddingBottom: "20px" }}></div>

                    <div>
                        <button style={{ fontSize: "18px", fontWeight: "lighter" }} className="btn btn-secondary btn-block text-white" disabled={loading}>{loading ? <span className="loading loading-dots loading-lg"></span> : "Login"}</button>
                    </div>
                    <div style={{ paddingBottom: "10px" }}></div>
                    <Link to='/signup' className='text-md hover:underline hover:text-pink-400 inline-block'>
                        Don't have an account? Create one
                    </Link>


                </form>
            </div>
        </div>
    )
}

export default Login