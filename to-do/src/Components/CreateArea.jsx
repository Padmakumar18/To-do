import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="box">
        <form action="">
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={handleChange}
            value={note.title}
          />
          <br />
          <textarea
            name="content"
            id="content"
            placeholder="Take a note..."
            onChange={handleChange}
            value={note.content}
          ></textarea>
          <br />
          <Fab
            color="primary"
            aria-label="add"
            className="addIcon"
            onClick={submitNote}
            size="small">
            <AddIcon fontSize="large" />
          </Fab>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
