---

title: "[python & django] 가상환경 설정하고 장고 설치하기"
---

가상환경을 설치할 디렉토리로 이동해서 가상환경 설치

$python3 -m venv vBlog

 

만든 가상환경 활성화

$source /가상환경 디렉토리(해당 폴더 경로 복사하고 붙여넣으면 됨)/bin/activate

 

가상환경 안에 장고 설치

(vBlog) $ pip3 install django

 

패키지 설치

태그 달기 기능에 필요한 패키지 설치

(vBlog) pip3 install django-taggit

(vBlog) pip3 install django-taggit-templatetags2

 

폼 장식 패키지 설치

(vBlog) pip3 install django-widget-tweaks

 

이미지처리 패키지 설치

((vBlog) pip3 install django-widget-tweaks

 

타임존 관리하는 pytz 패키지 설치

(vBlog) pip3 install pytz

 

패키지 설치 툴 업그레이드

(vBlog) pip3 install -U pip setuptools wheel

 

InsecurePlatformWarning해결하기

(vBlog) pip3 install pyopenssl ndg-httpsclient pyasn1

 

가상환경 비활성화

$deactivate
