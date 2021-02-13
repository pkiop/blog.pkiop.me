import { Router } from 'express';

const router = Router();

const data = [
  {
    id: 1,
    name: 'hello',
  },
  {
    id: 2,
    name: 'bye',
  },
  {
    id: 3,
    name: 'nice',
  },
];

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const clientRequestId = req.params.id;
  const resultData = data.find((el: any) => {
    return el.id === Number(clientRequestId);
  });
  res.send(resultData);
});

export default router;
