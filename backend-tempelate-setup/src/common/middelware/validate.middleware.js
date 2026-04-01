import ApiError from "../utils/api.error.js";

const validate = (dtoClass) => {

  return (req, res, next) => {

    const { errors, value } = dtoClass.validate(req.body)

    console.log("errors: ", errors);
    console.log("values: ", value);



    if (errors) {
      throw ApiError.badRequest(errors.join("; "))
    }

    req.body = value // validated data hi aage jata hai

    next()
  }
}

export default validate