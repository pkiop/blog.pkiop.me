import { Router } from 'express';

const router = Router();

const data = [
  {
    id: 1,
    name: 'hello',
    texts: `
# 제목입니다.    

## 소제목.  

### 소소제목.  

#### 쏘소소제목.  

* 불릿1입니다.
* 불릿2입니다.

- [ ] 체크박스입니다.

> dnfkl

그냥적은 글

\`\`\`ts
const abc = 'abc';
function ab() {
  return abc;
}
\`\`\`

\` samplecode \`


`,
  },
  {
    id: 2,
    name: 'bye',
    texts: `# 제목입니다.  
    ## 글입니다.  
    - 불릿1입니다.
    - 불릿2입니다.
    - [ ] 체크박스입니다.  `,
  },
  {
    id: 3,
    name: 'nice',
    texts: `# 제목입니다.  
    ## 글입니다.  
    - 불릿1입니다.
    - 불릿2입니다.
    - [ ] 체크박스입니다.  `,
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

router.post('/', (req, res) => {
  res.send('hello');
});

export default router;
