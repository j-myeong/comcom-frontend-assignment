# Comcom-frontend-assignment
## AI Chat (with API)

### 실행 방법
- Git Clone 후, Terminal에 `npm install` 또는 `yarn` 입력 후, `node_modules` 폴더가 생성 되었다면 `npm start` 혹은 `yarn start` 로 실행

### 개발 환경 및 테스트 환경
- 개발 환경
  - Node: v16.15.0
  - React.js: 18.2.0
  - IDE: WebStorm 22.02.03
- 테스트 환경
  - PC: Chrome 107.0.5304.87 (arm64)
  - Mobile
    - Chrome Develop Tools
    - Apple iPhone 14 Pro's Safari
    
### 구현 내용
- `Figma` 를 통해 전달 받은 기본적인 Design 구현
- `axios` 를 통해 API 호출 및 응답 처리 구현
- 대화 전송 및 받기 기능 구현
- 대화 내용 초기화 기능 구현
- 추가적인 구현 내용
  - 버튼 외에도 `Enter` 키를 통한 대화 전송 구현
    - 사용자에게 조금 더 직관적인 인터페이스를 위해 추가 구현하였습니다.
  - 대화 입력 시, Chat Loading Spinner 구현
    - API 요청 후, 사용자의 요청을 기다리는 중이라는 것을 알려주기 위해 추가 구현하였습니다.
  - 대화 내용 전송을 통한 API 응답 대기 시, Chat Loading Spinner 구현
    - 위 구현 사유와 동일합니다.
  - 대화 내용 작성 또는 응답 대기 및 응답 도착 시, 하단으로 자동으로 스크롤 되도록 구현
    - 사용자에게 조금 더 직관적인 인터페이스를 위해 추가 구현하였습니다.
  - 반응형 웹사이트 구현
    - 다양한 기기에서 사용할 수 있도록 추가 구현하였습니다.
- 구현한 화면은 아래 스크린샷을 통해 확인하실 수 있습니다.

### 스크린샷
- 메인 화면 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176324-73f0073e-52ae-45ef-b7d1-0697e5c81037.png" />
- 대화 입력 중, Spinner 작동

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176384-42a13eb8-477a-4854-9170-6ccb9e99b1b4.png" />
- 대화 전송 후 API 응답 대기 시, Spinner 작동

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176440-8559b594-d578-4bab-80d0-66f0cc09cf77.png" />
- API 응답 도출

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176459-aada4472-999a-4b52-8196-0e91c179d01e.png" />
- `Clear Conversation` 클릭 시, Modal 표시

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176484-e72c7f62-ea67-4476-98a7-43fa2299e0c1.png" />
- `Clear` 클릭 시, 대화 내용 제거

<img width="500" alt="image" src="https://user-images.githubusercontent.com/50445943/200176501-af1549bc-95ce-4e39-9c45-8ba2a53b1184.png" />
- 그 외, 반응형 웹 사이트

<div>
  <img width="348" alt="image" src="https://user-images.githubusercontent.com/50445943/200176545-59192254-7756-4deb-9afb-5c2a4d9821f3.png" />
  <img width="348" alt="image" src="https://user-images.githubusercontent.com/50445943/200176583-db849c84-8cce-46b3-861d-303ba8a7d4f4.png" />
</div>
