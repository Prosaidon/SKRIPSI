const authModels = require('../models/authModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
class authControllers{
    login = async(req, res) => {
        const { email, password } = req.body

        if(!email){
            return res.status(404).json({ massage: 'Please provide your email'})
        }
        if(!password){
            return res.status(401).json({ massage: 'Please provide your password'})
        }

        try{
            const user = await authModels.findOne({ email }).select('+password')
            if(user){
                const match = await bcrypt.compare(password,user.password)
                if(match){
                    const obj = {
                        id: user.id,
                        name: user.name,
                        category: user.category,
                        role: user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret,{
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({ message: 'Login Sucess', token})
                }else{
                    return res.status(404).json({ message: 'invalid password'})
                }
            }else{
                return res.status(404).json({ message: 'user not found'})
            }
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = new authControllers()