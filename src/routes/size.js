import { Router } from 'express';
import { getAll, getById, getByIdProduct } from '../controllers/size.js'

const routerSize = Router();

routerSize.get("/sizes", getAll);
routerSize.get("/size/:id", getById);
routerSize.get("/sizes/product/:id", getByIdProduct);
// routerSize.post("/size", insert);
// routerSize.put("/size/:id", update);
// routerSize.delete("/size/:id", deleteById);

export default routerSize