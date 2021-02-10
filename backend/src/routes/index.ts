import { Router } from 'express';
import ApiRouter from './api';

const router = Router();

router.use('/api', ApiRouter);

export default router;
