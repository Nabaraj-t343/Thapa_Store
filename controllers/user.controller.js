
 import sendEmail from "../config/sendEmail.js";

 import UserModel from '../model/user.model.js'

import bcrypt from 'bcryptjs'
import verifyEmailTemplate from "../utilis/verifyEmailTemplate.js"

import generatedAccessToken from '../utilis/generatedAccesssToken.js'
import generatedRefreshToken from '../utilis/generatedRefreshToken.js'

export async function registerUsercontroller(request,response){
    try{
        const{name ,email, password, }=request.body
if(!name|| !email||!password){
    return response. status (400).json({
        mesaage: "provide name,email,password",
        error: true,
        success: false

    })
}

const user= await UserModel.findOne({email})
if(user){
    return response.json({
        message:"already registerd email",
         error: true,
        success: false
    })
}

const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password, salt)


const payload = {
  name,
  email,
  password: hashPassword  // lowercase password
}


const newuser=new UserModel(payload)
const save=await newuser.save() 
const verifyEmailurl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`


const verificationEmail= await sendEmail({
    sendTo: email,
    subject: "verify email from kiranahub",
    html: verifyEmailTemplate({
        name,
        url: verifyEmailurl
    })
})
return response.json({
    message: "user registeration successfully",
    error: false,
    success:true,
    data: save
})

    } catch (error){
  console.error("Register Error:", error);
  return response.status(500).json({
      message: error.message || error,
      error:true,
      success:false
  })
    }
}
export async function verifyEmailcontroller(request,response){
    try{
const {code} =request.body

const user= await UserModel.findOne({_id : code})
    if (user){
        return response.status(400).json({
        message:"invalid code",
        error:true,
        success:fasle
        })
    } 

    const updateUser= await UserModel.updateOne({_id :code},{
    verify_Email: true
    })

return  response.json({
    message:" verify email done",
    success: true,
    error: false
})
}catch (error){
        return response.status(500).json({
            message:error.message|| error,
            error:true,
            success: true
        })
    }
}

//login controller

export async function loginController(request,response){
    try{
        const {email, password }=request.body
        if(!email || !password){
            return response.status(400).json({
                message: "provide email, password",
                error: true,
                success: false
            })
        }
        const user=await UserModel.findOne({ email})
        if(!user){
            return response.status(400).json({
                message:"user not register",
                error: true,
                success: false
            })
        }

        if(user.status!== "Active"){
            return response. status(400).jso({
                message:"contact to Admin",
                error:true,
                success: false
            })
            }
            const cheeckpassword=await bcrypt.compare(password,user.password)
            if(!cheeckpassword){
                return response.status(400).json({
                    message:"check your password",
                    error: true,
                    success:false
                })
            }

            const accessToken=await  generatedAccessToken(user._id)
            const refreshToken = await generatedRefreshToken(user._id)
        const cookiesOption={
            httpOnly : true,
            secure: true,
            sameSite: "None"
        }
            response.cookie('accessToken',accessToken,cookiesOption)
            response.cookie('refreshToken', refreshToken,cookiesOption)
    
            return response.json({
                message: "login successfully",
                error: false,
                success: true,
                data:{
                    accessToken,
                    refreshToken
                    
                }
            })
    
        } catch (error){
        return response.status(500).json({
            message:error.message|| error,
            error: true,
            success :false
        }) 


        }
    }

    //logout controller
    export async function logoutController(request,response){
        try{
            const cookiesOption={
            httpOnly : true,
            secure: true,
            sameSite: "None"
            }

            response.clearCookie("accessToken",cookiesOption)
            response.clearCookie("refreshToken",cookiesOption)
            
return response.json({
    message:"logout successfully",
    error : false,
    success: true
})
        }catch (error){
            return response.status(500).json({
                message:error.message||error,
                error:true,
                success:false
            })
        }
    }