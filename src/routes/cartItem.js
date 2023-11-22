import { Router } from 'express';
import { getCartByIdUser,  update, insert, deleteById} from '../controllers/cartItem.js';
import jwtservice from "../../middleware/middeware.js"

const auth = new jwtservice()

const routerCartItem = Router();

routerCartItem.get("/cartitems/:id", auth.checktoken , getCartByIdUser);
routerCartItem.put("/cartitem", auth.checktoken , insert);
routerCartItem.put("/cartitem/quantity", auth.checktoken , update);
routerCartItem.delete("/cartitem/:id", auth.checktoken , deleteById);

export default routerCartItem;

