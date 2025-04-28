import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import createHotelDTO from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO){
  const hotel = await Hotel.create({
    name: hotelData.name,
    location: hotelData.location,
    address: hotelData.address,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount
  });
  logger.info(`Hotel created : ${hotel.id}`);

  return hotel;
};

export async function findHotelById(id: number){
  const hotel = await Hotel.findByPk(id);

  if(!hotel){
    logger.error(`No hotel with id: ${id}`);
    throw new NotFoundError(`Hotel with this id: ${id} is not found`);
  }
  else logger.info(`Hotel found ${id}`);

  return hotel;
}

export async function getAllHotels(){
  const hotels = await Hotel.findAll({
    where: {
      deletedAt: null,
    }
  });

  if(!hotels){
    logger.error(`No hotel found`);
    throw new NotFoundError(`No Hotels are found`);
  } 
  logger.info(`Hotels found ${hotels.length}`);
   return hotels;
}

export async function softDeleteHotelById(id: number){
  const hotel = await Hotel.findByPk(id);

  if(!hotel){
    logger.error(`No hotel is found with id: ${id}`);
    throw new NotFoundError(`No hotel with id: ${id}`);
  }

  hotel.deletedAt = new Date(); // this is updating the TS object ,not going to propagate the query alltogether in final database
  await hotel.save; // this is going to propagate the query in final database
  logger.info(`hotel is soft deleted: ${id}`);
  return true;
}