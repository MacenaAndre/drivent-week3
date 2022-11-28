import { prisma } from "@/config";
import { Hotel } from "@prisma/client";

async function findHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

async function findHotelByHotelId(hotelId: number) {
  return prisma.hotel.findUnique({
    where: { id: hotelId },
    include: {
      Rooms: true
    }
  });
}

const hotelRepository = {
  findHotels,
  findHotelByHotelId,
};
  
export default hotelRepository;
