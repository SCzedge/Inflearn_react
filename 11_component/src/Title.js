import React from "react";

function Title({ title }) {
  console.log("TitleRender");
  return <p>{title}</p>;
}
export default React.memo(Title);
