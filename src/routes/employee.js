import { Router } from "express";
import employeeService from './../service/employee.js'
const Routes =Router()

Routes.post('/',employeeService.createEmployee)
Routes.get('/',employeeService.getAllEmployee)

export default Routes