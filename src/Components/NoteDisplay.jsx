import React from "react"

export default function NoteDisplay(props){

    


    return(
        <div className="note-display" id={props.id}>
            <div className="note-display-head"><h3>{props.head}</h3></div>
            <div className="date">{props.date}</div>
            <div className="time">{props.time}</div>
            <button onClick={()=>{props.openNote(props.id), props.setCurrentNote(props.id),props.setCurrentMainNote(props.id)}}>Open Note</button>
            <button onClick={()=>{props.deleteNote(props.id), props.setCurrentNote(props.id), props.deleteMainNote(props.id)}}>Delete</button>
        </div>
    )
}