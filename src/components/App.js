
import React ,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {

  const[show,setShow]=useState(false);

  function onClose(){
    setShow(false);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <h1>hello</h1> */}
        <button onClick={()=>setShow(true)} style={{backgroundColor:'tomato',color:'white'}}>Show Modal</button>
        <Modal show={show} onClose={onClose}/>
    </div>
  )
}

export default App
