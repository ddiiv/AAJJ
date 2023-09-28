import { Router } from 'express';
import { postCartByIdUser,  update, insert, deleteById} from '../controllers/cartItem.js';

const routerCartItem = Router();

routerUser.get("/cartitems/:id", postCartByIdUser);
routerUser.put("/cartitem", insert);
routerUser.put("/cartitem/quantity", update);
routerCartItem.delete("/cartitem/:id", deleteById);

export default routerCartItem;