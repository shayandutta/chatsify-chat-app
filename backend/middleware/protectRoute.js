import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({error: "Unauthorized: No tokens available"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) return res.status(401).json({error: "Unauthorized: Invalid token"});

        const user = await User.findById(decoded.userId).select("-password"); //select("-password") -> to exclude password from the user object

        if(!user) return res.status(401).json({error: "Unauthorized: No user found"});

        req.user = user; //attaching user object to req object
        next(); //calling next middleware(sendMessage) if user is authenticated 
    }catch(error){
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: "internal server error"});
    }


};
export default protectRoute;