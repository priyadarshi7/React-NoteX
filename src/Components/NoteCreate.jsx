import React from "react"

export default function NoteCreate(props){


    return(
        <div className="note-search">
            <div className="search">
                <input type="text" name="NotesName" placeholder="Create Note" ref={props.inputRef}/>
                <button onClick={props.addNote}>+</button>
            </div>
        </div>
    )
}