import { Router } from 'express';
import { insert } from '../controllers/order.js'

const routerOrder = Router();

//routerOrder.get("/order", getAll);
//routerOrder.get("/order/:id", getById);
routerOrder.put("/order", insert);
// routerOrder.post("/order", update);
// routerOrder.delete("/order/:id", deleteById);

export default routerOrder