import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // If BOTH title and content are missing, do not render anything
  if (!props.title && !props.content) {
    return null; // Returning null prevents rendering
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="deleteButton" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
