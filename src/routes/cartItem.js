import { Router } from 'express';
import { getCartByIdUser,  update, insert, deleteById} from '../controllers/cartItem.js';

const routerCartItem = Router();

routerCartItem.get("/cartitems/:id", getCartByIdUser);
routerCartItem.put("/cartitem", insert);
routerCartItem.put("/cartitem/quantity", update);
routerCartItem.delete("/cartitem/:id", deleteById);

export default routerCartItem;