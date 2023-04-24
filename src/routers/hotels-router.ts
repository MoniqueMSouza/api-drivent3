import { Router } from 'express';
import { authenticateToken, validateParams} from '@/middlewares';
import { getHotels, getHotelById } from '@/controllers';
import { HotelIdSchema } from '@/schemas';


const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', getHotels)
  .get('/:id', validateParams(HotelIdSchema), getHotelById)

export { hotelsRouter };
