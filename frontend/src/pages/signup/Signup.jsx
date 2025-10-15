import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import signup from '../../Hooks/useSignup'
import useSignup from '../../Hooks/useSignup'

export const Signup = () => {
    const [input, setInputs] = useState(
        {
            name: '',
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            gender: ''
        }
    )
    const { signup, loading } = useSignup()
    const handleCheckBox = (gender) => {
        setInputs({ ...input, gender })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(input)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full p-6 w-full bg-white-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
                <h1 className='text-3xl font-semibold text-center text-white' style={{ fontFamily: "serif" }}>Sign Up
                    <span style={{ fontWeight: "bolder" }} className='text-pink-400'> Eye</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "17px" }}>Email</span>
                        </label>
                        <input type="email" value={input.email} onChange={(e) => setInputs({ ...input, email: e.target.value })} placeholder="Email" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "17px" }}>Name</span>
                        </label>
                        <input type="text" value={input.name} onChange={(e) => setInputs({ ...input, name: e.target.value })} placeholder="Name" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "17px" }}>Username</span>
                        </label>
                        <input type="text" value={input.username} onChange={(e) => setInputs({ ...input, username: e.target.value })} placeholder="Username" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "17px" }}>Password</span>
                        </label>
                        <input type="password" value={input.password} onChange={(e) => setInputs({ ...input, password: e.target.value })} placeholder="Password" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div style={{ paddingBottom: "6px" }}></div>
                    <div>
                        <label className="label">
                            <span className='label-text' style={{ fontSize: "17px" }}>Confirm Password</span>
                        </label>
                        <input type="password" value={input.confirmPassword} onChange={(e) => setInputs({ ...input, confirmPassword: e.target.value })} placeholder="Confirm Password" className="input input-bordered input-secondary w-full min-w-xs" />
                    </div>
                    <div style={{ paddingBottom: "10px" }}></div>

                    <GenderCheckbox onCheckBoxChange={handleCheckBox} selectedGender={input.gender} />
                    <div style={{ paddingBottom: "8px" }}></div>

                    <div>
                        <button style={{ fontSize: "18px", fontWeight: "lighter" }} className="btn btn-secondary btn-block text-white" disabled={loading}>{loading ? <span className="loading loading-dots loading-lg"></span>
                            : "Sign Up"}</button>

                    </div>
                    <div style={{ paddingBottom: "10px" }}></div>

                    <Link to='/login' className='text-md hover:underline hover:text-pink-400 inline-block'>
                        Already have an account? Login
                    </Link>


                </form>
            </div>
        </div>
    )
}

export default Signup