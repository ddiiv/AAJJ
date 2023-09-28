import { Router } from 'express';
import { getAll} from '../controllers/imageCarrousel.js'

const routerImageCarrousel = Router();

routerImageCarrousel.get("/carrousel", getAll);

export default routerImageCarrousel;

