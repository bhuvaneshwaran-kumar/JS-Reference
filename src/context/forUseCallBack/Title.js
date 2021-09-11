import React from "react";

function Title() {
  console.log(`title component renders.`);
  return <div>UseCallBack Hook</div>;
}

export default React.memo(Title);
