# 📖 설문조사 웹사이트 설문할래

![readme_mockup2](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EA%B0%9C%EB%B0%9C%ED%95%A0%EB%9E%98%20%EB%A9%94%EC%9D%B8.png?token=GHSAT0AAAAAACTQSMXFIPIOCKQOEMDRBOKKZTUGADA)




<br>

## 프로젝트 개요

![readme_mockup2](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B0%9C%EC%9A%94.png?token=GHSAT0AAAAAACTQSMXELAX2G7F65T6WKWSIZTUGBCA)

<br>

## 팀원 구성

<div align="center">

| **심규창** | **신지영** | **최소윤** | **김예찬** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/152495943?s=400&u=a43dcb0f007f74688b36c21b6e3884032699f9bb&v=4" height=150 width=150> <br/> @GyuchangSim](https://github.com/GyuchangSim) | [<img src="https://avatars.githubusercontent.com/u/112460466?v=4" height=150 width=150> <br/> @Cheorizzang](https://github.com/Cheorizzang) | [<img src="https://avatars.githubusercontent.com/u/112460506?v=4" height=150 width=150> <br/> @heejiyang](https://github.com/heejiyang) | [<img src="https://avatars.githubusercontent.com/u/76766459?v=4" height=150 width=150> <br/> @journey-ji](https://github.com/journey-ji) |

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

## 6. 트러블 슈팅

## 7. 페이지별 기능

### [메인화면]
- 카테고리별로 검색할 수 있는 부분과 그 아래 인기 카테고리는 카테고리 클릭 수에 따라 변합니다.
- 하단부 왼쪽에는 조회수 클릭 수가 많은 인기 설문을 보여주고, 오른쪽에는 최신 공지사항을 보여줍니다.


| 메인화면 |
|----------|
|![splash](![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EA%B0%9C%EB%B0%9C%ED%95%A0%EB%9E%98%20%EB%A9%94%EC%9D%B8.png?token=GHSAT0AAAAAACTQSMXF2THXZG6GOH2ZAIGSZTUGCUQ))|

<br>

### [회원가입]
- 이메일 주소와 비밀번호를 입력하면 입력창에서 바로 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 작성이 완료된 후, 유효성 검사가 통과되면 회원가입을 할 수 있습니다.
- 회원가입이 완료되면 로그인페이지로 이동하여 로그인할 수 있게 합니다.

| 회원가입 |
|----------|
|![join](![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png?token=GHSAT0AAAAAACTQSMXFE4LXM5P2MHYUBMLMZTUFRCA))|

<br>



### [로그인]
- 이메일 주소와 비밀번호를 입력하면 통과하지 못한 경우 경고 문구가 alert창으로 뜹니다.
- 작성이 완료된 후, 이메일과 비밀번호가 맞으면 정상적으로 로그인 되면 메인화면으로 리다이렉트 됩니다.


| 로그인 |
|----------|
|![login](![Alt text](로그인.png))|

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
|![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC1.png?token=GHSAT0AAAAAACTQSMXEXLZX3Z4VBTEIXTXGZTUFRVA)|
|![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC3.png?token=GHSAT0AAAAAACTQSMXEV2PJ3QN7TGK2BVFKZTUFSKQ)|
|![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC0.png?token=GHSAT0AAAAAACTQSMXF3S2G5KWHHB3ZP7BOZTUFWEQ)|
![Alt text](%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC0.png)

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
![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%8B%A0%EC%B2%AD1.png?token=GHSAT0AAAAAACTQSMXEPZDI4YWEFXERHMU6ZTUFYUA)|![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%8B%A0%EC%B2%AD2.png?token=GHSAT0AAAAAACTQSMXE4IMF4YVWVNB73Q6YZTUFZCQ)

![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%84%A4%EB%AC%B8%EC%8B%A0%EC%B2%AD3.png?token=GHSAT0AAAAAACTQSMXEXOCRYI56FFJYHMVUZTUFZSQ)![Alt text](%EC%84%A4%EB%AC%B8%EC%8B%A0%EC%B2%AD4.png)
<br>




### [웹사이트 소개 및 안내 ]
- 웹사이트를 간단하게 소개하고 안내하는 페이지 입니다.


| 소개 |
|----------|
![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EC%86%8C%EA%B0%9C.png?token=GHSAT0AAAAAACTQSMXF6GTKKP5GEYENDWHQZTUF2SQ)

| 안내 |
![Alt text](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EC%95%88%EB%82%B4.png?token=GHSAT0AAAAAACTQSMXEYBIFODOKQBOTIAHYZTUF24A)
<br>

### [마이페이지]

#### 내 프로필
- 적립금 현황을 알 수 있고 그것을 현금으로 교환할 수 있습니다.
- 회원정보 수정 및 탈퇴가 가능합니다. 
- 본인이 신청한 설문 내역을 오른쪽에서 볼 수 있습니다. 
있습니다.
    

| 마이페이지 | 적립금 교환 |
|----------|----------|
|![myProfile](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.png?token=GHSAT0AAAAAACTQSMXE7TNC35DHL24VKM7QZTUF3MA)|![followList](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%804.png?token=GHSAT0AAAAAACTQSMXFTK45WP7OQA2SISR4ZTUF33Q)|

<br>


<br>

### [공지사항 및 자주 묻는 질문]

#### 1. 공지사항
- 공지사항을 볼 수 있고 관리자는 등록 및 수정이 가능합니다.

| 공지사항 |
|----------|
|![uploadPost](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD1.png?token=GHSAT0AAAAAACTQSMXEOWOSSJQXU2CJBBEEZTUF4KA)|

<br>

#### 2. 자주 묻는 질문
- 자주 묻는 질문을 토글형식으로 볼 수 있습니다. 


