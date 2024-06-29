import React from "react"

export default function Note(props){

    const style={
        color:"white",
        fontSize:"x-large",
        fontWeight:"900",
        position:"fixed",
        zIndex:"5",
        top:"0",
        display:props.showModal?"flex":"none",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
    }

    const style2={
        
        height:"90%",        
        width:"90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"1vh",
        background: "rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "1px solid white",
    }

    const style3={
        maxHeight: "70%",
        minHeight: "70%",
        fontSize: "x-large",
        minWidth:"88%",
        maxWidth:"88%",
        padding:"2vh",
    }

    return(
        <div className="Main-Note" style={style} id={props.id} >
        <div className="Note" style={style2}>
            <h3>{props.head}</h3>
            <h4>{props.date}</h4>
            <h4>{props.time}</h4>
            <textarea style={style3} id={props.idt}></textarea>
            <button onClick={props.closeModal}>close</button>
        </div>
        
        </div>
    )
}