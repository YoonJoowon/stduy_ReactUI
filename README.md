<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
# React UI

다양한 UI들을 리액트로 만들기

## 컴포넌트 구조

```
Comp
ㄴ Comp.tsx
ㄴ Comp.stories.ts
ㄴ Comp.css

```

- 컴포넌트는 UI만을 표현한다.
- UX를 위한 로직은 hooks 또는 utils로 만들어 사용한다.

  - hooks: 리액트 hooks, web api를 사용한 로직
  - utils: 단순 계산을 위한 로직

- 아토믹 패턴을 사용

  - atoms
  - molecules
  - organisms //컴파운드//
  - template
  - page

- 데이터에 대한 의존성을 최대한 낮춘다.

## 컨벤션

- 이벤트: handle{이벤트}{대상}
- 불린: is-, has-
- 함수: 동사로 시작 / lowerCamelCase
- 변수: 명사로 시작 / lowerCamelCase
- 상태: -state
- 상수: 대문자
- 타입: UpperCamelCase

### 커밋 메시지

- 기본적으로 한글로 커밋 메세지 작성
- 다음과 같은 경우 해당 이모지를 앞에 붙여 작성

🔥 코드 혹은 파일 삭제

🚸 UX 등의 사용성 향상

♻️ 코드 리팩토링

🐛 버그 발생

✨ 하나의 기능 완료

💄 스토리북 생성, 추가, 업데이트
>>>>>>> f43d1ad558962532cb6ae53b0abd24890f71966e
