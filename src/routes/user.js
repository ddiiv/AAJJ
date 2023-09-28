import { Router } from 'express';
import { postById } from '../controllers/user.js'

const routerUser = Router();

//routerUser.get("/users", getAll);
routerUser.get("/user/:id", postById);
// routerUser.put("/user", insert);
// routerUser.post("/user", update);
// routerUser.delete("/user/:id", deleteById);

export default routerUser;