import { Router } from "express";
import roomService from './../service/room.js'
const Routes =Router()

Routes.post('/',roomService.createRoom)
Routes.get('/',roomService.getAllRooms)
Routes.put('/:roomId',roomService.editRoomById)
export default Routes