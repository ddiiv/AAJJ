import UserService from "../services/user-services.js"
import { verify, sign}  from "jsonwebtoken"

const TOKEN_KEY = "A321FAS6CXZV";

const verifyToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader)
    if(token == null) 
        return res.status(401).send('Token requerido')
    verify(token, TOKEN_KEY, (err, user)=>{
        if(err)
            return res.status(403).send('Token invalido')
        req.user = user;
        next();
    })
}

export const postById = async(req,res) =>{
    res.send(JSON.stringify(await new UserService().postById(req.params.id)))
}

export const login = async(req,res) =>{
    const user = req.body.user;
    const password = req.body.password;
    const datos= {
        id: 123,
        user: 'owen'
    }
    const token = sign(
        {
            userId: datos.id,
            user: datos.user
        },
        TOKEN_KEY,
        {expiresIn: "3h"}
    );
    let nDatos = {...datos, token}
    res.status(200).json(nDatos);

}