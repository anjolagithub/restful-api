import { body } from 'express-validator';

export const itemValidator = [
    body('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
];