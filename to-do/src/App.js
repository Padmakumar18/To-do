import "./App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import { useState } from "react";
import Note from "./Components/Note";

function App() {
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index != id;
      });
    });
  }
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="allNotes">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
