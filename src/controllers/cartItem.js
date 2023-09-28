import CartItemService from "../services/cartItem-services.js"

export const getCartByIdUser = async(req,res) =>{
    res.send(JSON.stringify(await new CartItemService().postCartByIdUser(req.params.id)))
}

export const insert = async(req,res) =>{
    let rowsAffected = 0;
	try {
		rowsAffected = await new CartItemService().insert(req,body);
		res.status(200).send("Correct Insert,"+ rowsAffected +"RowsAffected");
	} catch (error) {
		res.status(400).send(error)
	}
}

export const update = async(req,res) =>{
    let rowsAffected = 0;
	try {
		rowsAffected = await new CartItemService().update(req,body);
		res.status(200).send("Correct Insert,"+ rowsAffected +"RowsAffected");
	} catch (error) {
		res.status(400).send(error)
	}
}

export const deleteById = async(req,res) =>{
    res.send(JSON.stringify(await new CartItemService().deleteById(req.params.id)))
}