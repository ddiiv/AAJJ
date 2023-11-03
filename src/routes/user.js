import { Router } from 'express';
import { postById , login, verifyToken} from '../controllers/user.js'

const routerUser = Router();

//routerUser.get("/users", getAll);
routerUser.get("/user/:id", postById);
// routerUser.put("/user", insert);
routerUser.post("/user/login", login, verifyToken);
// routerUser.delete("/user/:id", deleteById);

export default routerUser;