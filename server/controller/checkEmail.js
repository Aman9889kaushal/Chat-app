const UserModel = require("../models/Usermodel")

async function checkEmail(request,response){
    try {
        const { email } = request.body 

        const checkEmail = await UserModel.findOne({email}).select("-passowrd")

        if (!checkEmail) {
            return response.status(400).json({
                message: "user not exit",
                error: true
            })
        }

        return response.status(200).json({
            message: "email verify",
            success: true,
            data: checkEmail
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkEmail