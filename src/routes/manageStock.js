import { Router } from 'express';
import { insert } from '../controllers/manageStock.js'

const routerManageStock = Router();

// routerManageStock.get("/managestocks", getAll);
// routerManageStock.get("/managestock/:id", getById);
routerManageStock.post("/managestock", insert);
// routerManageStock.delete("/managestock/:id", deleteById);

export default routerManageStock 