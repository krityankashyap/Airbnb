import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelService, getHotelByIdService, softDeletionServiceById, updateHotelByIdService,  } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function hotelController(req: Request , res: Response , next: NextFunction){
  //  1. call the service layer
  const hotelResponse = await createHotelService(req.body);

  // 2. send response
  res.status(StatusCodes.CREATED).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true
  });
}

export async function getHotelByIdController(req: Request, res: Response, next: NextFunction){
  // 1. call the service layer
  const response = await getHotelByIdService(Number(req.params.id));

  // 2. send the response
  res.status(StatusCodes.OK).json({
    message: "Hotel found with this id",
    data: response,
    success: true
  });
}

export async function getAllHotelController(req: Request , res: Response , next:NextFunction){
  // 1. call the service layer

  const hotels = await getAllHotelService();

  // 2. send response
  res.status(StatusCodes.OK).json({
    message: "Hotels found successfully",
    data: hotels,
    success: true
  });
};

export async function deletionHotelByIdController(req: Request , res: Response , next: NextFunction){
  // 1. call the service layer
  const hotel = await softDeletionServiceById(Number(req.params.id));

  // 2. send response

  res.status(StatusCodes.OK).json({
    message: "Hotel deleted successfully",
    success: true,
    data: hotel
  })
}

export async function updateHotelByIdController(req: Request , res: Response , next: NextFunction){
  // 1. call the service layer
  const hotelResponse = await updateHotelByIdService(Number(req.params.id) , req.body);

  // 2. send response
  res.status(StatusCodes.OK).json({
    message: "Hotel updated successfully",
    data: hotelResponse,
    success: true
  })
}
