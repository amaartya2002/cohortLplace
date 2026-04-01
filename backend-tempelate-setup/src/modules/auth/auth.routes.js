import { Router } from "express"
import * as controller from "./auth.controller.js"
import validate from "../../common/middelware/validate.middleware.js"
import RegisteDto from "./dto/register.dto.js"


const router = Router()


router.post('/register', validate(RegisteDto), controller.register)


export default router