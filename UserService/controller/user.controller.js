import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email)
      return res
        .status(400)
        .json({ success: false, message: "Fields are Required" });

    const user = new User({
      name,
      email,
    });
    await user.save();

    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log("Error in registering user function", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllUser=async(_,res)=>{
  try {
    
    const result=await User.find({});

    if(!result||result.length===0)
      return res.status(400).json({success:false,message:'Unable to fin the user'});

    return res.status(200).json({success:true,result});

  } catch (error) {
    console.log('Error in fetching the users',error);
    
  }
}