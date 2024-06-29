import React from "react"

export default function NoteArea(props){


    return(
        <div className="note-area">
      {props.noteElement}
      {props.mainNoteElement}
        </div>
    )
}