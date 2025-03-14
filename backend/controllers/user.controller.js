import User from "../models/user.model.js";

export const gerUsersForSidebar = async (req, res) => {
    try{


        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId }}).select("-password")  //display all users but not the loggedIn user

        res.status(200).json(filteredUsers);


    }
    catch(error){
        console.log("error in getUsersForSidebar controller", error.message);
        res.status(500).json({error: "internal server error"});
    }
}