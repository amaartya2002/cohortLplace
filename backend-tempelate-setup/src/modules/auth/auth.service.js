import ApiError from "../../common/utils/api.error.js"
import User from "./auth.model.js"
import { generateResetToken } from "../../common/utils/jwt.utils.js"


const register = async ({ name, email, password, role }) => {

  const user = await User.findOne({ email })

  if (user) {
    throw ApiError.conflict("User already exits.")
  }

  const { rawToken, hashToken } = generateResetToken()

  const newUser = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashToken
  })

  // send an email to user with raw token

  const userObj = newUser.toObject()
  console.log(userObj);

  delete userObj.password
  delete userObj.verificationToken

  return userObj
}


export { register }