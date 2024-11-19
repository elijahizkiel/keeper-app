import { useState } from "react";

function NoteCard(props) {
  let note = props.note;
  function getLastUpdate() {
    let date = note.lastUpdateTime.toLocaleDateString();
    let time = note.lastUpdateTime.toTimeString().substring(0, 5);
    let currentDate = new Date(Date.now());
    return currentDate >= note.lastUpdateTime.getDate() ? (
      <>
        <span>{date}</span>
        <span>{time}</span>
      </>
    ) : (
      <span>{time}</span>
    );
  }
  let [noteTitle, setNoteTitle] = useState(note.title);
  let [noteContent, setNoteContent] = useState(note.content);
  let [isEditing, setIsEditing] = useState(false);
  return (
    <div className="note-card">
      <div className="note-title">
        <p
          contentEditable={isEditing}
          onInput={(e) =>{setNoteTitle(e.target.innerText)}}
        >
          {noteTitle}
        </p>
        <div className="last-update-time">{getLastUpdate()}</div>
      </div>
      <p
        className="note-text"
        contentEditable={isEditing}
        onInput={(e) => setNoteContent(e.target.innerText)}
      >
        {isEditing ? noteContent : noteContent.substring(0, 100)}
      </p>
      <div className="card-btns">
        <button
          type="button"
          className="note-edit-btn"
          onClick={() => {
            if(isEditing){
            props.onDone(
              note.timeOfCreation,
              new Note(
                noteTitle,
                noteContent,
                new Date(Date.now()),
                note.timeOfCreation
              ));
            }
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Done" : "Edit"}
        </button>
        <button
          type="button"
          className="note-delete-btn"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

class Note {
  constructor(title, content, lastUpdateTime, timeOfCreation = Date.now()) {
    this.title = title;
    this.content = content;
    this.lastUpdateTime = lastUpdateTime;
    this.timeOfCreation = timeOfCreation;
  }
}

export default NoteCard;
export { Note };
