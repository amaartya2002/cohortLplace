
import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";


// Jab bhi data aayega DTO se hoke hi aayegaa
class RegisterDto extends BaseDto {

  static schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("customer", "admin").required()
  })
}


export default RegisterDto