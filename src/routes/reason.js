import { Router } from 'express';
import { getAll } from '../controllers/reason.js'

const routerReason = Router();

routerReason.get("/reason", getAll);

export default routerReason