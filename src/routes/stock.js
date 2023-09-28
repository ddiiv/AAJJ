import { Router } from 'express';
import { getAll, getById } from '../controllers/stock.js'

const routerStock = Router();

routerStock.get("/stocks", getAll);
routerStock.get("/stock/:id", getById);
// routerStock.put("/stock", update);

export default routerStock