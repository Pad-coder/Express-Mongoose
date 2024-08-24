import { Router } from "express";
import bookingService from './../service/booking.js'
const Routes =Router()

Routes.post('/',bookingService.createBooking)
Routes.get('/',bookingService.getAllBooking)

export default Routes