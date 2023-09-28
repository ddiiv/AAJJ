import { Router } from 'express';
import { getImg } from '../controllers/images.js';

const routerImages = Router()

routerImages.get('/img/:img', getImg);

export default routerImages;