import { Router } from 'express';
import { postById , login} from '../controllers/user.js'
import jwtservice from '../../middleware/middeware.js';

const auth = new jwtservice();

const routerUser = Router();

//routerUser.get("/users", getAll);
routerUser.get("/user/:id", auth.checktoken, postById);
// routerUser.put("/user", insert);
routerUser.post("/user/login", login);
// routerUser.delete("/user/:id", deleteById);

export default routerUser;