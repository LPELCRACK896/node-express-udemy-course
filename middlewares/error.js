const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) =>{
    // Log to console for dev
    console.log(err.stack.red)

    let error = {...err}
    error.message = err.message

    let message
    if(err.name === 'CastError')  {
        message = `Resourse not found with id of ${err.value}`
        error = new ErrorResponse(message, 404)
    }
    res.status(error.statusCode || 500).json({
        succes: false, 
        error: error.message || 'Server error'
    })

}

module.exports = errorHandler