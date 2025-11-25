import jwt from 'jsonwebtoken'
const auth=( request,response,next)=>{
    try{
        
        const token=request.cookies.accessToken|| request?.header?.authorization?.split("")[1] /// ["Bearer", "token"]
   if (!token){
    return response.status(401).json({
    message:"provide token"
   })
   }

   const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESEE_TOKEN)

   console.log('decode',decode)
   
    }catch (error){
            return response.status(500).json({
                message:error.message||error,
                error:true,
                success:false
            })
        }
    }
    export default auth