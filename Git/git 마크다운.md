# 목차
+ [목차](#목차)
  + [Heading1](#heading1)
  + [언더라인](#언더라인)
  + [줄바꾸기](#줄바꾸기)
  + [텍스트 종류](#텍스트-종류)
  + [테이블](#테이블)
  + [목차응용](#목차응용)
  + [소스코드 출력](#소스코드-출력)
  + [본문에 뱃지 넣기](#본문에-뱃지-넣기)


# Heading1
## Heading2
Heading1~6은 언더라인 자동완성
```
<소스코드>
# Heading1
## Heading2
```

# 언더라인
---
직접 언더라인 만들고 싶다면 ---처럼 -을 3번치기  
```
<소스코드>
---
```

# 줄바꾸기
줄바꿈은 space bar 3번치면 가능

# 텍스트 종류

**bold**  
*italic*   
~~strikethrough~~
```
<소스코드>
**bold**  
*italic*   
~~strikethrough~~
```

# 인용문/목차
>인용문
>> 인용문2
```
<소스코드>
>인용문
>> 인용문2
```
* 목차1
* 목차2

1. 목차1
2. 목차2
```
<소스코드>
* 목차1
* 목차2

1. 목차1
2. 목차2
```


# 이미지 업로드
![1162425984](https://user-images.githubusercontent.com/101511435/161382281-560fbf29-1b22-4aeb-a259-372ec10a67c9.jpg)

<이미지 업로드 방법>
1. issuse 란에 이미지 드래그 업로드
2. 텍스트로 전환된 이미지정보 복사
3. 추가하고 싶은 마크다운 파일에 복사해둔 2번 텍스트 붙여넣기 ()
```
<소스코드>
![1162425984](https://user-images.githubusercontent.com/101511435/161382281-560fbf29-1b22-4aeb-a259-372ec10a67c9.jpg)
```
# 테이블
|정렬방식|코드입력|
|:--:|:--:|
|가운데 정렬|:--:|
|오른쪽 정렬|:--|
|왼쪽 정렬| --:|

```
<소스코드>

|정렬방식|코드입력|
|:--:|:--:|
|가운데 정렬|:--:|
|오른쪽 정렬|:--|
|왼쪽 정렬| --:|
```

# 목차응용
:arrow_double_up:[Top](#목차)    :leftwards_arrow_with_hook:[Back](https://github.com/SebinYu/TIL/tree/main/Git)    :information_source:[Home](https://github.com/SebinYu/TIL)

```
<소스코드>
:arrow_double_up:[Top](#목차)    :leftwards_arrow_with_hook:[Back](https://github.com/SebinYu/TIL/tree/main/Git)   :information_source:[Home](https://github.com/SebinYu/TIL)

```

# 소스코드 출력
```java
public static void main(string[] args){
    system.out.println("문자열 출력");
}
```

# 본문에 뱃지 넣기
```html
<a href="버튼을 눌렀을 때 이동할 링크" target="_blank"><img src="https://img.shields.io/badge/뱃지레이블-배경색?style=뱃지모양&logo=로고&logoColor=로고색상"/></a>
```
뱃지레이블: https://shields.io/   
뱃지모양 찾기: https://simpleicons.org/?q=spring   
참조 블로그: [팔만코딩경](https://80000coding.oopy.io/865f4b2a-5198-49e8-a173-0f893a4fed45)

```html
예시)
<a href="https://sebin-yu.tistory.com/" target="_blank"><img src="https://img.shields.io/badge/BLOG-00B8FC?style=flat-square&logo=Apache&logoColor=white"/></a>
```
결과)  <a href="https://sebin-yu.tistory.com/" target="_blank"><img src="https://img.shields.io/badge/BLOG-00B8FC?style=flat-square&logo=Apache&logoColor=white"/></a>
