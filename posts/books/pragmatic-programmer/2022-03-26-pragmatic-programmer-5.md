---
title: 실용주의 프로그래머 - 5장
category: books
tags:
  - book
  - programming
date: 2022-03-26
---

### 범위

~5장 구부러지거나 부러지거나

### 내용

#### **요약**

- 완벽한 소프트웨어를 만들 수 없다!
- 단정적 프로그램

#### 5장. 구부러지거나 부러지거나

되돌리수 있는 의사결정

> 결합도가 낮은 코드가 바꾸기 쉽다.

결합의 증상

- 관계없는 모듈이나 라이브러리 간의 희한한 의존 관계
- 한 모듈의 간단한 수정이 이와 관계 없는 모듈을 통해 시스템 전역으로 퍼져 나가거나 시스템의 다른 곳에서 무언가를 깨뜨리는 경우
- 개발자가 수정하는 부분이 시스템에 어떤 영향을 미칠지 몰라 코드의 수정을 두려워하는 경우
- 변경사항에 누가 영향을 받는지 파악하고 있는 사람이 없어서 결국 모든 사람이 참석해야 하는 회의

**테메테르 법칙(LoD)**

- C의 다른 인스턴스 메서드
- 메스드의 매개 변수
- 스택이다 힙에 자신이 생성하는 객체의 메서드
- 전역변수

> 메소드 호출을 엮지 말라.

안좋은 예시

```go
amount := cousomter.orders.last().totals().amount
```

```go
orders := customer.oders
last = orders.last()
totals = last.totals()
amout = totals.amout
```

**연쇄와 파이프라인**

함수를 조합하여 파이프라인을 만드는 방법

**글로벌화의 해악**

전역 데이터는 컴포넌트 간 결합을 만들어 낸다

> 전역 데이터를 피하라.

**외부 리소스도 전역 데이터다**

> 전역적이어야 할 만큼 중요하다면 API로 감싸라.

**상속은 결합을 늘린다**

#### 실세계를 갖고 저글링하기

**이벤트**

이벤트는 무언가 정보가 있다는 것을 의미한다.

이벤트의 잘 반응하는 애플리케이션을 만들 수 있는가?

- 유한상태 기계(FSM, Finite State Machine)
- 감시자 패턴
- 게시-구독
- 반응형 프로그래밍과 스트림

#### 변환프로그래밍

> 프로그래밍은 코드에 관한 것이지만, 프로그램은 데이터에 관한 것이다.

파이프라인은 코드 -> 데이터 -> 코드 -> 데이터의 연속

#### 상속세

- 시뮬라: 상속은 타입을 조합하는 방법(c++, java)
- 스몰토크: 상속은 동작을 다양하게 구성하는 방법(ruby, javascript)

**코드를 공유하기 위해 상속을 쓸 때의 문제**

상속도 일종의 **결합이다.** 자식 클래스를 사용하는 코드도 이 클래스의 모든 조상과 얽히게 된다.

**타입을 정의하기 위해 상속을 쓸 때의 문제**

타입으로 정의하다 보면 계층위에 계층을 덮게 되고 복잡해진다.

**더나은 대안**

- 인터페이스와 프로토콜

  인터페이스나 클래스가 강력한 까닭은 이들을 타입으로 사용할 수 있고, 해당 인터페이스를 구현하는 클래스라면 무엇이든 그 타입과 호환되기 때문이다.

  > 다형성은 인터페이스로 표현하는 것이 좋다.

- 위임

상속은 개발자들이 점점 더 메서드가 많은 클래스를 만들도록 유도한다

상속 대신 위임으로 처리.

> 서비스에 위임하라. Has-A가 Is-A보다 낫다.

- 믹스인과 트레이드, 카테고리, 프로토콜 확장

믹스인이란 클래스나 객체에 상속을 사용하지 않고 새로운 기능을 추가하여 확장하고 싶을 때 일련의 함수들을 만들고 이름을 붙인 후 객체를 확인한다. 기존의 것과 새로운것의 기능 집합을 합치는 것.

> 믹스인으로 기능을 공유하라.

#### 설정

> 외부 설정으로 애플리케이션을 조정할 수 있게 하라.

### 마치며

이번 장은 읽으면서 `go`가 많이 생각나는 내용이였다. 상속을 남용하지마라. 결국 코드를 짜는 나는 결합도를 줄이기 위해 노력하여야 하고 그런 노력들은 유연성을 가진 프로그램으로 변하면서 어느 상황에서도 유연하게 대처할 수 있는 실용주의 프로그래머가 가져야 되는 덕목들을 습득한다.