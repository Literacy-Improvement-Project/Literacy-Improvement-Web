# Literacy-Improvement-Web
문해력 향상을 돕는 웹사이트

## 목차
* 프로젝트 개요
* 사용 방법
* 프로젝트 설계

## 프로젝트 개요

### 배경
만 15세 학생을 대상으로 읽기 능력을 3년마다 평가하는 OECG 측정(PISA) 결과에 따르면, 현재 대한민국 젊은층들의 읽기 능력(문해력)이 지난 10년간 계속 하락하는 추세를 보여준다.

한글 단어의 뜻을 몰라 교과서 해석을 하지 못하거나 영어 단어는 알지만 그 단어의 한국말 뜻을 모르는 경우가 많다. 또한 요즘 세대는 종이로 된 책이나 신문같은 글로 쓰여진 것보다 유튜브나 넷플릭스 같은 영상 컨텐츠에 익숙해져 있고, 자주 사용하는 SNS 에서 쉬운 단어, 이모티콘의 남발, 유행어 사용 등의 언어 습관은 문해력 저하에 영향을 준다. 이러한 문해력을 향상시키기 위해서는 충분한 독서와 사고, 그리고 글쓰기 훈련이 반드시 필요하다.

캐나다의 언어학자 펜필드의 결정적 시기 이론에 따르면, 아동기는 생애 중 어휘 습득이 가장 왕성한 시기이다. 이때 습득된 어휘는 성인이 되었을 때 원활하게 독서하고 듣고, 자신의 생각이나 의견을 글로 쓰고 말하는 데 사용된다. 본 프로젝트는 아동의 어휘력을 기르는데 도움이 되는 웹사이트 개발을 목표로 한다.

### 목표
본 프로젝트는 사용자에게 ‘나만의 단어장’이라는 개인 단어장 서비스를 제공해 아동이 원하는 때에 반복 학습을 할 수 있도록 하고 단어 퀴즈 랭킹 서비스를 통해서 아동의 경쟁심을 동력으로 단어 학습을 증진 시킨다. 위의 서비스들을 바탕으로 아동의 한국어 어휘력 향상에 도움을 주는 웹사이트 개발을 목표로 한다.

## 사용 방법

1. 로그인


  >> ![image](https://user-images.githubusercontent.com/28720642/154075717-ec4fcbff-8223-4f23-a379-509f81078269.png)

2. 나만의 단어장


  ![image](https://user-images.githubusercontent.com/28720642/154075844-d58675e0-22d2-451f-ba8b-a2b30f10102a.png)

3. 단어 검색
  
  
  ![image](https://user-images.githubusercontent.com/28720642/154075918-71b209ed-e38a-42a7-b513-5cd8778b62b7.png)

4. 개별단어 페이지
  
  
  ![image](https://user-images.githubusercontent.com/28720642/154076029-279839e4-2182-41a0-bd1e-d892d622d805.png)

5. 퀴즈
  - 퀴즈화면
    
    
    ![image](https://user-images.githubusercontent.com/28720642/154076071-8102f377-3d7a-443a-a3eb-a0693c6d7986.png)
  - 퀴즈결과
    
    
    ![image](https://user-images.githubusercontent.com/28720642/154076088-f7042dbe-98b6-42cd-8cbf-7996ce2997fa.png)

6. 랭킹
  - 단어랭킹
    
    
    ![image](https://user-images.githubusercontent.com/28720642/154076237-a6f73df7-8083-401e-b935-41613eb31d23.png)

  - 유저랭킹

## 프로젝트 설계

### 주요기능

1. 계정관리 기능
2. 일일 단어 추천 기능
3. 나만의 단어장 기능
4. 단어 검색 및 문장의 형태소 분석 기능
5. 퀴즈 기능
6. 단어와 사용자 랭킹 기능

### 구조도
![image](https://user-images.githubusercontent.com/28720642/154075334-919dc8e6-d78e-481a-83fa-89be252772f8.png)

본 프로젝트에서는 프론트 엔드 유저 인터페이스 모듈들을 이용해 사용자들이 입력한 데이터와 버튼 액션을 백 엔드의 각 모듈로 전달해주고 백 엔드의 각 모듈에서 필요한 DB와 api에 접근해 사용자의 요구사항을 충족시킨다.
예로 사용자가 로그인 인터페이스 모듈을 사용해 사용자의 String형 아이디와 String형 패스워드를 입력한다면 백 엔드에서는 계정 관리 모듈을 작동시켜 유저 DB에 있는 아이디 정보와 패스워드 정보가 일치한다면 로그인 성공 여부를 리턴해 사용자가 원하는 서비스를 이용할 수 있게 된다.

### 데이터베이스 스키마
![image](https://user-images.githubusercontent.com/28720642/154075537-58b14dbd-e290-4ee9-ae15-1ac9e9be0a27.png)

본 프로젝트의 데이터베이스 스키마에서 Table은 5개로 사용자의 정보를 저장하는 ‘user Table’, 나만의 단어장을 저장하는 ‘vocabularyNote Table’, 오늘의 단어를 담는 ‘dailyWords Table’, 사용자의 랭킹을 담는 userRanking Table’, 나만의 단어장에 저장된 횟수를 저장하는 ‘wordRanking Table’이 있다.
‘user Table’은 사용자의 정보를 저장하는 Table로 Attribite는 4개로 암호화되어 관리를 하며 PK로 관리되는 ‘userId’는 사용자의 kakao ID를 varchar형의 Attribute이며 ‘vocabularyNote Table’과 ‘userRanking Table’의 외래키로 참조된다.
‘vocabularyNote Table’은 사용자가 추가 학습을 원하는 단어를 저장하는 Table로 ‘user Table’의 PK인 ‘userId’를 FK로 받아 1개의 ‘user Table’에 0또는 1개의 Table로 관리된다.
‘userRanking Table’은 사용자의 퀴즈 결과를 저장하는 Table로 ‘user Table’의 PK인 ‘userId’를 FK로 받아 1개의 ‘user Table’에 0또는 1개의 Table로 관리된다. 퀴즈의 성적을 ‘point’로 관리한다.
‘wordRanking Table’은 ‘vocabularyNote Table’에서 Tuple이 추가되면 ‘wordRanking Table’의 ‘point’Attribute를 증가시켜 단어의 랭킹을 관리한다.
‘dailyWords Table’은 일일 추천 단어를 관리하는 Table로 단어를 나타내는 Attribute ‘word’를 PK로 두어 관리한다.
