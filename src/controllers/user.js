import UserService from "../services/user-services.js"
import jwtservice from "../../middleware/middeware.js"

const auth = new jwtservice()

export const postById = async (req, res) => {
    res.send(JSON.stringify(await new UserService().postById(req.params.id)))
}

export const login = async (req, res) => {
    try {
        const { user, password } = req.body;

        if (!user || !password) {
            return res.status(400).json("No se ingresó el usuario o la contraseña");
        }

        const logedUser = await new UserService().login(user, password);
        if (logedUser) {
            return res.json({
                token: auth.createToken(logedUser),
                data: logedUser,
            });
        } 
        else {
            return res.status(204).json("No se encontró al usuario o la contraseña");
        }
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json("Error en el servidor");
    }
}

export const register = async(req,res) =>{
    let rowsAffected = 0;
	try {
		const user = req.body;
		rowsAffected = await new UserService().register(user);
		res.status(200).send("Correct Register,"+ rowsAffected +" RowsAffected");
	} catch (error) {
		console.error(error);
        return res.status(500).json("Error en el servidor");
	}
}

export const update= async(req,res) =>{
    let rowsAffected = 0;
	try {
		const user = req.body;
		rowsAffected = await new UserService().update(user);
		res.status(200).send("Correct Update,"+ rowsAffected +" RowsAffected");
	} catch (error) {
		console.error(error);
        return res.status(500).json("Error en el servidor");
	}
}