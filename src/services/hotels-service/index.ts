import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
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
