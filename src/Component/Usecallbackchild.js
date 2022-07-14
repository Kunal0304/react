import React from "react";

function Usecallbackchild({first,bb}) {

    // function DemoChild({age}) {
    //     console.log(" Demochild function is running ")
    // }
    // DemoChild()
  return (
    <div  style={{ display: "grid", placeItems: "center" }} >
      {console.log("child is running")}
      {bb}
      <h1>usecallbackchild {first}</h1>
      {/* <h2>{age}</h2> */}
    </div>
  );
}

export default React.memo(Usecallbackchild);
