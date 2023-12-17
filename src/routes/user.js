import { Router } from 'express';
import { postById , login , register , update} from '../controllers/user.js'
import jwtservice from '../../middleware/middeware.js';

const auth = new jwtservice();

const routerUser = Router();

//routerUser.get("/users", getAll);
routerUser.get("/user/:id", auth.checktoken, postById);
routerUser.put("/user/register", register);
routerUser.post("/user/login", login);
routerUser.put("/user", auth.checktoken, update);
// routerUser.delete("/user/:id", deleteById);

export default routerUser;