import { Router } from 'express';
import { getAll, getById, getByIdCategory, getHighlights, insert, update, deleteById} from '../controllers/product.js'

const routerProduct = Router();

routerProduct.get("/products", getAll);
routerProduct.get("/product/:id", getById);
routerProduct.get("/product/category/:id", getByIdCategory);
routerProduct.get("/products/highlights", getHighlights);
routerProduct.post("/product", insert);
routerProduct.put("/product", update);
routerProduct.delete("/product/:id", deleteById);

export default routerProduct