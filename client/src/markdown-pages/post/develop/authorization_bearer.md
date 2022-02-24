---
slug: '/authorization-bearer'
date: '2022-02-25'
title: '토큰 기반 인증할 때 access-token 앞에 붙는 bearer의 뜻'
summary: '토큰 기반 인증할 때 access-token 앞에 붙는 bearer의 뜻에 대한 글 입니다.'
mainCategory: '개발'
subCategory: ''
tag: []
readTime: 1
---

## bearer란

<img width="1081" alt="image" src="https://user-images.githubusercontent.com/34783156/155566980-e05763cc-5375-428b-9968-27545d96812b.png">

토큰기반 인증에서 http로 토큰 전송이 필요합니다.
그 때 Headers 필드에 `Authorization: bearer 토큰xx` 여기서 bearer 키워드를 말합니다.

<img width="624" alt="image" src="https://user-images.githubusercontent.com/34783156/155568468-51fd22f2-227c-4a25-b8fd-205dfaf28369.png">

postman에서 요청 보낼 때 샘플 코드 생성해주는 기능이 있네요.
axios를 사용하면 위와 같이 싣게 됩니다.

## bearer의 뜻

<img width="270" alt="image" src="https://user-images.githubusercontent.com/34783156/155566234-f700b906-a670-4e25-bf46-5292f8e3e565.png">

사전에선 운반인이라고 하네요.

`Authorization: 아무거나적기`

원래 Authorization에 필요한 값을 넣어서 인증관련된 값은 여기에 있다! 통일할 수 있습니다.
하지만 인증 방법도 토큰방식만 있는게 아니라 여러가지가 있죠.

`Authorization: 뒤에것type 값적기`

그래서 이런 방식으로 `토큰인증 값적기` 하면 좋겠다 생각했습니다.
그래서 그 type에 bearer를 넣기로 약속했습니다.
그냥 대충 약속한 건 아니고 [RFC6750](https://datatracker.ietf.org/doc/html/rfc6750) 명세에 나와 있습니다.

## bearer 말고 다른 것.

Basic, Digest, HOBA, Mutual 등이 있습니다.

## reference

[토근 기반 인증에서 bearer는 무엇일까?](https://velog.io/@cada/%ED%86%A0%EA%B7%BC-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D%EC%97%90%EC%84%9C-bearer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
[bearer 토큰](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jmjm223&logNo=221483149513)
