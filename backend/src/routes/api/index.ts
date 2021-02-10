import { Router } from 'express';
import postsRouter from './posts';

const router = Router();

router.use('/posts', postsRouter);

export default router;
