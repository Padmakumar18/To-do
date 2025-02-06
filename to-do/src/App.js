import "./App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import { useState } from "react";
import Note from "./Components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (!newNote.title.trim() && !newNote.content.trim()) {
      return;
    }

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="allNotes">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
