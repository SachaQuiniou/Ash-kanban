export const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.statusCode = 404;

    next(error);
};

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({ error: err.message });
};
