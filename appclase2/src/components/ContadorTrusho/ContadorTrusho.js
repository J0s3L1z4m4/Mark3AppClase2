import React, {useState} from "react";
const ContadorTrusho = () => {
  const [conta, setCounter] = userState(0);
    
     return (
     <div>
        <div>ContadorTrusho</div>
        <button onClick= {() => setCounter (conta + 1)}>+</button>
        <button onClick= {() => setCounter (conta - 1)}>-</button>
        <button onClick= {() => setCounter (0)}>Resetea</button>
     </div>    
  )
}


export default ContadorTrusho;