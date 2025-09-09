import { useState } from "react";

const Pad =(props)=>{
    console.log(props.on);

    const [on,setOn]=useState(props.on);
    function toggle(){
        setOn(prevOn=>!prevOn);
    }
    const styles={
        backgroundColor:props.color,
        padding:50,
        margin:2
    }
    return(
        <button 
            style={styles}
            className={on?"on":undefined}
            onClick={toggle}
        ></button>
    );
};

export default Pad;