import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

export async function hotelController(req: Request , res: Response , next: NextFunction){
  //  1. call the service layer
  const hotelResponse = await createHotelService(req.body);

  // 2. send response
  res.status(201).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true
  });
}

export async function getHotelByIdController(req: Request, res: Response, next: NextFunction){
  // 1. call the service layer
  const response = await getHotelByIdService(Number(req.params.id));

  // 2. send the response
  res.status(200).json({
    message: "Hotel found with this id",
    data: response,
    success: true
  });
}