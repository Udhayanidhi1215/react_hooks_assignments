import React, { useState } from "react";

function App() {
  const [name, updateName] = useState(null);
  function myFun(event) {
    updateName(event.target.value);
  }
  return (
    <div>
      <h1>Name : {name}</h1>
      <input type="text" onChange={myFun} />
    </div>
  );
}

export default App;
