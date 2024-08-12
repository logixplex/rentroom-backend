const profile = require("../user/user.modal")

const updateProfileController = async(req,res)=>{
    const data = req.body;
    const userId = req.query;
    try{

        const reponse = await profile.find({_id:userId} , data , {new:true})

        return res.status(500).json({
            success:false,
            message:"Failed to Update Profile."
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Failed to Update Profile."
        })
    }

}


module.exports = updateProfileController;