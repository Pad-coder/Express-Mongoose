import { Router } from "express";
import employeeRoutes from "./employee.js";
import bookingRoutes from "./booking.js";
import roomRoutes from "./room.js";

const Routes =Router()

Routes.get("/",(req,res)=>{
    res.send(`<div>
       <center> <h1>Welcome to backend of letchat app</h1>
        <p>Please refer postman collections for API endpoints</p></center>
        </div>`)
})

Routes.use('/employee',employeeRoutes)
Routes.use('/room',roomRoutes)
Routes.use('/booking',bookingRoutes)

export default Routes