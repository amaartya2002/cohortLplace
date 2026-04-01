import * as authService from "./auth.service.js"
import "../../common/utils/api.response.js"
import ApiResponse from "../../common/utils/api.response.js"

const register = async (req, res) => {
  const user = await authService.register(req.body)

  ApiResponse.created(res, "Registration Successfull", user)

}


export { register }