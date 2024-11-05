function Note(props){
    return (
        <div className="note-card"> 
            <p className="note-title">{props.title}</p>
            <p className="note-text">{props.text}</p>
        </div>
    );
}

export default Note;