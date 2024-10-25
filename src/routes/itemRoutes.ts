// src/routes/itemRoutes.ts
import express from 'express';
import { itemValidator } from '../validators/itemValidator';
import { validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/items', itemValidator, (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Proceed with creating the item...
    const newItem = { id: Date.now(), name: req.body.name }; // Example item creation
    res.status(201).json(newItem);
});

export default router;