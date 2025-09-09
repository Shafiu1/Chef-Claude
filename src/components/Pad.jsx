

const Pad =(props)=>{
    console.log(props.on);

    const styles={
        backgroundColor:props.color,
        padding:50,
        margin:2
    }
    return(
        <button 
            style={styles}
            className={props.on?"on":undefined}
            onClick={()=>props.toggle(props.id)}
        ></button>
    );
};

export default Pad;