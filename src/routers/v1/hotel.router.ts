import express from 'express';
import {  deletionHotelByIdController, getAllHotelController, getHotelByIdController, hotelController, updateHotelByIdController } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema) , hotelController); // TODO: Resolve this TS compilation issue

hotelRouter.get('/:id' , getHotelByIdController);

hotelRouter.get('/' , getAllHotelController);

hotelRouter.delete('/:id' , deletionHotelByIdController);

hotelRouter.put('/:id' , updateHotelByIdController);

export default hotelRouter;