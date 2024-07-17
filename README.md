# 📖 설문조사 웹사이트 설문할래

![개발할래 메인](https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/3f6ae705-e55a-4976-8c64-661cbb08161f)




<br>

## 프로젝트 개요

![프로젝트 개요](https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/c58986de-1f83-4391-81a9-3583ba0bd61c)

<br>

## 팀원 구성

<div align="center">

| **심규창** | **신지영** | **최소윤** | **김예찬** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/152495943?s=400&u=a43dcb0f007f74688b36c21b6e3884032699f9bb&v=4" height=150 width=150> <br/> @GyuchangSim](https://github.com/GyuchangSim) | [<img src="https://avatars.githubusercontent.com/u/155707838?v=4" height=150 width=150> <br/> @JJJI0](https://github.com/JJJI0) | [<img src="https://avatars.githubusercontent.com/u/169155232?v=4" height=150 width=150> <br/> @sooyun3451](https://github.com/sooyun3451) | [<img src="https://avatars.githubusercontent.com/u/147054139?v=4" height=150 width=150> <br/> @kyc3610](https://github.com/kyc3610) |


</div>

<br>

## 1. 개발 환경

- 언어 및 프레임 워크 : Java17, Spring boot, React, Ajax, CSS
- 개발도구 : IntelliJ, STS4, VSCode, HeidSql, MyBatis, gradle
- DB 및 API : Maria db, AWS, 결제 API
- 버전 및 이슈관리 : Github, SourceTree
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React - Route, useNavigate

- React
    - Route를 사용하여 모든 페이지를 App.js에서 편하게 불러오고 가독성을 좋게 하였습니다.
    - useNavigate를 사용하여 페이지 간 이동시 데이터를 쉽게 넘겨주었습니다.
    
<br>


### 브랜치 전략

-각 브랜치로 작업 후 주에 한번 merge해 주는 방식으로 작업했습니다.

<br>


## 3. 역할 분담

### 👦심규창

- **UX/UI**
    - 메인페이지
    - 로그인, 회원가입
    - 설문신청
    - 상단 네비게이션바
    - alert창
- **기능**
    - 로그인, 회원가입 시큐리티 JWT
    - oauth 로그인, 회원가입
    - 메인페이지 : 조회수 많은 설문, 최신 공지사항 띄우기, 설문조사 검색기능
    - 설문조사페이지 :  필터 적용 및 리스트 불러오기, 클릭한 설문 불러오기
    - 설문신청페이지 : 설문시작 전 신청페이지 작성



<br>
    
### 👩신지영

- **UX/UI**
    - 마이페이지
    - 설문 신청 결제 페이지
    - 관리자 페이지
    - 설문 참여 완료 페이지
    - 상단 네비게이션 바
    - 설문 신청, 폼 페이지
- **기능**
    - 마이페이지 : 정보 및 비밀번호 수정, 회원탈퇴, 적립금 교환, 참여한 설문, 결과 페이지로 이동
    - 결제API
    - 관리자 페이지 : 설문조사 승인 요청, 회사 계정 관리
    - 설문 참여 완료 페이지 : 설문 완료 후 적립금, 참여자 수, 응답자 db저장
    - 설문조사 결과 데이터 가져오기

<br>

### 👧최소윤

- **UX/UI**
    - 공지사항
    - 설문참여
    - 모달창
    - 자주묻는 질문
    - 웹사이트 안내 및 소개
- **기능**
    - 설문신청 : 설문 문항 만들어 DB에 넣기

    - 설문조사start페이지 : 설문조사 클릭시 관련 데이터 start페이지에 띄우기, 참여폼에 survey_code보내기

    - 메인화면 인기 카테고리 : 클릭시 카테고리 카운트 증가, 클릭수가 높은것 순으로 3개 불러오기
    - 공지사항 CRUD

<br>

### 🧑김예찬

- **UX/UI**
    - 설문조사 리스트(개인, 단체)
    - 설문조사 비밀번호 입력 모달창
    - 설문조사 시작 및 완료
- **기능**
    - 설문조사 마감 업데이트
    - 설문조사 페이지네이션
    
<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.05.07 ~ 2024.06.19
- 역할분담 및 계획 : 2024.05.07~2024.05.10
- UI 구현 : 2024-05-10 ~ 2024-05-24
- 기능 구현 : 2024-05-24 ~ 2024-06-19

<br>

### 작업 관리

- 매일 30분씩 회의를 하여 서로의 진행상황을 얘기하고 문제점을 개선했습니다.
- SourceTree를 사용해 일주일에 한번 병합하여 GitHub에 올렸습니다.

<br>

