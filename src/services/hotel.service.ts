import createHotelDTO from "../dto/hotel.dto";
import { createHotel, findHotelById, getAllHotels } from "../repositories/hotel.repository";

export async function createHotelService(dataType: createHotelDTO){
  const hotel = await createHotel(dataType);

  return hotel;
}

export async function getHotelByIdService(dataType: number){
  const hotel = await findHotelById(dataType);

  return hotel;
}

export async function getAllHotelService(){
  const hotels = await getAllHotels();
  return hotels;
}
