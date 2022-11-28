import { notFoundError } from "@/errors";
import { Hotel } from "@prisma/client";
import hotelRepository from "@/repositories/hotel-repository";

async function getHotelList(): Promise<Hotel[]> {
  const hotels = await hotelRepository.findHotels();

  return hotels;
}

async function getHotelsByHotelId(hotelId: number) {
  const hotelWithRooms = await hotelRepository.findHotelByHotelId(hotelId);

  if(!hotelWithRooms) {
    throw notFoundError();
  }

  return hotelWithRooms;
}

const hotelService = {
  getHotelList,
  getHotelsByHotelId,
};

export default hotelService;
