import { Router } from 'express';

const router = Router();

router.get('/:id', (req, res) => {
  const clientRequestId = req.params.id;
  res.send(`My id is ${clientRequestId} HEHE`);
});

export default router;
