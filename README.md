# mocks server(nodejs)
* 가상의 mocks 서버를 이용하여 api 테스트 및 서버 성능 테스트를 위한 프로젝트
* nodejs 기반 api 서버 입니다.
* [MocksServer 라이브러리 설치 사이트](https://www.mocks-server.org/docs/quick-start/)

### 실행 방법
* 실행 명령어
  * npm run mocks

### 실행 시 permission denied 이슈 발생시 해결 방법
* 프로젝트의 node_modules 와 package_lock.json 지우고 npm i --D @mocks-server/main 를 실행하여 재 설치
