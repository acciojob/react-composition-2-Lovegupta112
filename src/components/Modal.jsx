import React from 'react';

const Modal=(props)=>{

console.log(props);
const{show,onClose}=props;

    return (
        <>
 {show && <div  style={{backgroundColor:'royalblue',padding:'1rem'}} onClick={()=>onClose()}>
    <button onClick={()=>onClose()} style={{backgroundColor:'tomato',color:'white'}}>Close</button>
    <p >This is the content of the modal</p>
 </div>}
        </>

    );
}
export default Modal;