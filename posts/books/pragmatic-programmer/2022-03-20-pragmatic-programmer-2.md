---
title: 실용주의 프로그래머 - 2장
category: books
tags:
  - book
  - programming
date: 2022-03-20
---

### 범위

~2장 실용주의 접근법

### 내용

#### **요약**

- 중복성: 모든 지식은 시스템 내에서 단 한 번만, 애매하지 않고, 권위 있게 표현되어야 한다.
- 직교성: 일종의 독립성이나, 결합도 줄이기를 의미
- 가역성: 개념을 올바르게 추상화하여 영속성을 하나의 서비스로 제공하도록 만들었다면, 소프트웨어의 유연성이 생김

#### 2장. 실용주의 접근법

#### 좋은 설계의 핵심

`좋은 설계는 나쁜 설계보다 바꾸기 쉽다`

ETC 원칙(Easier to Change) : 바꾸기 더 쉽게

- 결합도 줄이기
- 단일 책임 원칙
- 이름 짓기

**ETC는 규칙이 아닌 가치**

- 코드를 짤 때 결합도를 낮추고 응집도를 높이라
- 일지 및 주석 표기 -> 추후 피드백

#### DRY:중복의 해악

`DRY원칙: 모든 지식은 시스템 내에서 단 한 번만, 애매하지 않고, 권위 있게 표현되어야 한다.`

**DRY는 코드밖에서도**

DRY는 지식의 중복, 의도의 중복에 대한것이다.

**모든 코드 중복이 지식의 중복은 아니다**

표현하는 지식이 다르면, 중복이 아니다.

**문서화중복**

모든 함수의 주석을 다는 것

**데이터의 DRY위반**

객체의 데이터를 접근 할 때 접근자를 사용한다.

**표현상의 중복**

API나 외부저장소의 데이터와 연결될 때 일종의 DRY 위반을 하게 된다. 완화하는 방법은 다음과 같다.

- 내부 API에서 생기는 중복
  - swagger, protobuf로 정의 후 공유
- 외부 API에서 생기는 중복
  - OpenAPI 형식으로 문서화
- 데이터 저장소와의 중복
  - 데이터 스키마 분석 기능 사용
  - 영속성 프레임워크 (MyBatis, Hibenate)
  - 키-값 데이터 구조에 밀어 넣어 사용

**개발자 간의 중복**

개발자 간의 중복에 대처하려면 의사소통을 잘해야된다.

- slack 채널
- 팀원을 프로젝트 사서로 임명

> 프로젝트 사서의 역할은 지식 교환을 돕는 것이다.

`다른사람이 여러분의 코드를 들여다보고 건드린다고 해서 기분 나빠 하지 말 일이다.`

#### 직교성

설계, 빌드, 테스트, 확장이 쉬운 시스템을 만드는데 중요한 개념

**직교성이란**

기하학에서 유래되었으며 그래프의 축과 같이 두 직선이 직각으로 만나는 경우 직교한다라고 말함.

컴퓨터 과학에서는 **일종의 독립성이나, 결합도 줄이기를 의미**한다

**비-직교적인 시스템**

헬리콥터를 예시로 들었는데, 정리하자면 하나의 조종으로 파급효과를 누리기에 조종이 어렵다는 얘기임

**직교성의 장점**

`관련 없는 것들 간에 서로 영향이 없도록 하라.`

- 생산성 향상

  - 변화를 국소화 하면 개발 시간과 테스트 시간이 줄어든다.
  - 재사용성 촉진
  - 생산성 향상

- 리스크 감소
  - 감염된 코드가 격리
  - 시스템이 잘 깨지지 않는다.
  - 테스트들 더 많이 할 수 있다.
  - 특정 플랫폼 종속 제거

**설계**

계층 구조는 직교적 시스템을 설계하는 강력한 방법이다.

직교성을 확인하는 방법으로는 개발자 본인에게 "특정기능에 대한 요구사항을 대폭 변경하는 경우 몇개의 모듈이 영향을 받는가?"에 대한 질문으로 파악 할 수있다.

**툴킷과 라이브러리**

외부 기술을 도입 할 때 시스템의 직교성을 해지지 않는지 확인하여야 한다.

**코딩**

- 코드의 결합도를 줄여라
- 전역 데이터를 피하라
- 유사한 함수를 피하라

> 자신이 작성하는 코드를 항상 비판적으로 바라보는 습관을 길러라

**테스트**

TDD 및 테스트 자동화

**문서화**

**직교적으로 살아가기**

#### 가역성

**가역성**

개념을 올바르게 추상화하여 영속성을 하나의 서비스로 제공하도록 만들었다면, 소프트웨어의 유연성이 생김

> 최종 결정이란 없다

**유연한 아키텍처**

외부의 API를 추상화 계층 뒤로 숨기고, 코드를 여러 컴포넌트로 쪼갠다.

> 유행을 쫒지 말라

#### 예광탄

예광탄을 발사하여 목표물에 적중률을 높임

**어둠속에서 빛을 내는 코드**

요구사항을 찾고, 리스크를 찾으며, 이러한 부분들이 가장 먼저 작성되도록 우선순위를 둔다.

예광탄 코드 접근 방법에 장점

