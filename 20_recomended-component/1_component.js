MyComponent.propTypes = {
  //...
};

export default function MyComponent({ prop1, prop2 }) {
  //...
}


// 변수명 대문자 작성시 가독성향상
// 커다란객체는 따로 생성(컴포넌트 내부에하면 렌더링시 재생성-> 성능이슈)
const COLUMNES = [
  { id: 1, name: "phoneNumber", width: 200, color: "white" },
  { id: 1, name: "city", width: 100, color: "grey" },
];

const URL_PRODUCT_LIST = "/api/products";
function getTotalPrice({ price, total }) {}
