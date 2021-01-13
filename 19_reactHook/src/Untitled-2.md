# 리액트 내장 훅

## useState

## useEffect

## useContext

## useRef
 - 렌더링과 상관없는(로직) 데이터를 다룰때 유용하게 사용.
 - 
## useMemo

## useCallback
 - 함수에 특화된 메모이제이션이라고 생각하면됨.
 - 메모이제이션 사용시 app이 렌더링될때마다 UserEdit의 인자값이 변화하지 않음에도 재 렌더링되는데 그런현상을막아줌
## useReduce
 - 여러 상태를 하나의 훅으로 관리
## useImplerativeHandle
 - 함수형처럼 자식의 함수를 호출해서 사용가능.

## useLayoutEffect
 - useEffect 부수효과함수는 돔렌더링후 비동기로 호출
 - useLayoutEffect는 부수효과 함수를 동기로 호출.
 - 리액트가 렌더링하고 실제돔에반영되엇지만 브라우져가 그리기 전 호출됨.
 - 동기호출이므로 연산량이 많으면 성능이슈 발생
## useDebugValue
