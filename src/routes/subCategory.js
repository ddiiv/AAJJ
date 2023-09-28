import { Router } from 'express';
import { getAll, getById } from '../controllers/subCategory.js'

const routerSubCategory = Router();

routerSubCategory.get("/subcategories", getAll);
routerSubCategory.get("/subcategory/:id", getById);
// routerSubCategory.put("/subcategory", insert);
// routerSubCategory.post("/subcategory", update);
// routerSubCategory.delete("/subcategory/:id", deleteById);

export default routerSubCategory