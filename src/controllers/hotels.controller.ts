import { AuthenticatedRequest } from "@/middlewares";
import hotelService from "@/services/hotels-service";
import ticketService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticket = await ticketService.getTicketByUserId(userId);

    if(ticket.status !== "PAID") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    if(!ticket.TicketType.includesHotel) {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    const hotels = await hotelService.getHotelList();

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
