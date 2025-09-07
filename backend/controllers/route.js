const User = require("../model/user")
const bcryptjs = require("bcryptjs")
const { generateTokenAndSetCookie } = require("../utilis/generateToken")
const signUp = async (req, res) => {
    
    try {
        const { name, username, password, gender, email, confirmPassword } = req.body
        
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }
        const user = await User.findOne({ username: username, email: email })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)

            const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${name}`
            const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${name}`
            const newUser = await User.create({ name, username, password: hashedPassword, gender, email, profilePic: gender === "male" ? boyProfilePic : girlProfilePic })
            if (newUser) {
                // Generate JWT token here
                generateTokenAndSetCookie(newUser._id, res);
    
                res.status(201).json({
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic,
                });
        //hash password
            }
            else{
                res.status(400).json({error: "Something went wrong" })
            }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const login = async (req, res) => {
    try {
        const {username,password}=req.body
        if(!username || !password){
            return res.status(400).json({error:"Please enter username and password"})
        }
        const user=await User.findOne({username})
        const isMatched=await bcryptjs.compare(password,user.password)

        if (!isMatched || !user ){
            return res.status(400).json({error:"Invalid Password or username"})
        }
        
        generateTokenAndSetCookie(user._id,res)
        
            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic,
            });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error:"Invalid Password or username" })
    }
}
const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        res.status(200).json({ message: "User logged out successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { login, logOut, signUp }