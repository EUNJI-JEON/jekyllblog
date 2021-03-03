---
layout: post
title: "[bootstrap]부트스트랩  활용해 쉽게 디자인하기"
---

Build fast, responsive sites with Bootstrap
Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

 

getbootstrap.com/

 
Bootstrap

The most popular HTML, CSS, and JS library in the world.

getbootstrap.com
부트스트랩은 빠른 프론트를 만들기 위한 오픈소스다. 직접 반응형 프론트엔드를 만드는 것도 좋지만 빠른 시작을 위해 오픈 소스로 부트스트랩을 이용하는 것도 매우 유용하다. 현재는 v5.0.0-beta2 버전이 릴리즈된 상태이다. 홈페이지로 들어가서 get started로 들어가면 quick start를 위한 안내글이 나와있다.

 

1. 먼저 css 를 로드하기 위한 링크를 html <head></head> 안에 넣어준다.

 

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

 

2. js script 번들을 <body></body> 태그 안에 넣어준다.

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

 

3. 공식 홈페이지(getbootstrap.com/docs/5.0/getting-started/introduction/)에서 제공하는 스타터 탬플릿(starter tamplate)은 아래와 같다.

<!doctype html>

<html lang="en">

<head>

<!-- Required meta tags -->

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

<title>Hello, world!</title>

</head>

<body>

<h1>Hello, world!</h1>

<!-- Optional JavaScript; choose one of the two! -->

<!-- Option 1: Bootstrap Bundle with Popper -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

<!-- Option 2: Separate Popper and Bootstrap JS --> <!-- -->

</body>

</html>