| 자주 묻는 질문 |
|----------|
|![editDeletePost](https://raw.githubusercontent.com/survey-project-2024-05-07/survey-project/main/img/%EC%9E%90%EC%A3%BC%EB%AC%BB%EB%8A%94%EC%A7%88%EB%AC%B8.png?token=GHSAT0AAAAAACTQSMXF7YDGVW2RPPVCIQQGZTUF4TQ)|

<br>


## 8. 트러블 슈팅

- [탭메뉴 프로필 버튼 이슈](https://github.com/likelion-project-README/README/wiki/README-8.%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%83%AD%EB%A9%94%EB%89%B4-%ED%94%84%EB%A1%9C%ED%95%84-%EB%B2%84%ED%8A%BC-%EC%9D%B4%EC%8A%88)

- [프로필 수정 이슈](https://github.com/likelion-project-README/README/wiki/README-8.%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%94%84%EB%A1%9C%ED%95%84-%EC%88%98%EC%A0%95-%EC%9D%B4%EC%8A%88)

<br>

## 9. 개선 목표

- API 모듈화 : API를 불러오는 코드의 반복이 많아 모듈화할 예정
- lighthouse Performance 증진
    - 모든 페이지에서 특히 Best Practices & SEO 점수는 90~100으로 우수
    - Performance 점수가 대체적으로 미흡한 문제
    
    ![KakaoTalk_Photo_2023-01-04-16-55-30](https://user-images.githubusercontent.com/112460466/210591134-09bf8efd-3c34-4b99-a3d7-895ca99e1457.png)
    
- **23-01-17 성능 개선 내용**
    
    ![성능개선 후](https://user-images.githubusercontent.com/106502312/212872369-7ceeb2cf-d551-41d2-bfb0-01e35e9903fe.png)
    
    - 이미지 최적화
        - `<img>` 요소에 `width` , `height` 속성값을 명시해 불필요한 Reflow를 방지했습니다.
        - browser-image-compression 라이브러리를 사용해 유저가 업로드하는 이미지를 압축했습니다.
        - Intersection Observer API를 사용해 Lazy Loading 기법을 적용하여 홈 피드의 게시글 이미지가 viewport 내에 들어오는 순간 로딩되도록 변경했습니다.
    - 웹폰트 최적화
        - WOFF2 포맷을 추가하고 가장 우선적으로 적용되도록 선언했습니다.
        - 서브셋 폰트로 교체해 용량을 줄였습니다.
    
<br>

## 10. 프로젝트 후기

### 👦 심규창

협업을 하면서 개발은 혼자 잘 하는 것보다, 팀원들과의 소통과 조화가 중요하다는 것을 깨닫는 시간이었습니다. 개발실력은 물론이고 커뮤니케이션 스킬도 늘릴 수 있는 좋은 기회였습니다. 이번 프로젝트를 통해 정말 많이 성장하고 배웠습니다. 

<br>

### 👩 신지영

여러모로 많은 것들을 배울 수 있었던 한 달이었습니다. 혼자서는 할 수 없었던 일이라는 것을 너무 잘 알기에 팀원들에게 정말 감사하다는 말 전하고 싶습니다. 개인적으로 아쉬웠던 부분은 기한 내에 기능을 구현하는 데에만 집중하면서 트러블 슈팅이나 새로 배웠던 것들을 체계적으로 기록하지 못했다는 점입니다. 이렇게 느낀 바가 있으니 이후의 제가 잘 정리하면서 개발할 거라 믿습니다… 하하 다들 수고하셨습니다!!!!

<br>

### 👧 최소윤

팀 프로젝트 시작에 앞서 초기 설정을 진행하며 체계적인 설계의 중요성을 느꼈습니다. 앞으로는 점점 더 체계적이고 효율적으로 프로젝트를 진행할 수 있도록 발전하고 싶습니다.
정규 수업 직후에 프로젝트를 진행하면서 배운 내용을 직접 구현하는 과정이 어색했지만 어떤 부분이 부족한지 알 수 있는 기회였습니다. 스스로 최대한 노력해보고 팀원들과 함께 해결해 나가면서 협업의 장점을 체감할 수 있었습니다. 하지만 빠르게 작업을 진행하면서 팀원들과 함께 해결한 이슈가 어떤 이슈이며 어떻게 해결했는지에 대해 자세히 작성하지 못한 것이 아쉽습니다.
’멋쟁이 사자처럼’이라는 같은 목표를 가진 집단에서 프로젝트에 함께할 수 있는 소중한 경험이었습니다. 함께 고생한 조원들 모두 고생하셨습니다! 앞으로도 화이팅해서 함께 목표를 이뤄가고 싶습니다.

<br>

### 🧑 김예찬

컨벤션을 정하는 것부터 Readme 파일 작성까지 전 과정을 진행하려니 처음 생각보다 많은 에너지를 썼어요. 좋은 의미로 많이 썼다기보다, 제 능력을 십분 발휘하지 못해서 아쉬움이 남는 쪽입니다. 개발한다고 개발만 해서는 안 된다는 것을 몸소 느껴보는 기간이었던 것 같습니다. 이번 기회로 프로젝트를 진행하면서, 제가 잘하는 점과 부족한 점을 확실하게 알고 가는 건 정말 좋습니다. 기술적인 부분에 있어서는 리액트의 컴포넌트화가 주는 장점을 알았습니다. 조금 느린 개발이 되었을지라도 코드 가독성 부분에 있어서 좋았고, 오류가 발생해도 전체가 아닌 오류가 난 컴포넌트와 근접한 컴포넌트만 살펴보면 수정할 수 있는 부분이 너무 편했습니다. 모두 고생 참 많으셨고 리팩토링을 통해 더 나은 프로젝트 완성까지 화이팅입니다.