import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotels, getHotelWithRooms } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/", getHotels)
  .get("/:hotelId", getHotelWithRooms);

export { hotelsRouter };
