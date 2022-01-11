CREATE TABLE article ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(255) NOT NULL, 
  summary VARCHAR(500) NOT NULL,
  createAt DATETIME NOT NULL,
  updateAt DATETIME NOT NULL,
  slug VARCHAR(64) NOT NULL, 
  mainCategoryId INT NOT NULL, 
  subCategoryId INT NOT NULL, 
  readTime FLOAT(4) NOT NULL,
  contents TEXT NOT NULL,
  showAt DATETIME NOT NULL 

) ENGINE=INNODB; 


ALTER TABLE article
ADD FOREIGN KEY(mainCategoryId) REFERENCES category(id);

ALTER TABLE article
ADD FOREIGN KEY(subCategoryId) REFERENCES category(id);


    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2438 javascript | nodejs", "백준 2438 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2438" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    // 별
    for (let line = 1; line <= N; ++line) {
        const starCnt = line;
        let printString = '';
        for (let i = 0; i < starCnt; ++i) {
            printString += '*';
        }
        console.log(printString);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (1, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10809 javascript | nodejs", "백준 10809 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-10809" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(S) {
    // 알파벳 소문자 => 26 a-z
    // 길이가 26인 배열 answerArray. 배열의 0번째는 a, 배열의 1번째 b
    // b가 나왔을 때 -> answerArray[1] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
    // a가 나왔을 때 -> answerArray[0] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
    // b의 ASCII : 98 - 97 => 1
    // a의 ASCII : 97 - 97 => 0

    let answerArray = new Array(26).fill(-1);
    for (let i = 0; i < S.length; ++i) {
        let nowChar = S[i];
        let answerArrayIdx = nowChar.charCodeAt() - 97;
        if (answerArray[answerArrayIdx] === -1) {
            answerArray[answerArrayIdx] = i;
        }
    }

    let answer = '';
    for (let i = 0; i < answerArray.length; ++i) {
        answer += answerArray[i] + ' ';
        // process.stdout.write(answerArray[i] + ' ');
    }
    console.log(answer);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (2, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b11720 javascript | nodejs", "백준 b11720 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-11720" , 1, 5, 1, "

```javascript {numberLines: 1} {numberLines}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(N, numbers) {
    let sum = 0;
    for (let i = 0; i < N; ++i) {
        sum += +numbers[i];
    }
    console.log(sum);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (3, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 8393 javascript | nodejs", "백준 8393 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-8393" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        // sum = sum + i;
        sum += i;
    }
    console.log(sum);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (4, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b1654 javascript | nodejs", "백준 b1654 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-1654" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(char) {
    console.log(char.charCodeAt());
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (5, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10818 javascript | nodejs", "백준 10818 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-10818" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input[1].split(' ').map((item) => +item);

solution(arrayLength, items);

function solution(arrayLength, items) {
    let min = 1000001;
    let max = -1000001;

    for (let i = 0; i < arrayLength; ++i) {
        item = items[i];
        if (min > item) {
            min = item;
        }
        if (max < item) {
            max = item;
        }
    }
    console.log(`${min} ${max}`);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (6, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b2908 javascript | nodejs", "백준 b2908 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-2908" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let splitedInput = input[0].split(' ');

const reversePrint = (str) => {
    let output = '';
    for (let i = 2; i >= 0; --i) {
        output += str[i];
    }
    console.log(output);
};

solution(splitedInput[0], splitedInput[1]);

function solution(A, B) {
    for (let i = 2; i >= 0; --i) {
        let nowA = A[i];
        let nowB = B[i];
        if (nowA > nowB) {
            reversePrint(A);
            return;
        } else if (nowA < nowB) {
            reversePrint(B);
            return;
        }
    }
}

function solution2(A, B) {
    const a = +[...A].reverse().join('');
    const b = +[...B].reverse().join('');
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (7, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10869 javascript | nodejs", "백준 10869 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10869" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(Math.floor(A / B));
    console.log(A % B);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (8, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2439 javascript | nodejs", "백준 2439 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2439" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    // 별
    for (let line = 1; line <= N; ++line) {
        const starCnt = line;
        const spaceCnt = N - line;
        let printString = '';
        for (let i = 0; i < spaceCnt; ++i) {
            printString += ' ';
        }
        for (let i = 0; i < starCnt; ++i) {
            printString += '*';
        }

        console.log(printString);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (9, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2562 javascript | nodejs", "백준 2562 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-2562" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items) {
    let max = 0;
    let maxIdx = 0;

    for (let i = 0; i < 9; ++i) {
        item = items[i];
        if (max < item) {
            max = item;
            maxIdx = i;
        }
    }
    console.log(max);
    console.log(maxIdx + 1);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (10, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2884 javascript | nodejs", "백준 2884 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2884" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
    // Write your code
    M -= 45; // -1
    if (M < 0) {
        M += 60;
        H -= 1; // -1
    }
    if (H < 0) {
        H = 23;
    }
    console.log(H, M);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (11, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 11021 javascript | nodejs", "백준 11021 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-11021" , 1, 5, 1, "

```javascript {numberLines: 1} {numberLines}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testcaseArray[i].A;
        const B = testcaseArray[i].B;
        console.log(`Case #${i + 1}: ${A + B}`);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (12, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b3197 c++", "백준 b3197 c++", "2021-11-21", "2021-11-21", "/boj-js-cpp-3197" , 1, 5, 1, "

## CODE

```C++
#include <cstring>
#include <iostream>
#include <queue>
#include <string>

using namespace std;

int R, C;
char input[1501][1501];

bool isCleared[1501][1501];
bool visited[1501][1501];
int dx[] = {0, 0, 1, -1};
int dy[] = {1, -1, 0, 0};
int sx, sy, ex, ey;

bool checkRange(int x, int y) { return 0 <= x && x < R && 0 <= y && y < C; }
queue<pair<pair<int, int>, int> > iceQueue;

void findIce() {
  memset(isCleared, 0, sizeof(isCleared));
  for (int i = 0; i < R; ++i) {
    for (int j = 0; j < C; ++j) {
      if (input[i][j] == '.') {
        for (int k = 0; k < 4; ++k) {
          int nx = i + dx[k];
          int ny = j + dy[k];
          if (checkRange(nx, ny) && !isCleared[i][j]) {
            if (input[nx][ny] == 'X') {
              iceQueue.push(make_pair(make_pair(nx, ny), 1));
              isCleared[nx][ny] = true;
            }
          }
        }
      }
    }
  }
}

void clearIce() {
  int qLength = iceQueue.size();
  while (qLength--) {
    int nowX = iceQueue.front().first.first;
    int nowY = iceQueue.front().first.second;
    int nowDepth = iceQueue.front().second;
    iceQueue.pop();
    for (int k = 0; k < 4; ++k) {
      int nx = nowX + dx[k];
      int ny = nowY + dy[k];
      if (checkRange(nx, ny) && !isCleared[nx][ny]) {
        if (input[nx][ny] == 'X') {
          iceQueue.push(make_pair(make_pair(nx, ny), nowDepth + 1));
          isCleared[nx][ny] = true;
        }
      }
    }
    input[nowX][nowY] = '.';
  }
}

void printInput(int sx = -1, int sy = -1, int ex = -1, int ey = -1) {
  for (int i = 0; i < R; ++i) {
    for (int j = 0; j < C; ++j) {
      if (i == sx && j == sy) {
        cout << 'S' << ' ';
      } else if (i == ex && j == ey) {
        cout << 'E' << ' ';
      } else {
        cout << input[i][j] << ' ';
      }
    }
    cout << endl;
  }
  cout << endl;
}

struct mydata {
  int sx;
  int sy;
  int depth;
};

bool visit = false;
queue<pair<pair<int, int>, int> > nextStart;
void dfs(int x, int y, int depth, bool isFirstTry = false) {
  if (x == ex && y == ey) {
    visit = true;
    return;
  };
  for (int k = 0; k < 4; ++k) {
    int nx = x + dx[k];
    int ny = y + dy[k];
    if (checkRange(nx, ny) && input[nx][ny] != 'X' && !visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(nx, ny, depth, isFirstTry);
    } else if (checkRange(nx, ny) && input[nx][ny] == 'X' && !visited[nx][ny]) {
      nextStart.push(make_pair(make_pair(nx, ny), depth));
      visited[nx][ny] = true;
    }
  }
}

int main() {
  cin >> R >> C;
  bool isFirst = true;
  for (int i = 0; i < R; ++i) {
    string s;
    cin >> s;
    for (int j = 0; j < C; ++j) {
      input[i][j] = s[j];
      if (input[i][j] == 'L') {
        if (isFirst) {
          sx = i, sy = j;
          isFirst = false;
        } else {
          ex = i, ey = j;
        }
        input[i][j] = '.';
      }
    }
  }
  nextStart.push(make_pair(make_pair(sx, sy), 0));
  findIce();
  for (int i = 0; i < max(R, C); ++i) {
    int nowDepth = nextStart.front().second;
    // cout << \" ice length : \" << iceQueue.size() << endl;
    while (nowDepth == i) {
      int nx = nextStart.front().first.first;
      int ny = nextStart.front().first.second;
      nowDepth = nextStart.front().second;
      if (input[nx][ny] == 'X') break;
      nextStart.pop();
      dfs(nx, ny, i + 1, i == 0);
      if (visit) {
        cout << i << endl;
        return 0;
      }
    }
    clearIce();
    // printInput();
  }
  return 0;
};
```

## 문제링크

https://www.acmicpc.net/problem/3197

## 생각

처음 문제를 제대로 안읽고 두 백조가 각각 이동하고 얼음도 녹는 상황에서 두 백조가 만나는 최소시간을 찾는 문제로 생각하고 풀었다.

매 시간마다 R\*C 만큼 for문을 돌며 으로 얼음을 탐색해 제 시간에 얼음 녹이는 코드를 짰다.

이후에 두 백조가 만날 수 있기만 하면 된다는 걸 알고 쉬운 문제네. 하고 이 얼음 녹이는 코드와 얼음 녹이기 -> 한 백조에서 bfs 돌리기로 문제를 풀어서 냈다.

당연히 시간초과 날 것 같았고 났다.

최적화할 부분을 생각해봤는데 우선 얼음을 녹일때마다 R*C 만큼 돌면 비효율적이고, 매번 백조가 갈 수 있는 모든 공간을 bfs로 탐 색할 필요 없었다.
백조 입장에선 얼음이 녹았으면 다시 처음부터 돌 필요 없이 얼음 때문에 더 못갔던 지점부터 시작하면 된다. 그리고 그 이전 타임에 탐색했던 곳은 다시 갈 필요 없기 때문에 visited에 남겨둔다.
얼음 녹이는 입장에서도 모든 곳 탐색할 필요 없이 자기 시간에 녹였던 것 옆에 있는 얼음이 다음 녹이는 곳이다. 그 점을 기록해두면 R*C 를 매 시간만큼이 아닌 한 문제를 풀기위해 한번만 돌면 됐다.

해서 문제를 풀었다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (13, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b2675 javascript | nodejs", "백준 b2675 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-2675" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let rsArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const inputRS = input[i];
    const splitedInputRS = inputRS.split(' ');
    rsArray.push({
        R: +splitedInputRS[0],
        S: splitedInputRS[1],
    });
}

solution(+input[0], rsArray);

function solution(N, rsArray) {
    for (let i = 0; i < N; ++i) {
        let { R, S } = rsArray[i];

        let P = '';
        for (let j = 0; j < S.length; ++j) {
            for (let k = 0; k < R; ++k) {
                P += S[j];
            }
        }
        console.log(P);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (14, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 9498 javascript | nodejs", "백준 9498 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-9498" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(num) {
    // Write your code
    if (90 <= num && num <= 100) {
        console.log('A');
    } else if (80 <= num && num <= 89) {
        console.log('B');
    } else if (70 <= num && num <= 79) {
        console.log('C');
    } else if (60 <= num && num <= 69) {
        console.log('D');
    } else {
        console.log('F');
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (15, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1065 javascript | nodejs", "백준 1065 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-1065" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function f(num) {
    const strNum = String(num);
    if (strNum.length <= 2) {
        return true;
    }
    const diff = +strNum[1] - +strNum[0];
    let beforeNum = +strNum[1];
    for (let i = 2; i < strNum.length; ++i) {
        if (strNum[i] - beforeNum !== diff) {
            return false;
        }
        beforeNum = +strNum[i];
    }
    return true;
}

function solution(N) {
    let cnt = 0;
    for (let i = 1; i <= N; ++i) {
        if (f(i)) {
            cnt++;
        }
    }
    console.log(cnt);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (16, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1000 javascript | nodejs", "백준 1000 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-1000" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A + B);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (17, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b1316 javascript | nodejs", "백준 b1316 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-1316" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input.slice(1));

function solution(N, arr) {
    let answer = 0;
    for (let i = 0; i < N; ++i) {
        let nowS = arr[i];

        let obj = {};

        let nowContC = nowS[0];
        obj[nowContC] = true;

        let isGroupWord = true;
        for (let j = 1; j < nowS.length; ++j) {
            if (nowContC !== nowS[j]) {
                if (obj[nowS[j]]) {
                    isGroupWord = false;
                } else {
                    nowContC = nowS[j];
                    obj[nowS[j]] = true;
                }
            }
        }
        if (isGroupWord) {
            answer++;
        }
    }
    console.log(answer);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (18, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1001 javascript | nodejs ", "백준 1001 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-1001" , 1, 5, 1, "

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
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (19, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1110 javascript | nodejs", "백준 1110 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-1110" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let makeNum = N;
    let ans = 0;
    while (makeNum !== N || ans === 0) {
        let ten;
        let one;
        if (makeNum >= 10) {
            ten = +String(makeNum)[0];
            one = +String(makeNum)[1];
        } else {
            ten = 0;
            one = +String(makeNum)[0];
        }

        makeNum = ten + one;
        let makeNumOne;
        if (makeNum >= 10) {
            makeNumOne = +String(makeNum)[1];
        } else {
            makeNumOne = +String(makeNum)[0];
        }
        makeNum = +(String(one) + String(makeNumOne));

        ans++;
    }

    console.log(ans);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (20, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2577 javascript | nodejs", "백준 2577 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-2577" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items) {
    const num = items[0] * items[1] * items[2];
    const strNum = String(num);
    const answer = Array(10).fill(0);
    for (let i = 0; i < strNum.length; ++i) {
        const nowChar = +strNum[i];
        answer[nowChar]++;
    }
    for (let i = 0; i < answer.length; ++i) {
        console.log(answer[i]);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (21, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10952 javascript | nodejs", "백준 10952 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10952" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; ; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
    if (tempValue[0] === 0 && tempValue[1] === 0) {
        break;
    }
}

solution(testCaseArray);

function solution(testcaseArray) {
    let A = testcaseArray[0].A;
    let B = testcaseArray[0].B;
    let idx = 1;
    while (A !== 0 || B !== 0) {
        console.log(A + B);
        A = testcaseArray[idx].A;
        B = testcaseArray[idx].B;
        idx++;
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (22, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2741 javascript | nodejs", "백준 2741 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2741" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(Number(input[0]));

// 시간초과가 남
function solution(N) {
    for (let i = 1; i <= N; ++i) {
        console.log(i);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (23, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b1152 javascript | nodejs", "백준 b1152 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-1152" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let splitedStr = str.split(' ');

    let cnt = 0;
    for (let i = 0; i < splitedStr.length; ++i) {
        if (splitedStr[i].length !== 0) {
            cnt++;
        }
    }
    console.log(cnt);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (24, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10951 javascript | nodejs", "백준 10951 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10951" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; i < input.length; ++i) {
    if (input[i] === '') {
        break;
    }
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testCaseArray);

function solution(testcaseArray) {
    let A = 0;
    let B = 0;
    let idx = 0;
    while (idx !== testcaseArray.length) {
        A = testcaseArray[idx].A;
        B = testcaseArray[idx].B;
        console.log(A + B);
        idx++;
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (25, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2742 javascript | nodejs", "백준 2742 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2742" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

// 시간초과가 남
function solution(N) {
    for (let i = N; i >= 1; --i) {
        console.log(i);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (26, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 11022 javascript | nodejs", "백준 11022 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-11022" , 1, 5, 1, "

```javascript {numberLines: 1} {numberLines}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testcaseArray[i].A;
        const B = testcaseArray[i].B;
        console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (27, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b1157 javascript | nodejs", "백준 b1157 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-1157" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let obj = {};
    for (let i = 0; i < str.length; ++i) {
        let nowChar = str[i].toUpperCase();
        if (obj[nowChar]) {
            obj[nowChar]++;
        } else {
            obj[nowChar] = 1;
        }
    }
    let maxValue = -1;
    let maxChar = '';
    let isDuplicated = false;
    for (const el in obj) {
        if (obj[el] > maxValue) {
            maxValue = obj[el];
            maxChar = el;
            isDuplicated = false;
        } else if (obj[el] === maxValue) {
            isDuplicated = true;
        }
    }
    if (isDuplicated) {
        console.log('?');
    } else {
        console.log(maxChar);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (28, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 3052 javascript | nodejs", "백준 3052 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-3052" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items) {
    const answer = Array(42).fill(0);
    for (let i = 0; i < 10; ++i) {
        const nowChar = +items[i] % 42;
        answer[nowChar]++;
    }
    let cnt = 0;
    for (let i = 0; i < answer.length; ++i) {
        if (answer[i] !== 0) {
            cnt++;
        }
    }
    console.log(cnt);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (29, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 4673 javascript | nodejs", "백준 4673 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-4673" , 1, 5, 1, "

```javascript {numberLines: 1}
solution();

function d(num) {
    let sum = 0;
    const strNum = String(num);
    for (let i = 0; i < strNum.length; ++i) {
        sum += +strNum[i];
    }
    return num + sum;
}

function solution() {
    const arr = Array(10001).fill(0);
    for (let i = 1; i <= 10000; ++i) {
        const ans = d(i);
        if (ans <= 10000) {
            arr[ans]++;
        }
    }
    for (let i = 1; i <= 10000; ++i) {
        if (arr[i] === 0) {
            console.log(i);
        }
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (30, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 14681 javascript | nodejs", "백준 14681 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-14681" , 1, 5, 1, "

```javascript {numberLines}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0], input[1]);
    process.exit();
});

function solution(x, y) {
    let ans = 0;
    if (x > 0 && y > 0) {
        ans = 1;
    }
    if (x < 0 && y > 0) {
        ans = 2;
    }
    if (x < 0 && y < 0) {
        ans = 3;
    }
    if (x > 0 && y < 0) {
        ans = 4;
    }

    console.log(ans);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (31, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b2941 javascript | nodejs", "백준 b2941 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-2941" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let answer = 0;
    for (let i = 0; i < str.length; ++i) {
        let c = str[i];
        answer++;

        if (c === 'c') {
            let nextC = str[i + 1];
            if (nextC === '=' || nextC === '-') {
                i = i + 1;
                continue;
            }
        }

        if (c === 'd') {
            let nextC = str[i + 1];
            if (nextC === '-') {
                i = i + 1;
                continue;
            }
            if (i < str.length - 2) {
                let nextNextC = str[i + 2];
                if (nextC === 'z' && nextNextC === '=') {
                    i = i + 2;
                    continue;
                }
            }
        }

        if (c === 'l' || c === 'n') {
            let nextC = str[i + 1];
            if (nextC === 'j') {
                i = i + 1;
                continue;
            }
        }

        if (c === 's' || c === 'z') {
            let nextC = str[i + 1];
            if (nextC === '=') {
                i = i + 1;
                continue;
            }
        }
    }
    console.log(answer);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (32, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2753 javascript | nodejs", "백준 2753 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2753" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
        console.log(1);
        return;
    }
    console.log(0);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (33, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10871 javascript | nodejs", "백준 10871 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10871" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
    const answerArray = [];
    for (let i = 0; i < N; ++i) {
        if (A[i] < X) {
            answerArray.push(A[i]);
        }
    }

    console.log(answerArray.join(' '));
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (34, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1330 javascript | nodejs", "백준 1330 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-1330" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    if (A > B) {
        console.log('>');
    }
    if (A < B) {
        console.log('<');
    }
    if (A === B) {
        console.log('==');
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (35, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10950 javascript | nodejs", "백준 10950 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10950" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testcaseArray[i].A;
        const B = testcaseArray[i].B;
        console.log(A + B);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (36, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2739 javascript | nodejs", "백준 2739 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2739" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    for (let i = 1; i <= 9; ++i) {
        // console.log(N + ' * ' + i + ' = ' + N * i);
        console.log(`${N} * ${i} = ${N * i}`);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (37, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 1008 javascript | nodejs", "백준 1008 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-1008" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A / B);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (38, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 10998 javascript | nodejs", "백준 10998 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-10998" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A * B);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (39, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 8958 javascript | nodejs", "백준 8958 javascript | nodejs", "2021-08-09", "2021-08-09", "/boj-js-8958" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input.slice(1);

solution(arrayLength, items);

function solution(arrayLength, items) {
    for (let i = 0; i < arrayLength; ++i) {
        const OXList = items[i];
        let oCnt = 0;
        let score = 0;
        for (let j = 0; j < OXList.length; ++j) {
            const OorX = OXList[j];
            if (OorX === 'O') {
                oCnt++;
                score += oCnt;
            } else {
                oCnt = 0;
            }
        }

        console.log(score);
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (40, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 4344 javascript", "상위 컴포넌트에 width를 지정하지 않으면 하위 컴포넌트의 width에 따라 지정하는게 일반적인데 하위 컴포넌트 모두 width가 0인데도 상위 컴포넌트 width가 아닐 때 참고하면 좋은 글", "2021-07-24", "2021-07-24", "/boj-js-4344" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);

function solution(C, testCase) {
    // Write your code

    for (let testCaseIdx = 0; testCaseIdx < C; ++testCaseIdx) {
        const n = testCase[testCaseIdx].N;
        const arr = testCase[testCaseIdx].arr;

        let scoreSum = 0;
        for (let i = 0; i < n; ++i) {
            scoreSum += arr[i];
        }

        const average = scoreSum / n;

        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            if (average < arr[i]) {
                cnt++;
            }
        }

        const ratio = ((cnt / n) * 100).toFixed(3);
        console.log(ratio + '%');
    }
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (41, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 2588 javascript | nodejs", "백준 2588 javascript | nodejs", "2021-07-24", "2021-07-24", "/boj-js-2588" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    const stringB = String(B);
    const one = +stringB[2];
    const ten = +stringB[1];
    const hun = +stringB[0];
    console.log(A * one);
    console.log(A * ten);
    console.log(A * hun);
    console.log(A * B);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (42, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("백준 b5622 javascript | nodejs", "백준 b5622 javascript | nodejs", "2021-08-21", "2021-08-21", "/boj-js-5622" , 1, 5, 1, "

```javascript {numberLines: 1}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let answer = 0;
    for (let i = 0; i < str.length; ++i) {
        let c = str[i];

        if (c >= 'W') {
            answer += 10;
        } else if (c >= 'T') {
            answer += 9;
        } else if (c >= 'P') {
            answer += 8;
        } else if (c >= 'M') {
            answer += 7;
        } else if (c >= 'J') {
            answer += 6;
        } else if (c >= 'G') {
            answer += 5;
        } else if (c >= 'D') {
            answer += 4;
        } else if (c >= 'A') {
            answer += 3;
        }
    }
    console.log(answer);
}
```
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (43, 9);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("Unscripted", "Unscripted 책을 읽고 느낀점을 간단하게 요약한 글", "2021-06-17", "2021-06-17", "/unscripted" , 6, 9, 2, "

## 각본을 탈출하자

통제 가능한 무한한 레버리지에 투자하자 .

## 각본대로의 삶(scripted)

열심히 공부해서 대학을 가라. 그리고 대기업이나 공기업에 취업해라.
멋진 차, 멋진 옷을 사라. 열심히 일하고 열심히 놀아라. 흥청망청 돈을 써라.

그러다 때가 되면(결혼, 출산) 아껴라. 주택담보대출, 자식 교육비에 쓰고 남은 돈은 모조리 아껴서 저축하고, 주식에 투자하고 떨어지지 않도록 기도해라.

그렇게 노후 준비를해서 65세에 사람답게 살기만을 기다려라. 단, 65세까진 무조건 일해야한다.

## 죽기 전까지 일하도록 설계된 각본대로 살고 있다.

각본대로의 삶이 관습적 지혜로 사회에 만연해있다.

각본에 벗어난 삶을 살면 언론, 정부, 금융, 기업, 교육. 심지어 가족과 친구들까지 인생이 엉망이 되었다고 한다.

부자가 되려면 모든 지출을 줄여야 될 수 있다거나, 운이 좋아야한다거나, 대기업에 가서 열심히 일해야 한다고 가르친다.

각본에서 벗어난 삶을 추구하려 하면 부동산, 주식, 비트코인등이 급등했니, 언제 투자했으면 얼마를 벌었니라는 이야기로 시끄럽다. 이 투자를 성공시키려면 죽도록 일하고 소비를 줄여 저축을 해야했어야 한다. 결국 목적은 죽도록 일하게 유도하는 것이다.

## 각본 탈출

각본에서 벗어난 삶을 살게 되면 삶이 불안정해진다. 평범하게 예측 가능했던 미래가 예측할 수 없게 된다. 좋은 직장등에서 얻을 수 있는 자존감등은 각본을 벗어나면 성공하기 까지 없다. 각본탈출 후 성공하면 막대한 부와 명성을 얻게 되는데 그 전까진 평범함만 못 할 수 있다.

각본대로만 살아야하는게 아님을 먼저 깨달아야 한다. 그리고 평범하고 안정적인게 삶에서 중요한지, 각본대로는 도저히 살 수 없고 각본 탈출을 위해 고난과 역경을 이겨낼 수 있는지 먼저 결정하자.

만약 탈출로 결정했다면 각본 탈출의 목표는 통제 가능한 무한한 레버리지(나의 비즈니스)를 만들어 투자하는 것이다. 각본 탈출의 방법에 대해 궁금하면 자세하게 설명되어 있는 이 책을 읽어보자.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("잘될 운명으로 가는 운의 알고리즘", "잘될 운명으로 가는 운의 알고리즘을 읽고 든 생각", "2021-09-24", "2021-09-24", "/algorithm-of-luck" , 6, 9, 2, "

## 개요

인생은 운칠기삼이라는 말이 있다. 어떤 일이 있어 운이 7할이나 된다는 이야기다. 살면서 찾아왔던 많은 기회들을 돌아보면 운이 좋았었던게 대부분이다.

운이라는건 통제불가능한 요소로 보인다. 하지만 어느정도는 운이라는 것도 내가 하기 나름으로 높일 수 있는 것이라고 말하는 책과 영상을 보게 됐다. 운을 높일 수 있다는 말이 어느정도 신빙성이 있어 보였다. 운이라는 것은 워낙 성공에 중요하기에 한번쯤 운에관한 책을 읽어볼 법 하다고 생각해서 이 책을 읽게 되었다.

또 꼭 운 뿐만 아니라 좋은 인생을 살기 위해 한번쯤 생각해 볼 내용도 있어 기록해뒀던 걸 정리한다 .

## 내용

### 균형

인생은 다섯가지 운의 요소가 있다. 재물운, 건강운, 인간관계운, 명예운, 가족관계운이다. 다섯가지 운의 총 합은 100이고, 하나가 높아지면 그만큼 다른 운이 낮아진다. 예를들어 열심히 일해서 대기업임원이 되었다면 재물운과 명예을 높여서 이룬 것인데, 그만큼 건강, 가족관계, 인간관계 운을 낮춘 것이다. 바람직한 인생을 위해선 다섯가지의 운을 균형을 맞춰야 한다.

운을 높이고 낮췄다는 건 말도 안되는 소리라고 생각한다. 하지만 살면서 중요하게 생각하는 것을 위와 같이 비중을 두고 살아가는 건 맞다고 생각한다. 기존에는 성공을 목표로 한다면 재물운, 명에운에 모든 역량을 쏟고 나머지는 덜 중요하게 생각해야 효율적으로 성공할 수 있다고 생각했다. 하지만 살면서 얻었던 기회들은 돌아보면 내 능력 + 좋은 사람 + 안정적인 가족관계 + 튼튼한 체력 + 좋은 평판 이 갖춰졌기 때문에 얻을 수 있었다.

균형을 맞춰야 하는 건 큰 깨달음이었다. 균형을 맞추면 성공을 위해선 비효율적으로 보일 수 있다. 산술적으로는 재물, 명예에 100에 가깝게 쓸 수록 더 빨리 성공할 수 있다. 하지만 균형을 맞추고 성장한다면 운의 총 합이 100에서 110, 120 이렇게 성장한다고 생각한다. 그럼 균형잡힌 상황에서도 재물, 명예에 충분히 높은 비중을 둘 수 있다.

### 여유

여유로운 상태에 있어야 기회를 잡을 수 있다. 예를 들어 현금 여유가 있어야 주가가 폭락했을 때 좋은 주식을 살 수 있다. 하는 일을 여유롭게 하고 있어야 기회가 찾아왔을 때 남겨뒀던 여유를 들이부어 기회를 잡을 수 있다. 여유롭게 살아야 인간관계에서 더 편안하고 즐거운 사람이 될 수 있다.

여유는 사치고 항상 100% 일하는 상태로 있어야 효율적인 것으로 보인다. 하지만 그리 중요하지 않은 것에 몰입해있다가 실제 기회가 왔을 때 놓칠 수 있다. 더 심각한 것은 몰입한 상태에 있느라 좋은 기회가 왔는지도 모르고 놓친다.

여유로운 상태에 있다고 능률이 엄청나게 떨어지는 것은 아니다. 할 땐 제대로 하고, 쉴 땐 충분히 쉬면 전혀 쉬지 않을 때보다 10~20%의 능률저하가 있을 것이다. 더 심하지 않은 이유는 하루에 오랜시간 집중하면 그만큼 효율이 떨어지기 때문이다. 또 쉬지않는 상태가 지속되면 버티지 못하고 번아웃이 온다. 번아웃이 오는 케이스를 고려하면 여유로운 상태가 무조건 이득이다.

여유를 항상 갖고 있자.

## 습

반복적으로 운이 안좋아서 기회를 못 잡을 수 있다. 비슷한 이유가 반복되어 못잡게 된다면 자기 무의식적인 행동이나 습관에 문제가 있을 수 있다.

말을 습관적으로 공격적으로하거나 남에게 불쾌감을 주는 행동, 일의 능률을 떨어뜨리는 습관등이 있다.

이 습관을 갖고 있으면 운이 떨어진다. 기회는 사람, 능력에서 오는데 습관적으로 이 것들을 내 인생에 도움되지 않는 방향으로 두고 있기 때문이다.

내 습관을 항상 관리하고 좋은 방향으로 유도하도록 노력하자.

### 베품

베풀줄 알아야한다. 좋은 영향을 세상에 미치는 만큼 나에게 돌아와 좋은 운이 된다. 베풀면 돌아온다고 믿어라. 좋은 영향력은 무의식적으로, 알수없는 그 무언가에 영향을 미쳐 나에게 좋은 일이 되어 돌아온다.

### 적을 만들지 마라, 분노하지 마라

베품과 반대로 적을 만들지 마라. 분노하지 마라. 현명한 사람은 나를 공격하는 사람의 공격은 피하고 오히려 공격한 사람을 내 편으로 만든다. 우둔한 사람은 공격은 공격대로 맞고 상대방의 원한을 산다.

대부분 분노하기 때문이다. 화내지 말자. 숨 한번 크게 쉬고 돌아보면 화내지 않아도 된다. 어떻게 원한을 피하고 내 편으로 만들 수 있을 지 고민하자.

## 결론

나는 타로, 사주등을 정말 싫어한다. 내 돈주고 아무 과학적 근거가 없는 카드나 사주에 그 무엇등을 통해 좋은 점이면 본전, 나쁜 점이면 기분만 나빠지고 타로, 사주에 깊이 빠진 사람은 그 점 결과에 따라 이상한 선택을 하게 된다.

하지만 타로, 사주를 보는 사람이 오랜 기간동안 많은 사람의 인생 이야기를 들으면서 나름대로 깨닫고 조언해줬던 것은 점 보는 사람의 점 보는 능력을 향상시켜준다고 생각한다.

저자의 오랜기간 타로로 상담을 해줬던 내용을 바탕으로 쓰여진 이 책은 분명 인생을 살아가는데 도움이 되는 책이었다. 타로, 사주등 비 과학적인 요소를 중간에 두지 않고 그냥 상담소를 여는 건 어떨까 생각이 든다.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("우리의 뇌는 어떻게 배우는가", "가설, 실험, 피드백, 배움의 확장으로 이루어지는 우리의 뇌는 어떻게 배우는가를 읽고 깨달은 학습방법에 대한 글", "2021-07-18", "2021-07-18", "/how-we-learn" , 6, 9, 1, "

## 뇌 과학 관련 컨텐츠를 좋아하는 이유

지식노동자로 앞으로 오랫동안 살아가면서 가장 중요한 역량 중 하나는 새로운 걸 빠르고 정확하게 배우는 능력이다. 뇌가 동작하는 방법, 효율적인 학습방법, 뇌 기능을 향상시키는 법등을 알고 현재보다 개선시킬 수 있다면 앞으로 더 좋은 성과를 내고 이루고 싶은 일을 더 잘 이루게 될 것이라 생각해서 좋아한다.

정리하는 뇌라는 책을 처음 읽으면서 뇌 과학이라는 분야가 있고 관련 컨텐츠가 유튜브나 블로그 글 등 많이 있다는 걸 알게됐다. 나에게 그 컨텐츠들은 말하는 뇌 과학 이야기들은 보통 다 상식적으로 그렇지 않을까라고 생각했던 것들을 그렇다라고 확신시켜주는 효용이 있었다. 가장 인상깊었고 실천하는 건 인간의 뇌는 멀티테스킹에 적합하지 않고 만약 2가지 이상의 일을 번갈아가면서 하면 한가지 일을 집중했을 때 보다 능률도 좋지 않고 심지어 뇌 에너지도 더 빨리 소모한다는 것이다. 그 뒤로 스마트폰은 항상 무음 상태로 두고 알림도 모두 나오지 않게 했다. 이렇게 해서 눈에띄게 능률향상 되는걸 느꼈다.

## 이 책을 읽게 된 이유

유튜브로 이런저런 뇌 과학 콘텐츠를 소비하면서 뇌 과학지식을 더 알고 싶었다. 그러다 유튜브 신박사TV에서 이 책 광고를 했는데 가장 영향을 크게 미쳤던 건 아마존에서 극찬을 받고 정말 유명한 교수가 썼고 그냥 무조건 읽어야한다는 그런 광고에 끌렸다.

## 책을 읽으면서 들었던 생각

이 책은 읽고 아주 마음에 들었기 때문에 2번이상 읽고 글에 내용을 더 추가할 예정이다. 일단 한번 읽은 과정에서 들었던 느낌을 적는다.

1장에서 머신러닝의 학습방식과 인간의 학습방식을 비교하고 머신러닝 연구의 방향이 인간의 학습방식을 모방하는 과정으로 이루어진다는게 인상깊었다. 배움의 7가지 정의가 나오는데 나름 요약한 건 가설을 세우고 실험을 하며 성공 / 실패 피드백을 받아 지식이 확장되는 것이 배움이라는 것이다. 무언가 뇌 속에 지식을 쑤셔넣는게 아니라 가설을 세우고 실험을 하는 실행주의적인 관점을 강조하는 것이 인상깊었다. 무엇이든 실행했을 때 가장 학습효과가 뛰어난 것에 대한 과학적 증거이다.

2장의 처음은 아기들이 어떻게 학습하는 지에 대한 내용이었는데 역시나 가설 → 실험 → 피드백 → 지식의 확장 과정이었다. 이 과정을 한번 더 상기하는데 우리가 아기때부터 이런 과정으로 학습했고 이것이 가장 효율적인 방향이라는 걸 한번 더 강조하는 느낌이었다. 흥미로웠다. 이 이후의 2장 내용은 너무 지루해서 책을 그냥 그만 읽을까도 많이 고민했지만 꾸역꾸역 읽었다. 그래서 딱히 인상깊게 본 내용은 없다.

3장은 배움의 네 기둥이라는 제목이었다. 이 책의 하이라이트였고 굉장히 인상깊고 몇번 다시 읽어 평생 갖고 가고 싶은 지식이었다.

각각 네 기둥은 주의, 적극적인 참여, 에러 피드백, 통합으로 이루어진다. 주의는 우리는 집중 할 곳에 온전히 집중해야 한다는 것이다. 우리는 눈으로 엄청 넓은 시야를 보지만 초점이 맞은 한 곳에만 집중한다. 신체 장기부터가 하나에 집중하도록 설계되어 있고 이를 참고해서 일을 할 때도 주의를 한 곳에만 두고 방해받지 않도록 해야겠다는 걸 알 수 있다. 적극적인 참여는 역시 가설 → 실험 → 피드백 → 지식의 확장으로 배우는 것에서 가설을 세우고 적극적으로 실험해야한다는 메세지를 던진다. 수동적인 생명체는 배울 수 없다는 내용도 인상깊다. 에러 피드백은 피드백 단계에서 적절한 피드백을 받아야 효율적인 학습이 가능하다는 것이다. 영점 조절을 할 때를 생각해보면 오른쪽으로 약간 빗나갔으면 그 만큼 왼쪽으로 총구를 옮기면 되는 것처럼 발생한 결과에 대해 정확한 피드백을 받아 다음 가설을 더 정확하게 세울 수 있어야 한다는 내용이다. 통합은 이렇게 익힌 지식은 무의식속에 내재화된다는 것이다. 뇌 안에 깊은 곳에 뿌리박혀야 한다는 것인데 이런 작용에 꼭 필요한 게 적절한 수면이라는 것이다. 굉장히 인상깊었고 내가 잠을 줄이려 했던 행동들이 그동안 쌓은 지식을 그냥 날려버리는 비효율적인 행동일 수 있다는 생각을 했다. 이후로는 알람을 아예 꺼버리고 항상 몸이 원하는 대로 자려고 두고 있다. 굉장히 컨디션이 좋고 뇌도 잘 동작해서 평생 이렇게 살려고 한다.

## 결론

이 책 전반에서 강조한 사람이 배우는 방식을 한번 더 정리하면 가설 → 실험 → 피드백 → 지식의 확장이다. 적용할 수 있는 포인트는 무언가 배울 때 그냥 책을 읽더라도 수동적으로 읽는게 아니라 작가의 생각을 생각해보고 이 책 뒷 부분에 어떤 내용이 있을지 가설을 세워보고 등등 바로 적용해 볼 수 있는 점이 많았다. 이렇게 하는게 머리가 빨리 아파오는 느낌이 있어 불편하지만 그 느낌이 뇌가 제대로 일 하고 있다는 피드백으로 생각하고 습관적으로 가설을 세울 수 있도록 해야겠다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (46, 7);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("가진돈은 몽땅써라", "가진돈은 몽땅써라 책 정리와 읽고 든 생각", "2021-07-04", "2021-07-04", "/spend-all-money" , 6, 9, 1, "

## 평생 다시 살 수 없는 지금에 투자해라

맛있는 것 먹고, 좋은 사람 만나서 놀고, 돈으로 시간을 아낄 수 있으면 시간을 아끼고.

## 놀람과 감동, 즐거움, 쾌락이 그 무엇보다 중요한 시대

자원이 없을 땐 아끼는게 맞다. 하지만 현대사회는 자원이 넘쳐난다. 자원이 넘쳐나서 의식주에 대한 고민이 줄고 어떻게 즐겁게 살지가 더 큰 고민이다.

그러므로 잘 놀고 즐기는 사람이 인정받는다. 자원이 넘쳐나질 수록 근면성실보다 잘 놀고 즐기는게 더 가치있어진다.

즐거운 경험으로 잘 놀고 즐기면 그게 자산이 된다. 즐거운 것에 기회가 있다.

## 저축 신앙

인생에서 자꾸 미래의 안정만을 추구한다. 우리나라는 며칠전에 공식적으로 선진국으로 인정받았다.

선진국에 살면 아무 능력 없어도, 아무것도 할 줄 아는게 없어도, 아무것도 하기 싫어도 생존할 수 있는 돈을 받는다. 이보다 더 안정적인 기회가 있을까.

그런데도 더 안정적인 걸 바란다. 돈을 잔뜩 모아두고 혹시 모를 위험에 대비한다. 하고싶은게 있어도 참고 사고싶은게 있어도 참는다. 더욱 안정적이어야 하기 때문이다.

그냥 한국에 태어난 것 만으로도 세계 상위 10%미만의 안정적인 삶이 보장되는데. 자꾸 더 안정적인 걸 추구하는게 정상인지 모르겠다.

## 잘 놀고 즐기면 그걸로 더 돈을 번다

잘 놀고 즐기는게 더 큰 가치를 갖기 때문에 하고 싶은게 있으면 생각하지말고 돈 써서 잘 놀고 즐기는게 맞다.

먹고싶은게 있으면 먹고, 하고싶은게 있으면 (헬스 PT, 클라이밍, 자전거, 등등) 그냥 돈 써서 한다. 좋은 스마트폰이 있으면 그냥 제일 비싼걸 산다. 스마트폰으로 뉴스, 유튜브, ebook 등 소중한 정보를 습득할 때 더 쾌적하게 할 수 있으면 이득이다.

## 내가 가진 가치를 돈으로 바꾸는 방법을 찾아라

그렇게 얻은 경험과 시간을 돈으로 바꿀 방법을 찾아라.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("오케팅", "오케팅이란 마케팅 관련 책을 읽고 든 생각 정리", "2021-07-12", "2021-07-12", "/o-keting" , 6, 9, 2, "

## 책을 읽게 된 계기

퍼스널 브랜딩이라는 키워드로 고민을 많이 하고 있었다. 유튜브도 하고 블로그도 잘 운영하는 방식으로 나를 브랜딩 하면 좋겠다고 생각하고 준비하고 있다. 가장 중요한 건 좋은 컨텐츠를 담는 것이지만 내 컨텐츠를 잘 알릴 수 있도록 마케팅적인 요소도 있으면 좋겠다고 막연하게 생각했다.

그러다 교보문고에서 책을 이것저것 고르다 오케팅이란 책이 눈에 들어왔다. 일단 마케팅 책이라는 건 알겠는데 오는 뭐지? 했었다. 그러고 저자 이름이 바로 아래에 적혀 있었는데 성이 '오' 이셨다. 처음 느낌은 좀 부정적이었다. 마케팅에 마를 본인 성으로 바꾼게 썩 좋아보이지 않았고 약간 세뇌시키려는 느낌의 책일 것 같은게 첫 인상이었다.

그러고 프롤로그를 읽었는데 일단 글이 아주 잘 읽혔고 누구나 마케팅이 필요한 시대라는 워딩이 아주 인상적이었다. 마케팅쪽에서 일하는 사람 뿐만 아니라 직장인, 개인, 프로젝트 등에도 다 마케팅이 필요하다는 주장에 호기심이 생겼고 나에게 적용할만한 요소가 많을 것 같았다. 그래서 구매해서 읽게되었다.

## 저자 → 실행력의 대가

여러 책과 성공하신 분들의 유튜브 영상들을 보면 성공하기 위해 꼭 필요한 역량으로 강조하는게 실행력이다. 그런 점에서 저자는 엄청난 실행력을 가졌다. 굉장히 인상깊었고 첫인상으로 받았던 부정적인 느낌은 사라지고 저자의 생각과 마음가짐을 배우자라는 생각으로 열심히 읽었다. 도전적으로 사는 사람은 항상 성공하는 것 같다. 물론 도전하고 성공한 사람만 책을 쓰고 유튜브 영상을 찍기 때문에 도전적으로 살다 실패한 사람은 내가 볼 수 없어 그렇게 생각할 수 있지만 그럼에도 남들이 하지 않는 선택을 하고, 남들이 하지 않는 행동을 해서 그게 옳다는 걸 증명해 성공해내는 사람은 정말 멋있고 저자가 그런 사람이었다. 저자의 도전적인 행동들을 읽었던 것은 내 무의식에 남아 또 인생에 도전적인 선택의 순간에서 좋은 선택을 하도록 도와줄 것이다.

## 보물선 항해 오케팅 6편 15계

약간 뻔한 이야기들 (대의를 가져라, 제품 이름을 잘 지어라, 뛰어들 분야를 잘 선택해라 등등) 을 순서대로 나열해 둔 파트이자 이 책의 핵심이다. 뻔한 이야기임에도 체계적이고 구체적으로 설명해서 도움되고 언젠가 한번쯤 들어봤던 뻔한 이야기들을 잘 나열하고 구체적인 예시를 들어준 이 글들을 읽는 것으로 직접 내 삶에 어떻게 적용할 수 있을지가 보이는 것 같아 좋았다. 반복해서 읽을 생각이다.

가장 눈에 띄고 감명깊었던 것은 경쟁자를 스승으로 보고 배우라는 것이다. 이것도 어쩌면 뻔한 이야기지만 상기시켜주는게 엄청 의미있다. 이부분을 읽으며 들었던 생각이 나는 경쟁적이긴 하지만 나보다 잘하는 사람을 보는게 두렵고 피하려는 성향이 있다는 걸 깨달았다. 그래서 바로 옆에 나보다 잘 하고 있는 사람을 보고 따라하고 배우려고 하기 보단 멀리 떨어져서 나만의 방법으로 그 사람을 따라잡으려고 했던 것 같다. 굳이 그럴필요 없이 그런 사람을 보고 배우는게 매우 효율적이라는 걸 다시금 생각하게 됐다.

## 마케팅에 대한 생각

어쨌든 이 책을 읽기로 결정하면서 기대했던 건 마케팅에 대해 알게 되는 것이었다. 나는 마케팅에 대해 문외한이었는데 책을 통해서 저자가 어려운 마케팅 이론대신 쉽게 가르쳐준다고 했는데 그래서 마케팅을 하는 사람들은 어려운 이론들을 공부하는 걸 알게 되었다.

그리고 마케팅 == 광고라고 생각했다. 어떻게 널리 알리는지에 대한게 마케팅이라고 생각했는데 마케팅의 단어를 분석해보면 market + ing 으로 시장화라는 걸로 해석할 수 있을 것 같다. 이 단어로 마케팅을 해석해보면 널리 알리는 걸 의미하는 것도 있겠지만 갖고있는 상품을 시장에 내놓을 수 있고 매력적인 상품으로 보일 수 있게 꾸미고 포장하는 걸 의미하는 것도 있다라는 걸 알게되었다. 탄탄한 컨텐츠가 원석이라면 잘 가공해서 시장에 내놓는게 마케팅이다. 널리 알리는 방법은 책에서 알 순 없었지만 그런 방법까지 내가 알 필요는 없었고 나는 좋은 컨텐츠를 만들고 이걸 잘 포장하는 것 까지 하는 건 재미있고 잘 할 수 있을 것 같다
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (48, 5);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("일 잘하는 사람은 글을 잘 씁니다", "글을 쓰면 전문가가 된다. 일 잘하는 사람은 글을 잘 씁니다를 읽고 든 생각", "2021-07-30", "2021-07-30", "/work-well-write-well" , 6, 9, 1, "

## 개요

블로그를 운영하면서 글을 잘 쓰고 싶어서 글 관련된 책을 찾았다. 글 쓰는 것과 관련된 책을 뒤적이던 중 이 책의 프롤로그를 읽었는데 글 쓰기가 직장에서 권력이 된다는 워딩에 끌렸다. 같은 직장인이 있을 때 글 잘 쓰는 직장인이 매우 유리하다는 내용이었다. 개발자로 일하면서 글을 쓸 일은 없는데 일반 직장인은 보통 어떤식으로 일하는지 궁금하기도 했고 글쓰기 만으로 실질적인 이득을 주는 사례들이 흥미로울 것 같아 계속 읽었다. 끝까지 읽어서 글 쓰는 것에 대해 얻은 인사이트는 없지만 가장 크게 깨달음을 준 내용을 아래에 적으려 한다.

## 글을 쓰면 전문가가 된다.

한 주제에 대해 글을 쓰려면 그 주제에 대해 몰입해서 조사하고 생각해야한다. 처음에 그 분야에 전문가가 아닌 사람이라도 주제를 잡고 글을 쓰면 그 과정에서 전문가가 된다. 그 뿐만 아니라 그렇게 만들어진 글을 다른 사람이 볼 때 이 글을 작성한 사람은 전문가라고 생각한다.

이 내용을 읽으면서 Positive Feedback 시스템이 떠오르면서 글 쓰는게 정말 인생에 큰 도움이 된다고 생각했다. 글을 쓰기 위해 깊이있게 공부하고 그 분야에 대해 생각하면서 전문성을 갖게 되고 그 전문성의 정도도 중요하겠지만 좀 부족하더라도 작성된 글은 남아서 다른 사람에게 읽히게 되는데 그 사람은 작성자를 전문가로 여기게 된다. 전문가로 여기기 때문에 이 분야에 대한 예상치 못한 기회가 찾아올 수 있고 그럼 그 기회를 수행하면서 경험과 지식을 쌓고 더 전문가가 된다.

이 내용을 읽으면서 떠오른 건 제로초님과 벨로퍼트님이다. 두 분다 블로그에 좋은 개발 글을 올려서 큰 도움이 되고 강의도 해주셔서 많은 걸 배웠다. 강의와 블로그 글을 보면서 궁금했었다. 어떻게 이런 전문성을 갖고 블로그 글과 강의를 만들 수 있었을까. 그것에 대한 답이 이 내용인 것 같다. 처음부터 지금 수준의 전문성을 갖고 계셨던게 아니라 글을 쓰고 강의를 준비하면서 그런 전문성을 갖게 되었고 만들어낸 컨텐츠로 많은 사람이 전문가로 여겨 더 많은 기회를 그 분들에게 준 것 같다.

## 결론

많은 사람에게 도움을 줄 수 있는 것을 고민해서 좋은 글을 작성하려는 목표를 세웠다. 일단 React 관련 주제로 글을 써야겠다. Hook API를 그냥 쓸 줄만 알지 깊이있는 동작은 아직 설명할 정도로 알지 못하는데 이 부분을 공부하고 생각하고 예제를 만들어서 퀄리티 있는 글을 작성해야겠다. 이걸 시작으로 꾸준히 개발관련 글을 작성해서 얻어지는 예상치 못한 기회가 찾아올 것도 기대가 된다. 이 뿐만 아니라 글을 작성하면서 깊이있는 지식들을 얻게 되는것도 매우 즐거울 것 같다.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("일은 배신하지 않는다", "일은 배신하지 않는다를 읽고 프론트엔드 개발자로서 생각한 앞으로의 성장방향", "2021-07-19", "2021-07-19", "/work-never-betrays-you" , 6, 9, 2, "

## 읽게 된 계기

1년 전 쯤 Interactive Developer 라는 유튜버가 본인이 8년전에 만들었던 개인 프로젝트를 소개하는 영상을 봤다. 개발 뿐만아니라 디자인까지 천재구나라는 생각을 했었다.

그러다 교보문고에 갔는데 이 분의 책이 있었다. 50p정도를 읽었는데 이 분이 고졸이셨고 연봉 1400만원 주는 웹 에이전시에서 시작하셔서 구글에서 인정받는 인터렉티브 디벨로퍼까지 되셨다는 걸 알게 됐다. 어떻게 성공적으로 성장할 수 있었는지 궁금해서 읽게 되었다.

## 기본이 중요

### 프레임워크 중독

프론트엔드 개발자가 되려면 웹 프레임워크 학습은 거의 필수처럼 보인다. 어떤 Job Description에도 React, Vue, Anguler 개발 경험을 우대하고 심지어 필수인 곳도 있다. 또 실제로 개발을 할 때 웹 프레임워크 위에서 개발하다 바닐라 자바스크립트로 개발하려고 하면 답답해서 하기가 싫어질 지경이다.

거기에 더해서 React는 Next, Vue는 Nuxt 라는 개발의 편의를 더해주는 프레임워크를 또 많이들 쓴다. 써보면 너무 편해서 좋고 어떤 프로젝트 소개에서 우리는 Next를 썼습니다. 이렇게 내가 아직 잘 모르는 기술 스택이 추가되는 걸 보면 더 우와.. 하게 느꼈다.

거기에 더해서 또 Gatsby 등 아예 배포까지 다 해주는 서비스도 생겼다. 이런 것들 한번 써보면 쓰기 전으로 돌아가기 싫다. 너무 편하고 폴더 구조 잡는 거나 라우팅등 지루할 수 있는 걸 알아서 해줘서 재밌는 부분만 집중해서 개발할 수 있기 때문이다.

### 중독의 결과

예전에 HTML5 이전, 아이폰의 등장 이전에 웹은 플래시 플레이어가 대세였다. 많은 웹 개발자들이 action script라는 언어로 플래시 플레이어를 다루는 일을 했던 걸로 안다. 그렇게 대세였던 플래시는 세상이 모바일 위주로 돌아갈 때 모바일 웹 브라우저에서 지원이 원활하지 않았고 HTML5, CSS3에서 새로 추가된 기능들이 플래시를 점점 대체해가서 지금은 쓰이지 않는 기술이 됐다.

저자는 책에서 어떤 프로젝트를 할 때 라이브러리를 그대로 가져다 쓰기 보단 직접 개발하는 걸 중요하게 생각했다. 가져다 쓴 라이브러리는 라이브러리가 가진 한계 이상으로 개발할 수 가 없기 때문이다. 그래서 직접 개발을 하셨는데 이게 실력향상에 큰 도움이 됐다고 했다. 저자도 마찬가지로 플래시로 개발했었지만 기본을 충실하게 공부해서 새로운 세상이 전혀 문제되지 않았다.

마찬가지로 지금은 React, Vue가 대세다. 역사는 반복되기에 프론트엔드 개발자로 일하다 보면 망하는 날이 올 것이다. 그 새로운 세상에서 문제가 되지 않으려면 기본이 중요하다.

## 일을 정말 좋아하는 사람

책을 읽으면서 본인의 일을 정말 좋아하는 사람이라고 느껴졌다. 나도 프론트엔드 개발이 좋아서 시작했지만 저자만큼 일을 좋아하는지 생각해보면 아닌 것 같다. 저자는 일에서 좋은 결과를 얻기 위해 깊이있게 고민하고 오랫동안 고민했다. 또 그걸 바탕으로 수 많은 프로젝트를 하시면서 경험을 쌓았다. 하지만 나는 깊이 있는 고민보단 빠르게 서비스를 만들어내서 써먹는거에 더 관심이 있다. 또 요즘 공부하는 방향은 실용적인 것 보단 HTML, CSS, Javascript, Typescript, React를 더 전문가\"처럼\" 쓰는 사람처럼 보이고 싶어 이론적인 것에 더 치중해서 공부하고 있다. 이렇게 공부하는 근본원인은 남이 내 코드를 보고 개발 관련 대화를 할 때 전문가\"처럼\" 보이고 싶기 때문인 것 같다.

책을 읽고 반성해보면 그렇게 경험도 없는데 코드 깔끔하고 구조적으로 짜는 이론적인 것만 있고 대화할 때 용어가 좀 더 전문적인게 무슨 소용이 있나 싶다. 재미도 없고 말이다.

당장 전문적인 지식이 부족하더라도 계속 개발을 더 하는게 좋을 것 같다. 실제로 개발하면서 겪은 지식이 피가되고 살이 되지 눈으로만 읽은 지식은 다 휘발되어 사라질 것 같다.

## 결론

서비스를 빨리 만들어 보는 것도 좋은 일이었지만 이제는 한 서비스를 깊이있게 고민하고 계속 개선하면서 좋게 만들어보는게 필요한 시점인 것 같다. 이론적인 것도 중요하긴 하겠지만 주된 공부를 이론으로 하지 말고 길게 보고 천천히 익혀나가려고 한다. 그 이론 공부 하던 시간에 서비스를 깊이있게 고민하고 만들어야겠다. 그리고 만들게 될 서비스는 라이브러리를 최대한 쓰지 않고 직접 만들어 보면서 해보려고 한다. 프론트, 백 다 그렇게 하면 좋겠지만 우선 프론트만 그렇게 해야겠다. 이렇게 어떤 세상이 와도 문제가 되지 않는 개발자가 되고싶고 저자만큼 일을 좋아하고 싶다.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("설득의 심리학1", "6가지 설득관련 심리학 원칙에 대한 설득의 심리학1을 읽고 정리한 글", "2021-08-18", "2021-08-18", "/influence-the-psychology-of-persuasion" , 6, 9, 3, "

## 개요

현대사회는 복잡하기 때문에 모든 의사결정을 심사숙고해서 할 수 없다. 과거부터 인간이 생존하기 위해선 빠른 의사결정이 중요했다. 그래서 인간이 가진 보편적인 무의식중의 의사결정 방식들이 있다.

이러한 무의식중의 빠른 의사결정을 책에서는 의사결정의 지름길이라고 한다. 대부분 이 지름길은 다행히 인간에게 이득이 되는 방향으로 동작한다. 하지만 이런 결정들을 이용해 부당한 이득을 취할 수도 있다. 예를 들어 가격이 높은 것은 가격이 낮은 것보다 좋은 물건이고 가치있는 것이라는 직관이 있다. 대체적으로 맞는 말이지만 이를 이용해 가치없는 물건을 비싸게 매겨 가치있는 것처럼 보일 수 있다. 또 도움을 받으면 보답을 하는 것이 무의식적인 본능인데 이것을 이용해 작은 것을 먼저 준 다음 큰 것을 얻어가려는 방법도 있다.

이 책은 이런 무의식적인 본능, 또는 다른말로 인간의 심리를 이용해서 설득하는 방법과 부당한 설득을 당하지 않는 방법에 대해 말하는 책이다.

심리학 관련 책을 읽고 싶었는데 스테디셀러처럼 읽히고 있는 책이고 평도 좋아서 읽었다. 목차만 읽었을 땐 상호성의 원칙, 일관성의 원칙 ... 이미 누구나 알고 있는 내용을 진부하게 적어놓았을 거라 생각했는데 수많은 실험적 사실과 저자의 합당한 생각으로 각 설득의 원칙을 설명하고 있다. 읽고 굉장히 도움이 된다는 걸 느꼈다. 관련해서 정리하고 생각한 걸 적어보려 한다.

## 상호성의 원칙

> 받은 것은 돌려줘야 한다라는 강박관념

인간이 생존하기 위해서 먼저 호의를 베풀면 되돌려 받는 걸 기대하면서 서로 신뢰하는 네트워크를 쌓아갔다. 혼자선 생존할 수 없기 때문에 서로 도우며 생존하기 위한 인간 내면에 깊게 새겨진 본능이다.

만약 호의를 베풀었는데 돌려받지 못하면 상대방을 배은망덕한 사람으로 여기고 이 정도가 심해지면 사회에서 매장당한다. 그래서 인간은 받은 것은 돌려줘야한다는 강한 의무감이 있다.

이렇게 새겨진 본능을 이용해서 부당이득을 얻으려 할 수 있다. 예를 들어 먼저 작은 것을 베풀어 되돌려줘야한다는 의무감. 즉 마음의 빚을 지우는 것이다. 그러면 어떻게든 받은 상대방은 갚으려고 한다. 그 때 먼저 베풀었던 작은 것보다 큰 것을 부탁해도 부탁받은 입장에선 마음의 빚을 해결하기 위해, 혹은 이미 빚이 있기 때문에 그 큰 것을 되돌려주려한다. 이를 통해 부당이득을 얻는다.

이 본능은 너무 강력해서 본래 되돌려주는 것의 크기는 서로의 호감정도에 비례하는데 빚을 갖고 있는 상태면 호감 정도에 관계없이 같은 양을 되돌려주려고 한다. 예를 들어 좋아하는 사람과 싫어하는 사람이 있는데 둘 다에게 빚을 졌다면 갚을 때도 거의 비슷한 양을 돌려주는 것이다. 호감은 무시하고 말이다. 그만큼 강력한 영향을 미친다.

상대방이 주는 호의가 나에게 전혀 도움이 되지 않는 것이라도 상관없다. 이건 빚이 되고 갚으려고 한다.

### 자기 방어 전략

적었던 내용은 부당 이득을 취하려고 하는 사람이 사용했을 때 문제가 되는 것이다. 일반적인 경우에는 기분 좋은 일일 것이다. 호의와 설득전략으로 구분할 수 있다. 호의로 생각된다면 기분좋게 받고 나중에 기분좋게 베풀면 된다. 그런데 만약 설득전략으로 보인다면 상대방에게 너무 큰 빚을 졌다고 생각하고 부당이득을 나에게서 가져가게 하지 말고 그에 맞는 전략을 잘 생각해야 한다.

## 일관성의 원칙

> 내가 한 말이나 행동의 일관성을 유지하려고 하는 욕망

기존 태도와 일관성을 유지해야 한다는 압박을 사회적으로 받고 있다. 이건 매우 강력하게 작용한다. 일관성이라는 건 사회안에서 인간이 생존하기 위해 대부분 적합한 가치있는 특성이다. 한 사회안에서 예측 불가능한 사람이 있다는 건 제어하기 힘들고 같이 생존하기 힘들다는 뜻이다. 본능적으로 일관성이 심하게 없는 사람은 심지어 장애가 있는 것으로 여겨진다. 사회내에서 어쩌면 옳음 보다도 일관성을 더 중요하게 생각하는 경우도 있다.

옳음 보다 일관성을 중요하게 생각하는 건 대체로 꼰대가 되는 것 같다. 유연한 사고와 빠른 의사결정이 중요한 현대사회에서 옳음을 생각하지 않고 그동안 해왔던 것에만 의존한다면 발전이 없다. 하지만 중요하지 않고 빠르게 결정해야할 사항에 대해선 일관성이 도움이 될 것 같다.

이처럼 일관성은 빠른 결정이 필요할 때 강력하게 도움이 되는데 어떤 경우엔 그냥 정신적으로 게으르기 때문에 일관성을 유지하려고 하는 경우도 있다. 또는 일관성에 따라 행동하지 않고 내 스스로 심사숙고해서 어떤 일을 결정했는데 그것이 실패로 끝나거나, 이미 진행하고 있는 일이 있는데 잘못될 것이라는 걸 알아도 중간에 멈춰서 조정하거나 다시생각하려 하지 않고 일관적으로 일을 진행하는 것도 이것에 해당한다.

이 강력한 일관성의 원칙으로 부당이득을 얻으려 할 수 있다. 일관성을 유지시키기 위해 가장 중요한 것은 입장정립(commitment) 이다. 설득을 본격적으로 하기 전에 먼저 상대에게 입장이나 태도를 정립시킨다. 당신은 ~~ 해야합니다라는걸 인지하게 하는 것이다. 스스로가 그걸 한번 인정한 적이 있다면 그 일관성을 지키기 위한 결정을 할 가능성이 커진다. 예를 들어 당신은 아이를 사랑하는 사람입니다라는 물음에 예라고 답하게 시킨다. 이후에 보육원에 기부를 요청하거나 했을 때 거절하기 쉽지 않다. 거절하게 되면 아이를 사랑하는 사람이다라는 일관성을 지키지 못하는 것처럼 보이기 때문이다.

입장정립은 수고스럽고 공개적이고 자발적일수록 효과적이다. 가장 좋은 방법 중 하나는 직접 문서를 작성하게 하는 것이다. 문서로 남은 기록은 무의식적으로도 그 입장을 고수하게 만들고 기록으로도 남았기 때문에 그 일관성을 어기기 쉽지 않게 된다.

일관성의 원칙을 이용해서 자기발전에 도움을 얻을 수 있다. 먼저 내가 이루고싶은 일을 남에게 알리는 것이다. 그러면 내가 말했던 것을 지켜야 일관성을 지킬 수 있게 되므로 더 강력한 동기로 이루고싶은 일을 이룰 수 있다. 이루지 못해서 상대방에게 일관성이 없는 사람이라는 평판을 얻게 되는 것은 본능적으로 매우 기피하고 싶은 것이기 때문이다.

입장정리를 상대방에게 제대로 정립시켰다면 이건 정말 강력한 영향을 미친다. 본인 스스로가 이 입장이 자기의 생각이라고 확신하기 때문에 스스로 생각을 강화한다.

## 사회적 증거의 원칙

> 옳고 그름을 판단할 때 다른 사람들이 내릴 판단을 근거로 삼는다.

일반적으로 다수가 하는 행동이 옮다라는 논리에 기반한다. 애매한 상황과 유사성이 만족될 때 가장 효과가 크다. 식당을 찾을 때 손님이 많은 식당은 맛이 있을 것이다라는 판단을 하게 되는 근거다.

## 호감의 원칙

> 설득하고 싶다면 친구가 되어라

마음에 드는 사람이 되어야 한다. 호감을 갖고있는 상대에게 훨씬 더 설득된다. 남 눈치를 보지 말고 살라고 여러 책이나 매체에서 이야기하지만 남 눈치를 보며 그 사람의 마음에 드는 사람이 되는 것은 그 사람을 더 강력하게 설득할 수 있는 훌륭한 도구가 된다. 너무 눈치를 보지 않고 사는 것도 문제다.

상대방을 좋아하는 이유중 가장 강력한 건 신체적 매력이다. 신체적으로 매력있어 보이는 것만으로도 능력있다고 생각하는데 이 정도가 생각보다 심각하다. 타고난 외모는 어쩔 수 없으니 운동등을 통해 신체적으로 가꾸는 건 본인 만족뿐 아니라 설득하는데도 강력한 도움이 된다.

다음은 유사성이다. 복장, 의견, 라이프스타일이 유사하면 더 호감이 생기고 설득하기 쉬워진다. 또한 반복적으로 접촉하는 것도 호감이 생기게 되는 큰 요인이다.

칭찬도 강력한 영향을 미친다. 상대방이 나를 좋아하는 것 만으로도 나도 상대방을 좋아하게 된다. 회사와 관련된 이야기를 들어보면 아부를 잘해야 한다라는 걸 볼 수 있는데 이 아부를 통해 상대방이 나를 좋게 보면 그만큼 큰 이득을 얻을 수 있다. 이 아부라는 건 강력해서 아부인 줄 알면서도 호감이 생기게 된다.

마지막으로 나의 이미지를 긍정적인 것으로 연상할 수 있도록 만드는 것이다.

## 권위의 원칙

> 권위가 인간행동에 미치는 강력한 영향

권위자가 제공하는 정보를 너무 의심없이 믿는 경향이 있다. 권위자인지 검증하지 않아도 그렇게 보이기만 해도 설득당한다. 직함과 복장은 위조하기가 정말 쉬운데 검증해볼 생각도 없이 권위자로 믿고 설득당하게 된다.

## 결론

현대사회는 너무 복잡하기 때문에 모든 의사결정을 다 열거했던 걸 고려하며 결정할 수 없다. 본능에 따르는 결정을 할 수 밖에 없지만 이를 이용해서 부당이득을 취하려는 자는 경계하자
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (51, 11);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("Github No anonymous write access. 해결", "EGithub No anonymous write access. 해결", "2021-11-15", "2021-11-15", "/no-anonymous-write-access" , 1, 2, 1, "

## 문제

새 레포 만들고 clone을 한 후 커밋 후 푸시를 하면

```
No anonymous write access.
```

라는 메세지가 나온다

## 해결

```
sudo git push
```

를 하면 된다.

password를 물으면 Github > Developer Settings > Personal access tokens 에서 push권한 체크 후 토큰 발급받고 토큰을 password 자리에 붙여넣으면 된다.

## 삽질

검색 후 가장 먼저 나왔던 글이 ssh 인증을 해야한다고 했다.
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key]
보고 따라해봤지만 에러는 여전히 났다.
덕분에 보안 설정이 늘었다.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("사이드바 width 0으로 했는데도 width가 남아있는 이슈 (font-size", "width를 0으로 고정했는데도 width가 계속 남아있는 이슈를 font-size를 0으로 바꿔서 해결한 내용에 대한 글", "2021-03-20", "2021-03-20", "/sidebar-width0-remain-issue" , 1, 2, 1, "

## 문제 상황

![](https://i.imgur.com/jIxUYbs.gif)

사이드 바를 Label을 클릭했을 때 사이드바 width를 0으로 하고 left를 sidebar width만큼 넣어 왼쪽으로 밀어넣는 동작을 구현했는데 위와 같이 완전히 밀어넣어 지지 않았다.

Inspector로 찍어보니 위처럼 파란색으로 width가 0으로 지정했음에도 17.xxxpx정도가 남아있었다.

원인은 font-size였다. width를 0으로 하면 텍스트가 다 눌린다고 생각했지만 17.xxx픽셀이 딱 뭔가 1rem을 16px로 해둔 상황에서 font-size같아서 사이즈를 0으로 바꿨더니 해결되었다.

![](https://i.imgur.com/vQ1s6gD.gif)

그럼에도 font-size는 16px이었기 때문에 왜 17.xxx였을까라는 의문을 가진 채 잘 되네 하고 넘어갈 뻔 했는데 뭔가 이상해서 확대해보니 2px이 남아서 약간 헤더랑 콘텐츠가 딱 안맞았다.

2px이면 border가 1px이어서 왼쪽 오른쪽 border로 2px이겠구나 해서 border를 0px로 바꿔주니 해결됐다.

box-sizing: border-box가 잘 적용되어있는데도 width: 0일때 border까지 0으로 바꿔주지는 않는 가 보다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (53, 3);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("AWS EC2로 이주 (for https)", "Nuxt로 블로그 개발을 위해 static site generation 방식 대신 Nuxt 서버를 EC2에 띄워 배포하도록 구현한 것에 대한 글", "2021-03-19", "2021-03-19", "/migrate-to-aws-ec2" , 1, 2, 4, "

## 개요

이 블로그는 Server Side Rendering으로 동작해서 SEO에서 유리하게 하려고 했다.

프론트엔드 프레임워크로 vue.js를 선택했기 때문에 관련한 서버사이드 프레임워크로 nuxt를 선택했다.

nuxt빌드시에 모든 페이지를 static하게 만들어서 배포하는 방식이 있고, 서버사이드렌더링 방식으로 동작하는 게 있었는데 글 하나 쓸 때마다 빌드를 다시 하는게 마음에 안들어서 후자를 선택했다.

전자가 비용은 훨씬 저렴하지만 (static하게 만들어서 S3에 넣고 배포하기만 하면 거의 드는 돈이 없음) 그럼에도 하고싶어서 서버를 두고 서버사이드 렌더링으로 구현했다.

기존에는 이 서버를 집에 있는 맥 미니로 사용했지만 https적용 관련해서 비용을 따져 EC2로 이주하기로 결정했다.

## 맥 미니에 https 적용관련 문제점

일단 도메인을 blog.pkiop.me를 꼭 사용하고 싶었다. 또 다른 AWS에 배포한 pkiop.me도메인을 사용하는 다른 앱에도 영향가게 하기 싫었다.

맥 미니에서 일단 https를 가능하게 하려면 SSL인증서를 구매나 무료인증서를 통해 갖고 있어야 했다. 무료는 3개월마다 새로 받는다던가 하는 불편함이 있고, 유료는 너무 비쌌다.

또 이미 [pkiop.me](http://pkiop.me) 도메인이 AWS에 네임서버를 두고 있어서 https를 맥미니에 하려면 이 네임서버를 바꿔야 하는 것으로 알고 있는데(정확하진 않음) 그러면 다른 서비스에 영향이 가므로 맥 미니에서 배포하는 건 그만두기로 했다.

## AWS EC2로 옮겼을 때 https 이점

가장 큰 이점은 거의 무료 수준으로 (AWS에 도메인이 종속되긴 하지만) 아마존 인증서를 쓸 수 있다. 무료 인증서나 기타 비싼 것중에 가장 싼 인증서보다 안전한 인증이 된 다.

그 다음 인증서 관련 처음 설정말곤 더 할 게 없다.

또 다른 도메인을 사용하는 앱에도 영향이 가지 않는다.

## AWS EC2 https 설정

1. AWS Certificate Manager에서 도메인 인증을 받는다.

![이미지1](https://user-images.githubusercontent.com/34783156/111827550-5d7def00-892d-11eb-94e6-75e6cb33f30e.png)

2. 로드벨런서에 이 인증된 도메인을 연결하고 로드벨런서의 80포트를 443포트로 redirect하고 443포트에 들어온 패킷은 target group설정으로 EC2로 보내도록 한다.

![이미지2](https://i.ytimg.com/vi/bWPTq8z1vFY/maxresdefault.jpg)

여기서 많은 블로그 설명에 target group설정을 할 때 로드 벨런서 443포트로 오면 EC2 80포트로 보내도록 했는데 EC2에선 80포트로 바로 서버를 켤 수 없다. 그래서 8080등으로 켜고 EC2에서 iptables나 nginx등 방법으로 80포트로 들어오는 정보를 8080으로 REDIRECT하는데 굳이 그럴필요 없이 target group설정할 때 EC2 80포트 말고 8080포트로 바로 보내도록 하면 쉽게 설정 가능하다.

## EC2 인스턴스 결정

고작 블로그 서버 배포고, 많은 사람이 당장은 안 들어올테니까 가장 싼 t3.nano를 사용하려고 했다. 거의 한달에 5천원 수준으로 쓸 수 있으니 괜찮았다.

그런데 이걸 쓰니 npm install을 하면 중간에 뻗었다.

다음 t3.micro를 써봤다. 한 달 만 원 이내로 그나마 합리적으로 사용할 수 있다. 이건 npm install은 잘 되고, nuxt dev로 서버도 잘 켜지는데 build만 하면 90%에서 멈춰서 인스턴스가 뻗어버린다..

그래서 빌드를 인스턴스에서 하는게 아니라 내 PC에서 빌드를 해서 그 파일을 넣어줘봤다. 그런데 빌드 환경이 달라서인가 자꾸 node_modules/.foo/.bar/nuxt 에 ../package.json이 없다는 에러가 떴다.

이런 설정 관련으로 3일을 넘게 보내니까 너무 답답해서 t3.small을 써보자 하고 써봤다. 굉장히 빠르고 잘 동작해서 속 시원했다. 비용을 살펴보니 한 달에 17000원이었다.

## 앞으로 계획

무식하면 몸이 고생이라고 저 build만 잘 하면 싼 인스턴스에서 서버를 돌릴 수 있을 것 같은데 그걸 고민하기 전까진 17000원 그냥 내야겠다. 이 어마어마한 투자비용을 회수할 수 있도록 블로그 글 열심히 써야겠다.

또 거의 자원이 남아도는데 여기에 다른 앱도 배포해서 최대한 부려먹어야겠다.

### Reference

[https://www.youtube.com/watch?v=bWPTq8z1vFY](https://www.youtube.com/watch?v=bWPTq8z1vFY)
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (54, 2);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("하위 컴포넌트 모두 width가 0인데도 모바일에서 부모 컴포넌트의 width가 남아있는 이슈", "상위 컴포넌트에 width를 지정하지 않으면 하위 컴포넌트의 width에 따라 지정하는게 일반적인데 하위 컴포넌트 모두 width가 0인데도 상위 컴포넌트 width가 아닐 때 참고하면 좋은 글", "2021-03-21", "2021-03-21", "/parent-component-width-is-not-0" , 1, 2, 1, "

## 해결방법

하위 컴포넌트의 Margin도 0으로 바꿔서 해결

## 문제

아래 사진처럼 Desktop에선 쏙 잘 들어가던게 모바일에서 말썽이었다.

#### Desktop

<img src=\"https://i.imgur.com/GCVTrgX.png\" style=\"width: 40%\" />

#### Mobile

<img src=\"https://i.imgur.com/rYOP8BJ.png\" style=\"width: 40%\" />

Safari로 모바일 웹 디버깅이 가능해서 왼쪽으로 밀어넣었을 때 사이드바의 width를 보니 30px이 남았다.

## 해결과정

내부 태그를 하나하나 찍어가며 width가 있는지 확인했다. 그런데 하나도 없었다.

어떻게 이럴 수 있지.. 하다가 margin이 있는 태그들이 보였다. 이 margin을 다 0으로 바꾸니 깔끔하게 들어갔다

<img src=\"https://i.imgur.com/YZaCVBa.png\" style=\"width: 40%\" />

## 이렇게 해결하는게 맞는지..

margin을 0으로 바꿔주면 되니 :checked일 때 margin도 같이 0으로 바꿔주도록 일일히 수정했다.

```css
& > * > * {
    & > * {
        margin: 0rem;
    }
    margin: 0rem;
}
```

너무 무식한 방법이라 더 좋은게 있을 것 같은데 알게되면 수정해야겠다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (55, 3);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("blog.pkiop.me v1.0 배포", "블로그를 직접 만들고 싶어서 만들었던 Nuxt를 통해 만드는 과정에 관한 글", "2021-02-27", "2021-02-27", "/blog-pkiop-me-distribute" , 1, 2, 4, "

## 만든 이유

본래 tistory 블로그가 있었는데 ([https://pkiop.tistory.com/](https://pkiop.tistory.com/)) .tistory를 떼고 싶었다. 또 CSS 편집기능도 제공해서 원하는대로 커스텀할 수 있지만 CSS가 너무 복잡해서 힘들었다.

또 Gatsby + Github hosting 으로 만들 수도 있었는데 자세히 알아본 건 아니지만 정적 페이지 배포라는게 마음에 안들었다.

## 과정

그래서 원래는 React로 블로그를 만드려고 했었다. ([https://pkiop.me/posts](https://pkiop.me/posts)) 그런데 그동안 CSR(Client Side Rendering) 으로만 개발해왔어서 이렇게 하면 되겠지 하고 개발했었는데 SSR(Server Side Rendering)을 하지않으면 SEO에서 불리하다는 걸 알게 되었다.

React로 SSR개발을 쉽게 해주는 Next.js를 사용하면 되겠다 생각했는데 입사하게된 회사에서 vue를 사용했다. vue를 학습할 겸 vue로 SSR개발을 쉽게 해주는 Nuxt.js를 사용해서 블로그를 만들기로 결정했다.

허접하지만 어쨌든 v1.0까지 배포하는데 22일이 걸렸다. 언제나 그렇듯 삽질이 대부분이었는데 대표적인 삽질이 아래와 같았다.

### vue3 + nuxt + typescript

vue3가 공식문서보니 최신인 것 같아 이걸 사용해서 개발하려고 했다. 또 typescript를 프로젝트에 꼭 도입하고 싶었다. vue3는 typescript로 만들어져서 typescript 쓰는데 문제 없어 보였다. 그런데 nuxt가 아직 vue3를 못따라가는 느낌이었다. 그리고 vscode의 vue tool인 vetur가 typescript에서 @로 alias 를 쓸 때 자꾸 에러를 내보냈다. 관련해서 계속 찾아보다가 이거 찾다가 시간 다 갈 것 같아 그냥 자료많은 vue2 + nuxt + javascript 로 개발하기로 했다.

### vue문법 학습

React랑 비슷하겠지 했는데 React에 비해 너무 vue만의 규칙이 많게 느껴졌다. React는 그냥 위에서 밑으로 javascript로 데이터를 만들어내고 마지막에 JSX에 값을 넣는 방식이어서 위에서 아래로 자연스러운 느낌인데 vue는 값을 만들고 vue의 규칙에 맞게 data나 methods 등에 쓸 걸 넣어주고 이걸 template에서 가져다 쓰는 중간 과정이 하나 더 생겼다.

vue가 React보다 쉽다고 들었는데 별로 안 쉬웠다. 자꾸 React랑 비슷하게동작할거라는 생각때문에 학습할 때 더 삽질을 많이 한 것 같다. 다시 돌아간다면 뇌를 비우고 vue의 규칙을 그대로 받아드리고 학습했으면 더 재밌게 했을 것 같다.

### SSR 동작 방식

article페이지를 만들고 이제 View page source를 하면 SSR방식으로 동작했다면 html파일에 내용이 보여야하는데 자꾸 id=\"nuxt\" 하나만 달랑 있었다. 검색 해보면 그냥 build → start하면 된다고 하는데.. 보니까 설정중에 서버사이드 렌더링 방식으로 정하는 게 있었다.
그렇게 했는데 배포에도 두 가지 방식이 있었다. 하나는 DB에 있는 article을 다 불러와서 html파일로 만들어서 static하게 배포하는 것이고 다른 하나는 nuxt서버를 돌려 요청시마다 DB에서 데이터 가져와서 html을 만들어 Client에게 돌려주는 방식이다. 위에서 말했다시피 정적페이지배포는 하고싶지 않았다. 그래서 후자를 택했다.

후자를 택하면 SSR로 하고싶은 ajax는 특별한 방법으로 사용해야했다. 그건 pages폴더에서만 사용할 수 있는 asyncData 훅이었다. 여기 안에서 실행하는 ajax는 nuxt서버가 돌려서 html로 만들어 뿌려준다.

## 블로그 동작방식

<img src=\"https://user-images.githubusercontent.com/34783156/109393725-c7c2f580-7966-11eb-8281-c4fd813318ab.png\" width=\"100%\"></img>

지금 배포한건 집에 남는 맥미니로 nuxt start를 해서 배포하고 DB는 AWS AppSync + DynamoDB를 사용하고 있다. 그냥 맥미니에다 DB둬도 성능에 전~혀 문제가 없고 돈도 안내고 1석 2조인데 (프리티어 끝나서 돈내야함) AWS사용에 얼른 더 익숙해지고 싶다. FE개발자로 개인프로젝트하면 백엔드 기능 구현이 필요할 때 AWS를 써서 하면 간단하고도 매우 성능이 강력한 서버를 갖게되는 느낌이라. 또 돈도 거의 내지않는 수준이다.

블로그 글 생성/수정/삭제는 admin권한이 있어야 하는데 로컬에서 앱 빌드할때만 권한을 가질 수 있어 우선 이렇게 사용할 생각이다.

글은 marked.js를 써서 MD파일 입력하면 html로 바꿔주는데 이걸 커스텀하는 식으로 article을 꾸민다. 지금은 앱 텍스트편집기가 그냥 textarea이기 때문에 notion에다가 적고 복붙한다.

## 할 일

일단 카테고리별로 글 조회할 수 있게 구현해야겠다. 이정도면 진짜 기본적인 기능은 끝났다. 편집에서 이미지까지 하자.
배포를 맥미니로 하면 https를 어떻게 해야할 지 조사를 해야겠다. AWS S3로 배포하면 cloudfront를 통해 쉽게 할 수 있는데..

-   SEO 잘 되게 해서 구글 검색하면 나오게 하기
-   github master에 push하면 맥미니에 자동배포하기
-   방문자 수 등의 tracker
-   깃헙 issue에 이미지 복붙하면 이미지 들어가는 것처럼 구현
-   에디터
-   댓글, 쪼아요기능
-   디자인도 좀 괜찮게 바꿔야하는데 이게 제일 어려울 것 같다 😥

그동안 글 쓰고 싶었던 것 많았는데 블로그 다만들면 써야지 하다가 다 까먹었다. 이제부터라도 열심히 쓰자
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (56, 2);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("Nuxt.js에 Google Analytics 달기 (블로그 조회수 기록하기)", "블로그 조회수 기록을 위해 Google Analytics(GA)를 달기 위해 참고하면 좋은 글", "2021-03-22", "2021-03-22", "/attach-nuxtjs-google-analytics" , 1, 2, 1, "

## 개요

블로그의 조회수를 기록하고 싶었는데 직접 구현하려니 사용자를 특정하는게 쉽지 않고 구현을 백엔드쪽에서 하는게 효율적인 것 같은데 백엔드 쪽을 짜고싶진 않았다.

백엔드 쪽이 효율적이라고 생각했던 건 조회수를 프론트에서 구현하려면 해당 페이지를 방문했을 때 방문자를 기록하는 API를 호출해야 하고, 사용자 특정을 위해 IP등을 수집해 보내줘야 하는데 내키지 않았다.

검색해보니 Google Analytics를 달기만 하면 조회수뿐만 아니라 수 많은 tracking기능을 제공해서 이걸 사용해봐야겠다고 결정했다.

## 과정

Google Analytics를 회원가입하고, Property를 만들고, Data Stream을 추가하면 MEASUREMENT ID를 얻을 수 있다.

본래 Google Analytics에서 제공하는 Script를 HTML에 삽입하는게 안내하는 내용인데 nuxt는 서버사이드렌더링을 하기 때문에 단순 스크립트 삽입만으로는 페이지마다 삽입해야하고 등등 문제가 있을 수 있다.

관련 해결방법을 [how-to-use-gtag-js-with-nuxt-js](https://stackoverflow.com/questions/56322820/how-to-use-gtag-js-with-nuxt-js)글에서 찾을 수 있었다. 겸사겸사 plugins의 개념도 알 수 있었다.

또 [@nuxtjs/google-analytics](https://google-analytics.nuxtjs.org/setup)를 설치해서 자동으로 tracking가능한 것들(pageview등) 은 자동으로 track하도록 했다.

다음과 같이 설정하면 이제 태그가 제대로 달렸는지 확인하고 싶다. [google-tag-assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en) 플러그인을 설치하고

<img src=\"https://i.imgur.com/75lu8t5.png\" width=\"100%\"></img>

Enable 버튼을 누르고 태그가 달린 사이트에서 새로고침하면

<img src=\"https://i.imgur.com/SiZtjsh.png\" width=\"100%\"></img>

태그가 달린 걸 확인할 수 있다.

몇번 페이지 이동후 Analytics 홈으로 들어가면

<img src=\"https://i.imgur.com/4Koqppf.png\" width=\"100%\"></img>

방문기록이 찍혀있는 걸 확인할 수 있다.

## 더 해볼만한 것

<img src=\"https://i.imgur.com/lLiXf7E.png\" width=\"100%\"></img>

태그를 다는 것 만으로도 자동으로 많은 걸
event, scroll, 머문시간 등 여러가지 지표를 tracking할 수 있는 것 같다. 필요한 것 더 추가해서 사용해봐야겠다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (57, 4);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("AWS s3 로 static 배포했을 때 root 주소 말고 다른 주소로 들어가서 새로고침 시 Access Denied 가 나올 때 해결방법", "AWS S3 static 배포를 했을 때 / 주소 말고 다른 주소로 들어가면 CSR렌더링으로 화면을 보여줄 수 있지만 AWS layer에서 Access Denied를 띄워버려 보여주지 못할 때 참고하면 좋은 글", "2021-05-12", "2021-05-12", "/aws-s3-static-distribution-access-denied" , 1, 2, 2, "

# 개요

S3로 블로그를 배포하고 SEO 점수를 높여 보려고 점수 측정을 했다. 메인 페이지를 [SEO Analysis & Website Review by WooRank](https://chrome.google.com/webstore/detail/seo-analysis-website-revi/hlngmmdolgbdnnimbmblfhhndibdipaf)를 통해 측정했는데 43점이라는 점수가 나왔다. 별 고려를 하지 않고 만들었는데 나쁘지 않다고 생각했다. (구글 검색 페이지가 56점..?)

### blog.pkiop.me 메인 페이지

<img src=\"https://i.imgur.com/VekBuGR.png\" width=\"100%\"></img>

### google 검색 결과

<img src=\"https://i.imgur.com/GXNrOr4.png\" width=\"100%\"></img>

# 문제

SEO 점수는 메인페이지는 크게 관련 없고 사실 작성한 글 페이지에 대한 점수가 높게 나와야 의미가 있다. 그래서 작성한 글들 중 하나를 골라 점수를 측정해봤는데 측정 불가라고 나왔다.

잘 들어가지는데 왜 그런거지..? 했는데 메인 페이지에서 글을 클릭했을 땐 잘 들어가지는데 들어간 글에서 새로고침을 하면 아래와 같은 에러를 띄우며 제대로 들어가지지 않았다.

<img src=\"https://i.imgur.com/Fgx6E8f.png\" width=\"100%\"></img>

이 블로그는 Cloud Front를 거쳐 AWS S3에 static web hosting 으로 배포를 했다. 이 에러는 입력된 URL에 해당하는 파일이 없을 때 나오는 403 Forbidden 에러다.

# 해결방안

## 1. S3 가 문제?

처음엔 파일이 없어 나오는 에러라고 생각하지 않았고 '/' 로 접근하지 않는 다른 URL은 차단하는 설정이 되어있는 것으로 생각했다. S3에 public한 배포 관련 설정이 있다는 게 기억이 나서 S3 설정을 샅샅이 찾아봤지만 관련 설정은 보이지 않았고 오히려 너무 많은 권한을 Public 하게 뒀다는 걸 깨달았다. (이건 추후에 수정..)

## 2. Cloud Front 가 문제?

S3는 모든 경우를 열어둔 것 같았고 그래서 원인은 CloudFront라고 생각했다. 설정을 샅샅이(몇개 없어서 금방 찾아봤지만) 따로 '/'를 제외한 URL을 막는 설정은 없어 보였다. 관련해서 비슷한 문제를 겪은 사람이 있나 구글링을 해봤는데 운좋게도 한글로 해당 이슈를 해결한 블로그 글을 찾을 수 있었다. (지엽적인 AWS 관련 이슈를 한글로 해결한게 거의 처음인 것 같다.)

[aws로-서버-없이-웹-서비스-운영하기-1](https://blog.dramancompany.com/2019/09/aws%EB%A1%9C-%EC%84%9C%EB%B2%84-%EC%97%86%EC%9D%B4-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%9A%B4%EC%98%81%ED%95%98%EA%B8%B0-1/) 를 참고했는데 CSR을 하게되면 해당 URL에 파일이 없어서 에러가 나니까 이 때 에러를 '/'로 전달하게 하면 된다는 글이었다. (감사합니다🙇‍♂️)

# 에러는 해결 됐지만..

<img src=\"https://i.imgur.com/4slxFZc.png\" width=\"100%\"></img>

'/' 제외한 URL로 접근했을 때 글이 나오는 건 되지만 안의 글 내용을 제대로 받아오지 못하고 있다. 부분적으로 API를 호출해 데이터를 받아오는 사이드 바는 정상적으로 값을 받아 잘 보여주는데 글 내용의 경우는 SSR방식으로 동작해서 차이를 보이는 것 같다. 이부분에 대해서는 추후에 고민해봐야겠다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (58, 2);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("css로 onClick 이벤트처럼 동작하게 하기", "클릭이벤트는 javascript로만 구현할 수 있는 것으로 알고 있었는데 html의 checkbox와 checked 속성으로 클릭 이벤트를 간단하게 구현할 수 있는 내용에 대해 알게되어 쓰게된 글", "2021-03-03", "2021-03-03", "/onclick-event-using-css" , 1, 2, 1, "

## 개요

회사에서 아래와 같이 클릭을 하면 애니메이션 동작을 하도록 하는 기능을 봐야 할 일이 있었다.

<img src=\"https://user-images.githubusercontent.com/34783156/109820456-5772e780-7c78-11eb-958a-fa47f9ec0aca.gif\"></img>

이런 동작은

1. X의 onClick 이벤트가 일어나면
2. sidebar class에다가 clicked같은 클래스를 추가하고
3. clicked클래스에 클랙했을 때 동작해야하는 css를 기술하고
4. X의 onClick 이벤트 상태 관련 관리를 해주는 것

으로 구현해왔었다.

그런데 이걸 html과 css만으로 깔끔히 구현할 수 있다는 걸 알고 아주 신기했다.

## 구현방법

```html
// html

<input id=\"sidebar\" type=\"checkbox\" />
<div class=\"sidebar\">
    <label class=\"on-off\" for=\"sidebar\">X</label>
    <!-- 원하는 것들 넣을 자리 -->
</div>
```

```scss
// scss

// input 체크박스는 보일 필요가 없으므로
#sidebar {
    width: 0px;
    height: 0px;
    padding: 0px;
    margin: 0px;
}

.sidebar {
    // 체크되지 않았을 때 css
}

//체크가 되었을 때 그 이웃하는 .sidebar를 지정해서 side effect 방지
#sidebar:checked ~ .sidebar {
    // 체크되었을 때 css
}
```

## 결론

html, css에서 제공하는 기능들은 왠만하면 javascript를 이용해서 다 구현할 수 있다. 하지만 굳이 html, css에서 제공하는 기능을 사용하지 않을 이유는 없다.

이런 재밌는 기술들을 많이 알아두면 구현 속도도 빨라지고 코드도 짧아지고 장점밖에 없어 보인다. html, css도 공부를 해야겠다.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (59, 3);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("Express-session 동작 및 활용", "Express-session 을 통한 로그인 인증 기능에 대한 글 입니다.", "2020-09-15", "2020-09-15", "/express-session" , 1, 4, 4, "

## 개요

user 로그인 상태를 관리하기 위해 안전한 방법으로 Server에서 Client에게 쿠키로 sessionID를 발급해주고 이 쿠키를 통해 Server에 접속하면 sessionID값을 활용해 어떤 Client인지 식별하고 관련 정보를 제공하는 방법을 사용한다. 관련 기능을 쉽게 사용할 수 있게 해주는 express-session 모듈을 사용해 보자.

### 관련 그림

![express-session](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmqE5a%2FbtqIJamjIOU%2Fjchu99YFB3r5IPneElNK0K%2Fimg.png)

## 1. express-session 등록

```ts
const session = require('express-session');

app.use(
    session({
        secret: 'mySecretKey!@#$',
        resave: false,
        saveUninitialized: true,
    }),
);
```

express-session을 미들웨어로 등록한다. sessionID를 발급할 때 username이나 password같은 정보만으로 만들어 발급한다면 외부에서 이 정보를 알아낼 가능성이 있다. 이는 심각한 보안사고이다. 그래서 추가적으로 secret키를 sessionID 생성에 참고해서 이 sessionID를 역으로 해석해서 원래 정보를 알아내기 힘들도록 한다.

이렇게 등록을 하면 Server에 접속했을 때
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFY2vp%2FbtqIGlhmhQD%2FI3zCz7Dw0jxwUwTL7e259K%2Fimg.png)

와 같은 sessionid가 발급된다.

## 2. Login

로그인을 구현하기 위해서 Client에서 ID와 Password가 Server에 오면 이를 user database에 있는 user정보와 비교해서 제대로 된 유저인지 확인한다. 만약 제대로 된 user라면 sessionId를 발급해주면 된다.

```ts
router.post('/login_process', (req, res) => {
    const userData = fs.readFileSync(`${__dirname}/../data/user.json`, (e) => {
        if (e) console.log(e);
    });
    let loginSuccess = false;
    let userID;
    JSON.parse(userData.toString()).users.some((x) => {
        if (x.id == req.body.id && x.password && req.body.password) {
            loginSuccess = true;
            userID = x.id;
            return true;
        }
    });

    if (loginSuccess) {
        console.log('로그인 성공!');
        req.session.sessionID = userID;
    } else {
        console.log('로그인 실패');
    }
    res.redirect('/');
});
```

login이 성공하면 req.session에 원하는 property에 원하는 정보를 담아 보낸다. 위 코드는 userID를 담아 어떤 user가 접속했는지 확인할 수 있도록 했다.

## 3. sessionID로 Server에서 어떤 Client인지 식별

client에게 고유한 sessionID가 발급되었기 때문에 이 sessionID값으로 Server에 접근하면 서버는 지금 접근한 게 누군지 알 수 있다.

```ts
router.get('/rightLoginCheck', (req, res) => {
    if (req.session.sessionID) {
        console.log(req.session.sessionID, '가 접속했습니다');
    } else {
        console.log('잘못된 유저');
    }
    res.redirect('/');
});
```

## 4. session삭제, 로그아웃 기능 구현

로그아웃은 Client가 가지고 있는 sessionid쿠키를 삭제하는 것과 server에서 유지하고 있는 session값을 지워주는 것으로 구현할 수 있다.

```ts
router.get('/logout_process', (req, res) => {
    if (req.session.sessionID) {
        console.log(`${req.session.sessionID}가 로그아웃했습니다.`);
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    res.redirect('/');
});
```

## 참고

https://velopert.com/406
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (60, 10);
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (60, 8);
  
    
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("프론트엔드 개발자가 되고싶은 이유", "프론트엔드 개발자가 되고싶은 이유에 대한 글 입니다.", "2020-08-14", "2020-08-14", "/why-i-wanna-be-fe-developer" , 10, 12, 2, "

<div style=\"display: flex; justify-content: center;\">
<img src=\"https://user-images.githubusercontent.com/34783156/125636517-2ad5dc3a-b976-484c-be95-4678d17b110d.png\" style=\"width: 30%\">
</div>

### 해커와 화가를 읽다.

책을 하나 읽게 되었습니다. 해커와 화가라는 책입니다. 2003년에 집필된 꽤 오래된 책 입니다. 15개의 저자의 에세이를 책으로 만들어 집필한 것으로 알고 있는데, 가장 영향을 많이 받은 챕터는 \"02 / 해커와 화가 : 해커는 화가, 소설과 건축가와 같은 예술 창조자다\" 와 \"05 / 또 하나의 길 : 웹 기반 소프트웨어가 준 두번째 기회\" 였습니다.

### 02 해커와 화가 - 재미있어 보였다.

챕터 2 해커와 화가에서 저자가 말하는 것은 프로그래머도 결국 예술가와 같다는 것이었습니다. 예술가와 과학자는 차이점이 있습니다. 과학자는 무언가 만들기전에 철저하게 과정을 설계하고 준비하고 시작합니다. 반면에 예술가가 어떤 그림을 그릴 때에는 완벽한 무언가를 설계하고 시작하기 보다는 우선 그림 그리기를 시작하고 봅니다. 그리고 마음에 들지 않는 부분은 조금씩 지우고 새로 그리고 이렇게 다듬고 발전시키며 예술을 완성시킵니다.

프로그래머가 완벽한 설계를 하고 그에 따라 프로그래밍을 하는 것이 맞는지, 아니면 예술가처럼 일단 코딩을 시작하고 고쳐가는게 맞는지. 옳다 그르다는 잘 모르겠습니다. 하지만 분명한 건, 후자(예술가처럼)로 코딩을 하면 매우 재밌다고 생각합니다. 내가 생각한대로 짰는데 그대로 동작하면 그대로 재밌고, 그렇게 동작 안하면 왜 동작안하는지 찾고, 이해하고, 디버깅에 성공해서 원하는 동작대로 만들면 성취감이 있습니다.

경우에 따라 다르겠지만 매우 신뢰성 높고, 엄청 많은 사람이 협력해야 하는 프로그램을 작성해야 할 때, 예술가처럼 프로그래밍하면 문제가 있을 순 있어 보입니다. 이런 상황에서는 완벽한 설계를 하고 코딩하는게 좋아 보입니다. 반대로 스타트업이나 빠르게 무언가를 만들어내야하는 상황에서는, 시간이 생명인 스타트업에서 완벽한 설계를 하다가 망해버리고 말 겁니다. 여기선 예술가처럼 프로그래밍 해야겠죠.

책을 읽고 전 예술가적인 프로그래머를 지향하기로 했습니다. 이유는 무엇보다 재미있기 때문입니다. 예술가적인 프로그래머가 되려면 Front-End가 적합하다고 생각합니다. Back-End는 빠른 Develop보다 훨씬 중요한 게 신뢰성입니다. 이 분야에선 완벽한 설계가 더 중요할 것 같습니다. 반면에 Front-End는 내가 개발한 것을 확인하기가 비교적 쉽고 문제가 잘 보입니다. 그래서 예술가처럼 조금씩 다듬어 더 좋은 프로그램을 만들어 내는 방식이 가능합니다.

### 05 또 하나의 길 - 비전 있어 보였다.

다시 한번 강조하고 싶은데, 이 책은 2003년에 집필되었습니다. 저자는 이 챕터에서 웹 기반 소프트웨어의 비전을 예측했습니다. 웹 기반 소프트웨어는 웹 브라우저를 실행할 수 있는 Device이기만 하면 어디서든 구동 가능하다는 장점이 있습니다. 한번 Develop하면 PC, 스마트폰(Android, IOS)등등 한번에 배포할 수 있습니다. 이런 엄청난 강력함이 있지만 겉으로 보기에는 매우 큰 제약이 있어 보입니다. Desktop App(Excel, Word 등등) 같은 무거워보이는 프로그램은 웹 기반에서 돌린다는 건 예전에는 상상도 못할 일이었습니다.

지금은 구글에서 무려 무료로 스프레드시트나 문서작성도구를 웹 기반으로 작성할 수 있도록 합니다. 이 도구들은 심지어 한 문서에 여러사람이 접속해서 문서를 동시에 수정하는 것도 가능하게 해줍니다. 웹 기반의 프로그램이기 때문에 비교적 쉽게 구현할 수 있었다고 생각합니다.

앞으로 10년 뒤에 세상은 또 어떻게 바뀌어 있을까요. 저는 네이티브로 남아있을 수 밖에 없는 몇 안되는 앱을 제외하고는 모두 웹 기반 앱으로 이주하거나 새로운 웹 앱이 생겨날 것 같습니다. 웹 기반 앱의 가장 큰 단점은 성능인데, 크롬브라우저의 성능이 계속 향상되면 일반 PC만큼 성능을 낼 수 있도록 빠르게 동작할 것이라 예상합니다. 그러면 굳이 네이티브로 만들 필요 없이 웹 기반으로 개발하는 것이 당연하게 될 것 같습니다.

이런 웹 기반 세상에서 가장 필요한 기술은 무엇 일까요? 저는 Front-End 개발이라고 생각합니다. 단순히 사용자의 눈에 보이는 것만 디자인 하는 것을 넘어, 크롬 브라우저 기반으로 예를들어 Excel작업을 할 수 있도록 복잡한 기능들을 구현할 수 있는 실력있는 개발자가 많이 필요해 질 것입니다. 그리고 이런 역할을 할 수 있는 사람은 Front-End 개발자라고 생각합니다. Desktop App 개발자들이 각 타겟 OS와 PC 성능에 맞추어 개발하듯이 웹 기반 앱 개발자들은 구글 크롬 브라우저의 성능을 최대한으로 사용해 빠르게 동작하는 앱을 만들어 내야 합니다. 실력있는 웹 Front-End 개발자는 지금보다도 훨씬 많이 필요할 것입니다.

### 성공을 위한 가장 강력한 도구

내가 어떤 좋은 아이디어가 있는데 이를 서비스하기 위해 가장 좋은 도구중 하나는 웹 앱 개발하는 능력이라고 생각합니다. 멋진 아이디어가 생각났을 때 빠르게 개발해서 시험해보고, 또 다른 아이디어를 시험해보고 반복한다면 어느 순간 세상을 바꾸는 멋진 앱을 만들어 낼 수 있다고 생각합니다. 가장 중요한 건 우선 서비스가 가능한 무언가를 만들 수 있는 능력이 있어야 한다는 것이고, 그 다음으로는 빠르게 개발할 수 있어야 한다는 게 중요한 것 같습니다. Front-End 기반 웹 앱 개발능력은 이 두 가지를 모두 충족하는 강력한 도구라고 생각합니다. 열심히 공부해서 실력있는 개발자가 되어 세상을 바꾸는 멋진 웹 앱을 개발하고 싶습니다.
", "2020-01-01");
  
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("결심하고 포기하는 생활이 반복된다면 - 김경일 교수님 세바시 강연을 보고 든 생각", "김경일 교수님 세바시 강연을 보고 든 생각", "2020-10-27", "2020-10-27", "/if-repeat-decide-dismiss" , 10, 12, 2, "

## 서론

최근에 [결심하고 포기하는 생활이 반복된다면](https://www.youtube.com/watch?v=yUt9ACfZz7o) 이라는 세바시 강연을 봤다. 12분 가량 짧은 강연이지만 크게 3가지 주제가 눈에 띄었고 정말 신기하게도 내가 요즘 성장을 위해 어떻게 해야할지 고민하던 내용이었다. 이런 동영상을 어떻게 추천해준 유튜브 알고리즘이 신기하고 좋은 강연을 해주신 교수님께 감사하다.

## 제대로 된 계획을 세우자

제대로 된 계획에 대한 개념을 말씀해 주셨다. 목표와 계획을 세우고 실행하면 그 결과는 무엇일까. 성공 or 실패? 둘 중 하나가 되는 것이 당연하다고 생각하며 살았다. 물론 목표에 도달하지 못하는 것이 실패라고 정의한다면 당연히 실패이긴 하지만 이렇게 생각하는 것이 바람직할까?

이렇게 이분법적으로 생각하는 것은 계획을 잘 못 세웠기 때문이다. 계획은 목표를 이루기 위해 해야할 일을 작은 단위로 나누어서 세워야 한다. 이렇게 계획을 세우고 실행한다면 성공 / 실패 말고도 다른 평가를 할 수 있게 된다. 만약 10가지 계획이 있었는데 8가지만 할 수 있었다면 실패라고 간단히 말하기 보다는 80% 성공했다고 말할 수 있다.

둘 다 실패인건 똑같은데 무슨 차이가 있느냐고 생각할 수 있다. 하지만 큰 차이가 있다. 실패라고 간단히 말해버리면 실패한 이유를 찾기가 어려워진다. 실패를 분석하고 다음의 성공을 위해 거름으로 써야하는데 이렇게 쓸 수 없이 그 목표를 실패한 것으로 남게된다. 반면에 80% 성공이라고 정의하면 얼만큼 부족해서 실패했는지를 명확히 볼 수 있다. 어디까지 성공했었는지 알 수 있고 실패한 이유를 명확히 분석할 자료를 갖게 된다. 이런 실패 정보는 이후에 삶에 큰 거름이 된다.

## 새로운 걸 배울 땐 뇌를 달래가면서 쓰자

우리의 뇌는 낯선 것을 싫어한다. 새로운 개념을 배우거나 새로운 상황에 가는 것을 본능적으로 거부한다. 왜냐하면 새로운 것에 적응하는 데에는 뇌에서 큰 에너지를 소모하기 때문이다.

개발을 하면서 새로운 개념을 접하고 프로젝트에 도입하는 일은 새롭고 성장하는 느낌이 커서 좋다. 하지만 배워 적용하는 중간과정은 사실 즐겁지만은 않다. 이미 내가 할 줄 아는 방식으로 하면 금방 할 것을 새로운 방식을 도입하기 위해 낯선 것에 적응해 가면서 하다보면 답답하고 짜증이 난다.

하지만 새로운 방식에 익숙해 지면서 기존에 할 줄 아는 방식보다 효율적으로 개발할 수 있게되는 임계점이 오게 되는데 그 지점을 넘게 되면 답답하고 짜증이 사라지고 이 기술을 사용할 줄 알게 된 내가 대견해지고 점점 마음이 편안해진다. 아마도 새로운 것을 배우면서 뇌가 짜증이 많이 났다가 점점 새로웠던 것이 익숙해지면서 뇌도 편안함을 느끼게 되는 것 같다.

교수님께서 뇌를 달래가며 쓰라고 하셨다. 뇌에게 너무 새로운 것을 한번에 주기 보다는 \"이거 익숙한 건데 조금만 다르게 해보자\" 라고 뇌를 달래가며 쓰는 것이다. 앞으로 개발자로 살면서 새로운 것을 정말 많이 접하게 될 것인데 큰 그림으로 보면 다 웹 개발, 더 크게는 개발의 일종일 것이다. 큰 그림으로 보면 다 익숙하던 것에 조금 추가한 것으로 보고 뇌를 잘 달래가며 써야겠다.

## 인간의 강력한 도구 명사를 잘 쓰자

다른 품사들에 비해 명사는 그 수가 압도적으로 많다. 그만큼 인간은 명사를 필요로 하고 많이 사용한다. 명사가 인간에게 미치는 영향은 뭘까. 명사는 인간이 생각을 안해도 되게 한다.

명사는 머리 속에서 그 명사를 떠올리기만 해도 관련된 개념을 한번에 떠올릴 수 있다. 구구절절 설명해야하는 어떤 것도 그 설명을 정의하고 있는 명사가 있다면 단번에 내가 하고 있는 설명을 상대방에게 전달할 수 있다.

웹 개발을 하면서 새로운 개념을 많이 배운다. OAuth, Observer pattern, ORM, Event Deligation등 날 많이 괴롭혔던 명사들이 있다.

이 개념들을 처음 보고 프로젝트에 적용하려고 고민을 하기 시작하면, 예를 들어 OAuth가 적용되어야 할 부분을 생각할 때 머리가 점점 복잡하게 된다. 로그인 인증을 하기 위해 백엔드에서 callback url을 처리할 것을 만들고 로그인이 성공적으로 됐을 땐 db에 user정보 추가하고 실패했을 땐 어떤 에러를 띄워야하고 처리가 끝났다면 토큰을 어떻게 보내야 하고.. 하나하나 고민하면서 시간도 많이 쓰고 머리도 아프고 답답했던 것 같다.

이제는 OAuth라는 명사를 생각하면 위에 언급했던 작업들이 한번에 떠오른다. 그래서 로그인 인증을 위해서는 OAuth를 쓰자! 라고 생각을 한번에 할 수 있게 되고 다른 더 큰 부분에 대해 고민할 수 있게 된다.

그런데 만약 OAuth를 구현하면서 시간을 많이 써서 고민하고 정리하지 않고 구현에만 급급해서 했다면 다음에 OAuth를 다시 떠올렸을 때 정리된 하나의 개념이 아니라 또 미지의 것이 되어 생각이 OAuth부분에서 멈추게 될 것 같다.

많이 귀찮더라도 공부하면서 만나게 되는 명사들을 잘 정리해서 내 것으로 만들자. 명사가 쌓일 수록 더 큰 생각을 할 수 있다는 걸 명심하자.
", "2020-01-01");
  
      INSERT INTO article_tag(articleId, tagId)
      VALUES (62, 6);
  
