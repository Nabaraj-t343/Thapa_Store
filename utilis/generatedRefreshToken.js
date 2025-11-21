import UserModel from "../model/user.model.js"
import jwt from 'jsonwebtoken'   
const generatedRefreshToken= async(userId)=>{
    const token= await jwt.sign({ id: userId},
        process.env. SECRET_KEY_REFRESH_TOKEN,
        { expiresIN : '7d'}
    )
    const updateRefreshTokenUser= await UserModel.updateOne(
      {_id : userId}, 
      {
        refresh_token : token
      } 
        
    )
    return token
}
export default generatedRefreshToken