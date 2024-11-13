function NoteCard(props){
    let lastUpdate = props.lastUpdate;
    
    return (
        <div className="note-card"> 
            <p className="note-title">{props.title} <span>{(new Date(Date.now())).getDate() < lastUpdate.getDate()? (lastUpdate.toTimeString()).substring(0,5):lastUpdate.toLocaleDateString()}</span></p>
            <p className="note-text">{props.text}</p>
            <div className="card-btns">
                <button type="button" className="note-edit-btn" onCliick={props.onEdit} >Edit</button>
                <button type="button" className="note-delete-btn" onClick={()=>{props.onDelete(props.title)}}>Delete</button>
            </div>
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