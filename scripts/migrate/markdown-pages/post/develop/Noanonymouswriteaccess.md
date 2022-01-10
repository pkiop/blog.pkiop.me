---
slug: '/no-anonymous-write-access'
date: '2021-11-15'
title: 'Github No anonymous write access. 해결'
summary: 'EGithub No anonymous write access. 해결'
mainCategory: '개발'
subCategory: 'blog.pkiop.me'
tag: []
readTime: 1
---

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
