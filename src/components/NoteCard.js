function NoteCard(props){
    return (
        <div className="note-card"> 
            <p className="note-title">{props.title}</p>
            <p className="note-text">{props.text}</p>
            <button type="button" onClick={()=>{props.onClick(props.title)}}>Delete</button>
        </div>
    );
}

class Note{
    constructor(title, noteContent, lastUpdateTime){
        this.title = title;
        this.content = noteContent;
        this.lastUpdateTime = lastUpdateTime;
    }
}

export default NoteCard;
export {Note};