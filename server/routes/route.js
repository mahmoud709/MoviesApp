import { Router } from "express";
import { register, login } from "../controllers/Auth.js";

const route = new Router();

route.post('/register', register)
route.post('/',login)


export default route;