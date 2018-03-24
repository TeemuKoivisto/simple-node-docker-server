
module.exports = class CustomError extends Error {
  constructor(message, errorCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = errorCode
    Error.captureStackTrace(this, this.constructor);
  }
}