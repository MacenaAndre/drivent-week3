import { prisma } from "@/config";
import { Hotel } from "@prisma/client";

async function findHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

const hotelRepository = {
  findHotels,
};
  
export default hotelRepository;
