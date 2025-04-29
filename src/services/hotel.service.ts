import { createHotelDTO, updatedHotelDTO } from "../dto/hotel.dto";
import { createHotel, findHotelById, getAllHotels,  softDeleteHotelById, updateHotelById,  } from "../repositories/hotel.repository";

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

export async function softDeletionServiceById(id: number){
  const response = await softDeleteHotelById(id);
  return response;
}

export async function updateHotelByIdService(id: number , hotelData: updatedHotelDTO){
  const response = await updateHotelById(id , hotelData);
  return response;
}
