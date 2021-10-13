---
slug: '/express-session'
date: '2020-09-15'
title: 'Express-session 동작 및 활용'
summary: 'Express-session 을 통한 로그인 인증 기능에 대한 글 입니다.'
mainCategory: '개발'
subCategory: 'express.js'
tag: ['Express', 'Backend']
readTime: 4
---

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
