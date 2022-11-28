import { notFoundError } from "@/errors";
import { Hotel } from "@prisma/client";
import hotelRepository from "@/repositories/hotel-repository";

async function getHotelList(): Promise<Hotel[]> {
  const hotels = await hotelRepository.findHotels();

  return hotels;
}

const hotelService = {
  getHotelList,
};

export default hotelService;
