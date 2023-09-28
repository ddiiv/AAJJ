import ProductService from "../services/product-services.js";
import StockService from "../services/stock-services.js";
import ImageProductService from "../services/imageProduct-services.js";

export const getAll = async(req, res) =>{
    res.send(await new ProductService().getAll())
}
export const getById = async(req, res) =>{
    res.send(await new ProductService().getById(req.params.id))
}
export const getByIdCategory = async(req, res) =>{
    res.send(await new ProductService().getByIdCategory(req.params.id))
}
export const getBySubCategory = async(req, res) =>{
    res.send(await new ProductService().getBySubCategory(req.params.subcategory))
}
export const getHighlights = async(req, res) =>{
	res.send(await new ProductService().getHighlights());
}
export const insert = async(req, res) =>{    
	let rowsAffected = 0;
	try {
		let product = req.body.product;
		let sizes = req.body.sizes;
		let images = req.body.img;
		await new ProductService().insert(product);
		for (let i=0; i<sizes.length; i++){
			await new StockService().insert(product.id, size.id);
		}
		images.forEach(image => {
			ImageProductService(product.id, image.id); 
		});
		res.status(200).send("Correct Insert,"+ rowsAffected +"RowsAffected");
	} catch (error) {
		res.status(400).send(error)
	}
}
export const update = async(req, res) =>{
    res.send(await new ProductService().getAll())
}
export const deleteById = async(req, res) =>{
    res.send(await new ProductService().getById(req.params.id))
}

