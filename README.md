# Badge2Gather Demo App 🚀

이 프로젝트는 Windsurf를 사용하여 GenAI 기반으로 소프트웨어를 개발하는 방법을 설명하기 위한 데모 프로젝트입니다. Todo 앱을 예시로 사용하여 GenAI를 활용한 소프트웨어 개발 프로세스를 단계별로 보여줍니다.

## 프로젝트 개요 📋
- **목적**: GenAI 기반 소프트웨어 개발 방법론 데모
- **도구**: Windsurf (세계 최초의 에이전트형 IDE)
- **예시 애플리케이션**: Todo 앱

## 기술 스택 💻
- **프론트엔드**: React.js, TypeScript, Material-UI
- **백엔드**: AWS Lambda, API Gateway
- **데이터베이스**: Amazon DynamoDB
- **인증/인가**: Amazon Cognito
- **인프라**: AWS CDK (Infrastructure as Code)
- **상태관리**: Redux

## 주요 특징 ✨
- GenAI 기반 개발 프로세스
- 체계적인 프로젝트 설계 및 문서화
- 현대적인 웹 기술 스택 활용
- 클라우드 네이티브 아키텍처
- 확장 가능한 인프라 구조

# 작업 기록 (프롬프트 중심) 📝

## 2023-12-29

### 1. 프로젝트 설계 및 구조화
1. "Todo 앱을 만들어줘"
   - 프로젝트 요구사항과 기능 정의
   - `design/README.md` 작성

2. "체크리스트를 만들어줘"
   - 프로젝트 진행 단계별 체크리스트 작성
   - `design/TASKS.md` 생성
   - 이모지를 활용한 가독성 개선

3. "프론트엔드 먼저 개발하자"
   - 프론트엔드 중심의 개발 전략 수립
   - 백엔드는 추후 AWS 서비스로 구현 예정

### 2. 프로젝트 초기화 및 구조 설정
1. "프로젝트 구조를 잡아줘"
   - demo-todo 디렉토리 생성
   - frontend (React), backend (AWS Lambda), infrastructure (AWS CDK) 구조 설정

2. "프론트엔드 프로젝트를 셋업해줘"
   - Vite + React + TypeScript 프로젝트 생성
   - 필요한 의존성 설치
   - 프로젝트 구조 생성

### 3. 프론트엔드 개발
1. "공통 컴포넌트를 만들어줘"
   - Button, TextField, Modal, LoadingSpinner, Snackbar 컴포넌트 구현
   - Material-UI 기반의 커스텀 스타일링

2. "인증 화면을 구현해줘"
   - 로그인/회원가입 공통 폼 컴포넌트 구현
   - 로그인, 회원가입 페이지 구현
   - 인증 상태 관리를 위한 Redux 설정

### 4. Git 저장소 관리
1. "demo-todo 전체를 하나의 리포지토리로 관리해줘"
   - 기존 git 저장소 제거
   - demo-app 디렉토리에 새로운 git 저장소 초기화

2. "리모트 리포지토리 만드는걸 깃헙 cli로 해줘"
   - 기존 demo-todo-design 리포지토리 삭제
   - GitHub CLI를 사용해 새로운 demo-app 리포지토리 생성 및 연결

### 5. 개발자 성찰
1. "지금까지 나랑 대화해 보니 나는 어떤 개발자인것 같아?"
   - 체계적인 설계 중시
     - 구현 전 요구사항과 작업 계획 정리
     - 명확한 프로젝트 구조 분리
   - 프론트엔드 우선 접근
     - 사용자 경험 우선 고려
     - UI/UX 선행 구현 후 백엔드 연동
   - 문서화 중시
     - 다른 개발자를 위한 문서화
     - 작업 과정의 체계적 기록
   - 깔끔한 저장소 관리
     - 통합된 저장소 관리 선호
     - GitHub CLI 활용한 효율적 관리
   - 실용적인 접근
     - 가독성 중시
     - 점진적 개발 방식

2. "내가 더 나은 개발자가 되기위해서 어떤점을 개선해야 할까?"
   - 테스트 코드 작성
     - 단위 테스트, 통합 테스트 추가
     - Jest, React Testing Library 활용
   - 코드 품질 관리
     - ESLint, Prettier 상세 설정
     - Husky를 통한 커밋 전 검사
   - CI/CD 파이프라인
     - GitHub Actions 활용
     - 빌드/배포 자동화
   - 에러 처리 및 로깅
     - 체계적 에러 처리 전략
     - 모니터링 시스템 구축
   - 성능 최적화
     - React 렌더링 최적화
     - 번들 사이즈 최적화
   - 접근성(A11y)
     - ARIA 속성 추가
     - 키보드 네비게이션 지원
   - 보안 강화
     - API 보안 처리
     - XSS, CSRF 대비
   - 문서화 개선
     - 아키텍처 설계 문서
     - Storybook 활용

## 다음 단계
- Todo 관리 화면 구현 예정
  - Todo 목록 화면
  - Todo 생성/수정 기능
  - 필터링 및 정렬 기능
