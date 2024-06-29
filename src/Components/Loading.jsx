import React from "react"

export default function Loading(props){
    return(
        <div className={props.load?"load-screen":""} >
            <div className={props.load?"load":""}>
                <h2>NoteX</h2>
            </div>
        </div>
    )
}