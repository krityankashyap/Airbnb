export type createHotelDTO = {
    name: string,
    address: string,
    location: string,
    rating?: number,
    ratingCount?: number
};

export type updatedHotelDTO = Partial<createHotelDTO>