## 6. 에러 해결
1) 에러 : 설문조사를 불어올 때, 모든 설문이 나눠지지 않고 하나로 뭉쳐져서 나왔습니다. <br>
   원인 : forEach문을 하나로 묶어 돌려서 생긴 에러였습니다.<br>
   해결책 : 설문제목은 surveyCode로 불러오고 나머지 디테일 설문들은 따로 forEach문을 돌리니
            해결됐습니다.

2) 에러 : 메인 페이지 인기설문을 불러오는 것을 실패했습니다. <br>
   원인 : xml에surveyCode를 추가한 뒤로 생긴 오류라 surveyCode가 문제라 생각했습니다. <br>
                 유심히 살펴보니 순서를 잘못 배치하여 xml에 survey_title을 dto의 surveyCode로 읽어서 나는 에러였습니다. <br>
   해결책 :  xml과 dto의 순서를 맞춰주니 해결되었습니다.


## 7. 페이지별 기능

### [메인화면]
- 카테고리별로 검색할 수 있는 부분과 그 아래 인기 카테고리는 카테고리 클릭 수에 따라 변합니다.
- 하단부 왼쪽에는 조회수 클릭 수가 많은 인기 설문을 보여주고, 오른쪽에는 최신 공지사항을 보여줍니다.


| 메인화면 |
|----------|
![개발할래 메인](https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/5de7b0e3-87df-4011-adbc-3ddad39f1b97)

<br>

### [회원가입]
- 이메일 주소와 비밀번호를 입력하면 입력창에서 바로 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 작성이 완료된 후, 유효성 검사가 통과되면 회원가입을 할 수 있습니다.
- 회원가입이 완료되면 로그인페이지로 이동하여 로그인할 수 있게 합니다.

| 회원가입 |
|----------|
<img width="1280" alt="회원가입" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/cd3127d4-a9c8-4f63-a8f0-a07921b7d377">

<br>



### [로그인]
- 이메일 주소와 비밀번호를 입력하면 통과하지 못한 경우 경고 문구가 alert창으로 뜹니다.
- 작성이 완료된 후, 이메일과 비밀번호가 맞으면 정상적으로 로그인 되면 메인화면으로 리다이렉트 됩니다.


| 로그인 |
|----------|
<img width="1279" alt="로그인" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/a0813c20-96d4-4d2c-b958-44ba2f6e29df">

<br>

### [로그아웃]
- 상단의 로그아웃을 누르면 로그아웃이 바로 진행됩니다. 
- 로그아웃시 로컬 저장소의 토큰 값과 사용자 정보를 삭제하고 초기화면으로 이동합니다.

<br>

### [설문조사]
- 설문조사 (개인) 
    - 필터 : 필터에 맞게 원하는 설문을 볼 수 있습니다.
    - 설문참여 : 설문 참여 전 안내 사항을 볼 수 있습니다. 
    - 설문참여 진행 : 설문을 진행합니다. 
    - 완료 페이지 : 완료 후 제출을 누르면 설문 내용과 적립금이 마이페이지에 저장 됩니다. 

- 설문조사 (단체) 
   - 관리자가 승인한 설문만 보여줍니다. 
   - 필터 : 승인된 설문 중 원하는 설문을 볼 수 있습니다.
   - 나머지 과정은 위와 같습니다.

| 설문조사 |
|----------|

<img width="1280" alt="설문조사1" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/caa00963-6fa7-421c-9b10-da92d9d432aa">
<img width="1280" alt="설문조사2" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/437fad44-d82f-42b0-980c-052705f6d9d9">
<img width="1280" alt="설문조사3" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/3ee95625-29d5-46f3-b2cd-b528b4bb23a8">
<img width="1280" alt="설문조사4" src="https://github.com/user-attachments/assets/ea9ebaf7-8e05-495f-8be3-ed9ae1fb9d1c">

<br>

### [설문신청]
- 설문신청 (개인) 
    - 개인으로 로그인 하면 개인으로만 설문신청 가능합니다.
    - 로그인 정보를 가져와서 성명에 이름을 넣어줍니다.
    - 설문대상을 단체로 신청 시 비밀번호를 걸 수 있습니다.
    - 기본적인 신청 내용을 작성 후 다음으로 버튼을 누르면 설문지 작성페이지로 넘어갑니다.
    - 객관식, 주관식, 체크박스를 선택할 수 있고 그에 따라 설문지 내용을 작성합니다. 
    - 제출을 누르면 결제하기 버튼이 나오고 누르면 결제하는 페이지로 넘어갑니다. 

- 설문신청 (단체) 
   - 개인과 기본적으로 기능이 같습니다. 
   

