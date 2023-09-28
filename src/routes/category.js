import { Router } from 'express';
import { getAll, getById} from '../controllers/category.js'

const routerCategory = Router();

routerCategory.get("/categories", getAll);
routerCategory.get("/category/:id", getById);
// routerCategory.post("/category", insert);
// routerCategory.put("/category", update);
// routerCategory.delete("/category/:id", deleteById);

export default routerCategory 