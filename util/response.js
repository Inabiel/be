class ResponseUtil{
    success = (response, statusCode = 200, data = null, message = 'Request was successful') =>{
        response.status(statusCode).send({
            success: true,
            message,
            data
        });
    }

    error = (response, statusCode, message = 'An error occurred', details = null) => {
        response.status(statusCode).send({
            success: false,
            message,
            details
        });
    }
}

export default new ResponseUtil();