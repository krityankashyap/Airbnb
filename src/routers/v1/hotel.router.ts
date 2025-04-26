import express from 'express';
import { getHotelByIdController, hotelController } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema) , hotelController); // TODO: Resolve this TS compilation issue

hotelRouter.get('/:id' , getHotelByIdController);

export default hotelRouter;