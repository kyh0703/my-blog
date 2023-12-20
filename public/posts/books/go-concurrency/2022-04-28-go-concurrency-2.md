---
title: GO 동시성 프로그래밍- 2장
category: book
tags:
  - book
  - golang
  - concurrency
date: 2022-04-28
---

#### 2장 코드모델링: 순차적인 프로세스간의 통신

**동시성과 병렬성의 차이**

동시성은 코드의 속성이고, 병렬 처리는 실행 중인 프로그램의 속성이다.

> 코드를 짤 때 동시성을 생각하며 설계하고 구성하지만 실제로 동작하는 것은 CPU이기에 병렬로 처리될지는 프로세스 및 환경에서 결정된다.

**CSP란 무엇인가**

CSP(Communicating Sequential Processes) 상호작용하는 순차적인 프로세스들의 약자로 찰스 안토니 리드차 호어가 논문을 발표

> 프로그래밍에서 두 가지 기본 요소인 입력 및 출력이 관과되고 있으며, 특히 동시에 실행되는 코드의 경우 더욱 그렇다.

- 프로세스는 이름이 지정된 출저와 목적지를 통해서만 통신할 수 있었다.
- `Go`는 `CSP`의 핵심 원칙을 통한한 최초의 언어로 동시성 프로그래밍을 제공한다.

**동시성을 지원하는 언어의 장점**

- 고루틴은 병렬성이라는 측면을 고민할 필요가 없도록 도와주며, 본연의 동시성 수준에 가깝게 문제를 모델링하도록 해준다.
- 고루틴은 가볍기 때문에 고루틴 생성을 걱정할 필요가 없다.
- `Go`의 런타임은 고루틴을 `OS`쓰레드의 자동으로 다중화하고 스케줄링을 관리한다.
- 동시성과 병렬성의 분리
- GO의 런타임이 고루틴의 스케줄링을 관리해주기 때문에 고루틴이 I/O를 기다리면서 멈춰 있는지를 검사할 수 있고, 고루틴에 멈춰 있지 않은 OS스레드를 지능적으로 재할당할 수 있다.

**Go의 동시성에 대한 철학**

> 통신을 통해 메모리를 공유하고, 메모리 공유를 통해 통신하지 말라!

`sync`패키지를 통해 전통적인 잠금 메커니즘을 제공한다.

- 성능상의 임계 영역인가? 기본 요소 사용
- 데이터의 소유권을 이전하려고 하는가? 채널 사용
- 구조체의 내부 상태를 보호하려고 하는가? 기본 요소 사용
- 여러부분의 논리를 조정해야 하는가? 채널 사용