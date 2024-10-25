import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack for debugging

    const statusCode = err.status || 500; // Default to 500 for server errors
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
    });
};

export default errorMiddleware;