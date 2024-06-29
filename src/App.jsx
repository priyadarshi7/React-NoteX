import React, { useState, useRef, useEffect } from "react";
import NoteCreate from "./Components/NoteCreate";
import NoteArea from "./Components/NoteArea";
import NoteDisplay from "./Components/NoteDisplay";
import Note from "./Components/Note";
import Loading from "./Components/Loading";
import { onSnapshot } from "firebase/firestore"
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [mainNote, setMainNote] = useState([]);
  const [load, setLoad] = useState(true);

  const date = new Date();
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => setLoad(false), 4000);
  }, []);

  function openNote() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function addNote() {
    const newNote = {
      id: nanoid(),
      head: inputRef.current.value,
      date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      time: `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}`,
    };

    const newMainNote = {
      idt: newNote.id,
      id: newNote.id,
      head: newNote.head,
      date: newNote.date,
      time: newNote.time,
      showModal: false,
    };

    if (inputRef.current.value === "") {
      alert("Please Enter Note Name");
    } else {
      setNotes((prev) => [newNote, ...prev]);
      setMainNote((prev) => [newMainNote, ...prev]);
      setCurrentNote(newNote.id);
      inputRef.current.value="";
    }
  }

  function deleteNote(noteId) {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  }

  function deleteMainNote(mainNoteId) {
    setMainNote((prev) => prev.filter((mainNote) => mainNote.id !== mainNoteId));
  }

  const noteElement = notes.map((note) => (
    <NoteDisplay
      key={note.id}
      openNote={openNote}
      head={note.head}
      date={note.date}
      time={note.time}
      id={note.id}
      setCurrentNote={setCurrentNote}
      deleteNote={deleteNote}
      deleteMainNote={() => deleteMainNote(mainnote.id)}
    />
  ));

  const mainNoteElement = mainNote.map((mainnote) => (
    <Note
      key={mainnote.id}
      idt={mainnote.idt}
      head={mainnote.head}
      date={mainnote.date}
      time={mainnote.time}
      showModal={mainnote.id === currentNote && showModal}
      closeModal={closeModal}
    />
  ));

  return (
    <div className="main">
      {load && <Loading load={load} />}
      {!load && <NoteCreate inputRef={inputRef} addNote={addNote} />}
      {!load && <NoteArea noteElement={noteElement} mainNoteElement={mainNoteElement} />}
    </div>
  );
}
