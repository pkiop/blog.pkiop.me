---
slug: 'boj-js/1001'
date: '2021-07-24'
title: '백준 1001 javascript | nodejs '
summary: '백준 1001 javascript | nodejs'
mainCategory: '생각'
subCategory: '개발'
tag: ['백준', 'AWS', 'CSS']
readTime: 1
---

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  // Write your code
  console.log(A - B);
}
```
