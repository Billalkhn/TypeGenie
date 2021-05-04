import { Router } from "express";

const router = Router();

router.post('/auth');

export {
    router as authRoutes
};