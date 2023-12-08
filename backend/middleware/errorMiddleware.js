const notFound = (req, res, next) => {
    const error = new Error(`Não encontrado - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError!' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Recurso não encontrado';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_DEV === 'production' ? null : err.stack
    });
}

export { notFound, errorHandler };