| 설문신청 시작 | 설문지 작성 |
|----------|----------|
<img width="1280" alt="설문신청1" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/53820c0d-d21a-45ab-9779-03164909f15e">
<img width="1280" alt="설문신청2" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/818a513c-9e3a-4b0d-9b46-a5b97b240ef1">
<img width="1280" alt="설문신청3" src="https://github.com/user-attachments/assets/9c07fdf7-4df0-4ac0-b2de-1a116953e620">
<img width="1280" alt="설문신청4" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/3fa442d2-9f4a-4676-a983-35dbfcfc1550">
<img width="1280" alt="설문신청5" src="https://github.com/survey-project-2024-05-07/survey-project/assets/152495943/8257da5e-9ccb-4219-ac39-4f7472b6790c">

<br>

<




### [웹사이트 소개 및 안내 ]
- 웹사이트를 간단하게 소개하고 안내하는 페이지 입니다.


| 소개 |
|----------|
<img width="1280" alt="웹사이트 소개" src="https://github.com/user-attachments/assets/88a6418a-55dd-49f1-9287-e72d12d4be03">


| 안내 |
|----------|
<img width="1280" alt="웹사이트 안내" src="https://github.com/user-attachments/assets/6bf6ea84-68e6-40a6-8ded-e9a0483ff2ff">
<br>

### [마이페이지]

#### 내 프로필
- 적립금 현황을 알 수 있고 그것을 현금으로 교환할 수 있습니다.
- 회원정보 수정 및 탈퇴가 가능합니다. 
- 본인이 신청한 설문 내역을 오른쪽에서 볼 수 있습니다. 
있습니다.
    

| 마이페이지| 
|----------|
<img width="1279" alt="마이페이지" src="https://github.com/user-attachments/assets/fa9b8b88-a331-4b71-be3e-9fbb13a45d1a">

| 적립금 교환|
|----------|
<img width="1280" alt="마이페이지4" src="https://github.com/user-attachments/assets/bbd3072f-13bb-460f-b9ca-951f02e5eac9">

<br>


<br>

### [공지사항 및 자주 묻는 질문]

#### 1. 공지사항
- 공지사항을 볼 수 있고 관리자는 등록 및 수정이 가능합니다.

| 공지사항 |
|----------|
<img width="1280" alt="공지사항1" src="https://github.com/user-attachments/assets/137f7114-23c8-43e1-84a0-8892aa100890">

<br>

#### 2. 자주 묻는 질문
- 자주 묻는 질문을 토글형식으로 볼 수 있습니다. 


| 자주 묻는 질문 |
|----------|
<img width="1280" alt="자주묻는질문" src="https://github.com/user-attachments/assets/3236e6f3-0f07-4b06-b065-0afeac267181">

<br>

    
## 8. 프로젝트 후기

### 👦 심규창

협업을 하면서 개발은 혼자 잘 하는 것보다, 팀원들과의 소통과 조화가 중요하다는 것을 깨닫는 시간이었습니다. 개발실력은 물론이고 커뮤니케이션 스킬도 늘릴 수 있는 좋은 기회였습니다. 그리고 또한 대략 120번의 에러를 만나면서 에러에 대한 두려움이 많이 사라지고 어떤 에러든 고민하고 시간을 들이면 해결할 수 있다는 것을 깨달았습니다. 정말 많이 성장할 수 있는 기회였고 앞으로도 이 기회를 바탕으로 더 성장하는 개발자가 되겠습니다.

<br>

### 👩 신지영

첫 프로젝트이기 때문에 모르는 부분도 많았고 걱정도 많았지만, 팀원들이 믿고 잘 따라와주었기 때문에 많은 기능을 해낼 수 있었습니다. 배웠던 것들을 실제로 사용하고 응용해보면서 익힐 수 있는 시간을 가질 수 있었고, 저를 한 발 더 내딛게 해준 프로젝트라고 생각합니다. 이번 경험을 바탕으로 앞으로 더 완성도 있고 다양한 프로젝트를 해보고 싶습니다.

<br>

### 👧 최소윤

프로젝트를 시작하면서 잘할수 있을까에 대한 걱정이 많았지만 확실히 프로젝트를 하면서 많은것을 배우고 실력을 늘릴 수 있는 기회였던것 같습니다 그리고 팀원분들 덕분에 포기하고 싶었다가도 끝까지 마무리 할 수 있었던 것 같습니다

<br>

### 🧑 김예찬

현업에서는 기본적인 것인데 실제로 프로젝트를 참여해보니 아직 많이 부족하다는 것을 느꼈습니다. 이번이 첫 프로젝트인데 운 좋게 열정적인 조원들과 함께 하게 되어 첫 단추를 잘 끼웠다고 생각합니다. 프로젝트를 시작하기 전 막막한 마음뿐이었지만 빠지지 않고 어떻게든 맨땅에 헤딩하며 참여함으로써 웹개발의 전체적인 흐름만큼은 잘 알게 된 것 같습니다. 앞으로도 이러한 프로젝트를 통해 계속해서 실력을 키워나가도록 할 것입니다.
