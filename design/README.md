# Todo 앱 요구사항 명세서

## 1. 개요
사용자가 할 일을 효율적으로 관리할 수 있는 웹 기반 Todo 애플리케이션입니다.

## 2. 핵심 기능 요구사항

### 2.1 Todo 항목 관리
- Todo 항목 생성
  - 제목 (필수)
  - 상세 설명 (선택)
  - 마감일 (선택)
  - 우선순위 (상/중/하)
- Todo 항목 조회
- Todo 항목 수정
- Todo 항목 삭제
- Todo 항목 완료 체크

### 2.2 Todo 목록 관리
- 전체 Todo 목록 조회
- 완료/미완료 항목 필터링
- 우선순위별 필터링
- 마감일 기준 정렬

### 2.3 사용자 인터페이스
- 반응형 웹 디자인 (모바일/데스크톱 지원)
- 직관적인 사용자 인터페이스
- 드래그 앤 드롭으로 우선순위 변경
- 다크/라이트 모드 지원

## 3. 기술 스택
- Frontend: React.js
- Backend: AWS Lambda + API Gateway
- Database: Amazon DynamoDB
- 인증/인가: Amazon Cognito
- 인프라: AWS CDK (Infrastructure as Code)
- 상태관리: Redux

## 4. AWS 서비스 구성
- API Gateway: RESTful API 엔드포인트 제공
- Lambda: 서버리스 함수로 비즈니스 로직 처리
- DynamoDB: Todo 데이터 저장
- Cognito: 사용자 인증 및 인가 관리
  - User Pool: 사용자 디렉터리 관리
  - Identity Pool: AWS 리소스 접근 권한 제어
- CloudWatch: 로깅 및 모니터링
- IAM: 권한 관리

## 5. 인증 시스템
### Cognito 구성
1. User Pool 설정
   - 필수 속성: 이메일
   - 비밀번호 정책 설정
   - 다중 인증(MFA) 옵션
   - 사용자 그룹 관리

2. 인증 흐름
   - 회원가입 및 이메일 인증
   - 로그인 (이메일/비밀번호)
   - OAuth 2.0 소셜 로그인 (Google, Github)
   - 비밀번호 재설정
   - 로그아웃

### 보안 설정
- Cognito 토큰 기반 인증 (ID, Access, Refresh 토큰)
- API Gateway와 Cognito 통합
- HTTPS 통신
- IAM Role 기반 리소스 접근 제어

## 6. 데이터 모델

### DynamoDB 테이블 설계
```javascript
{
  PK: String,        // USER#<userId>
  SK: String,        // TODO#<todoId>
  title: String,
  description: String,
  dueDate: String,   // ISO 8601 형식
  priority: String,  // HIGH, MEDIUM, LOW
  completed: Boolean,
  createdAt: String, // ISO 8601 형식
  updatedAt: String  // ISO 8601 형식
}
```

## 7. API 엔드포인트
- GET /api/todos - Todo 목록 조회
- POST /api/todos - 새로운 Todo 생성
- PUT /api/todos/:id - Todo 항목 수정
- DELETE /api/todos/:id - Todo 항목 삭제
- PATCH /api/todos/:id/complete - Todo 완료 상태 토글

## 8. 향후 확장 가능한 기능
- 카테고리/태그 기능
- 알림 기능
- 공유 기능
- 반복 일정 설정
