import React, { useCallback, useMemo, useState } from "react";
import Usecallbackchild from "./Usecallbackchild";

function Usecallbackparent() {
  const [first, setfirst] = useState(0);
  const [age, setage] = useState(0);

  // console.log("/////*************/////////////");

const bb =useCallback(()=> "hello child is render " + {age},[age]) // now send props this function
const cc = () => "hello child is render " + { age }; //try also this. it is rendering again and again


 const norender = useMemo(() => {
  //  console.log("hello usememo is running")
    return <h1 >{first}</h1>;
  }, [age]);

  const aa = useMemo(() => { // its return type is value not a function
    // console.log("12345678912324567895464544");
    return "hello"
  },[]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {console.log("parent is running")}
      <Usecallbackchild bb={bb} />

        {aa}{norender} and<h1>{age}</h1>
    
      <h1>parent component</h1>
      {/* <h2>{first}</h2> */}
      <button onClick={() => setfirst(first + 1)}>click</button>
      <h2>
        {age} and {first}
      </h2>

      <button onClick={() => setage(age + 1)}>age</button>
    </div>
  );
}

export default Usecallbackparent;
