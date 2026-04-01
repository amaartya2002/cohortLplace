class ApiError extends Error {

  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }


  static badRequest(message = "Bad request") {
    return new ApiError(400, message)
  }

  static unAuthorized(message = "Unauthorized") {
    return new ApiError(403, message)
  }

  static conflict(message = "User already exists") {
    return new ApiError(409, message)
  }


}

export default ApiError