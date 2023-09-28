import { Router } from 'express';
import { getAll} from '../controllers/footer.js'

const routerFooter = Router();

routerFooter.get("/footer", getAll);