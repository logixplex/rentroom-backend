const Users = require("./user.modal");
const bcrypt  = require("bcryptjs")
const signup = async(req,res)=>{
    const {name, email, phone, password, userType } = req.body;

    try{
        const isUser = await Users.findOne({email})

        if(isUser){
            return res.status(400).send({
                success:false,
                message:"User already registered."
            })
        }
        let newUser = new Users({name, email , phone ,password , userType})
        const salt = await bcrypt.genSalt(10);
        newUser.password = await salt.hash(password , salt);

        await newUser.save()

    } 
    catch(err){
       return res.status(500).send({
            success:false ,
            message:"Failed to Register User."
        })
    }
}