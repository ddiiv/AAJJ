import UserService from "../services/user-services.js"

export const postById = async(req,res) =>{
    res.send(JSON.stringify(await new UserService().postById(req.body.id)))
}