- 사용자가 뭔가 작동하는것을 일찍 보게 된다
- 개발자가 들어가서 일할 수 있는 구조를 얻는다
- 통합 작업을 수행할 기반이 생긴다
- 보여줄 것이 생긴다
- 진행 상황에 대해 더 정확하게 감을 잡을 수 있다.

**예광탄이 언제나 목표물을 맞히는 것은 아니다**

**예광탄 코드 대 프로토 타이핑**

- 프로토 타입

  - 최종 시스템의 어떤 특정한 측면을 탐사하는 것이 목표
  - 나중에 버림

- 예광탄 코드
  - 애플리케이션이 전체적으로 어떻게 연결됬는지 확인
  - 골격의 일부

#### 프로토 타입과 포스트잇

위험 요소를 분석하고 노출 시킨 후, 저렴한 비용으로 바로 잡을 기회를 얻는 것

세부사항을 포기할 수 없는 환경이라면, 프로토타입보단 예광탄이 적절할 수 있다.

**프로토타이핑 대상**

- 아키텍처
- 기존 시스템에 추가할 새로운 기능
- 외부 데이터의 구조 혹은 내용
- 외부에서 가져온 도구나 컴포넌트
- 성능 문제
- 사용자 인터페이스 설계

> 프로토타이핑으로 학습하라

**프로토타입을 어떻게 사용할 것인가**

프로토타입을 만들 때 무시해도 되는 세부 사항들은 다음과 같다.

- 정확성
  - 가짜데이터로 사용
- 완정성
  - 제한된 방식으로만 장독
- 안정성
  - 오류검사
- 스타일
  - 주석이나 문서가 많지 않아야된다. 결과는 많이 작성할 수 있음

**아키텍처 프로토타이핑**

- 주요 영역의 책임이 잘 정의되었고 적절한가?
- 주요 컴포넌트 간의 협력 관계가 잘 정의되었는가?
- 결합도는 최소화했는가?
- 중복이 발생할 만한 곳이 있는가?
- 정의된 인터페이스와 제약 사항은 수용할 만한가?
- 모듈에 데이터가 필요한시점에 데이터 접근이 가능한가?

**프로토타입 코드를 사용하지 않도록 하려면**

폐기 처분 코드라는 것을 인지시켜야 됌

#### 도메인 언어

문제 도메인에 가깝게 프로그래밍 하라.

**실제 도메인 언어의 예**

- RSpec(내부)

  루비용 테스트 라이브러리

- 큐컴버(내부)

  프로그래밍 언어의 종속되지 않아, 개발 지식이 없어도 읽을 수 있음.

- 피닉스 라우터(외부)

​ HTTP요청을 코드의 핸들로 함수로 전달하는 라우팅도구

- 앤서블(외부)

  yaml 파일로 서버를 설정할 때 사용

**도메인 언어의 특성**

코드 안에 들어가는지에 따라 `내/외부`를 구분

**내부와 외부 언어의 장단점**

| 도메인언어 | 내부                                       | 외부                |
| ---------- | ------------------------------------------ | ------------------- |
| 장점       | 호스트의 언어 기능을 쓸 수 있다.           | 언어의 제약이 없다. |
| 단점       | 호스트 언어의 문법과 의미론을 따라야 한다. |                     |

**손쉽게 만드는 내부 도메인 언어**

내부에 함수를 만들어 테스트 구현

#### 추정

추정하는 법을 배우고 추정 능력을 계발하여 무언가의 규모를 직관적으로 짚을 정도가 되면, 가능성을 가늠할 수 있다.

**얼마나 정확해야 충분히 정확한가**

| 기간      | 추정의 단위    |
| --------- | -------------- |
| 1 ~ 15일  | 일             |
| 3 ~ 6주   | 주             |
| 8 ~ 20주  | 달             |
| 20주 이상 | 다시 한번 생각 |

**추정치는 어디에서 나오는가?**

- 무엇을 묻고 있는지 이해하라
- 시스템의 모델을 만들어라
- 모델을 컴포넌트로 나눠라
- 각 매개 변수에 값을 할당하라
- 답을 계산하라
- 추정실력을 기록

**프로젝트 일정 추정하기**

**코키리먹기**

- 요구사항 확인
- 리스크 분석 및 리스크 우선 처리
- 설계, 구현, 통합
- 사용자 검증

> 코드와 함께 일정도 반복하며 조정하라.

### 마치며

코드들의 중복을 경험해본적이 있다면 쉽게 공감이 가는 문제이다. 같은 내용의 코드들을 두 군데 이상 적어두어 커진 코드를 개선한 적이 있었는데, 커지면 커질 수록 유지보수가 엄청 힘들었던 경험이 있다. 개발자로써 코드들의 2장의 내용들을 종합하여 줄일 수 있는 최선의 실천 방법은 내가 작성하는 코드에 `디자인패턴`을 도입하는 것이다. 디자인 패턴 자체를 무조건 사용하여야 된다는 것은 아니지만, 많은 선배 개발자들이 느꼈던 어려움들을 풀어냈던 방식이기에 이 책에서 말하는 중복성 및 응집도를 분리하기에 좋은 방법이다. 도메인 언어중에 `앤서블`에 대해서 찾아봐야겠다는 생각과 `추정치`에 대해 얘기하는 방식에 대해서 좀 더 깊게 생각해 볼 수 있었다.
