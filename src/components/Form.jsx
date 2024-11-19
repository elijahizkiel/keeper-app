import React,{useState} from "react"
import InputFields from "./InputFields";

function Form(props){
    let [noteTitle, setNoteTitle] = useState("");
    let [noteContent, setNoteContent] = useState("");

    function setTitle(event) {
        let value = event.target.value;
        setNoteTitle(value);
    }

    let nowDate = new Date(Date.now())

    function setContent(event){
        let content = event.target.value;
        setNoteContent(content);
    }
    
return <form>
    <InputFields 
    onTitleChange={setTitle} 
    onContentChange={setContent} 
    titleValue ={noteTitle} 
    contentValue={noteContent} 
    />
    <div className="note-btns">
    <button type="button" id="add-note-btn" onClick={()=>{
        if(noteContent !== undefined && noteContent.trim() !== ""){
            noteTitle = (noteTitle === undefined || noteTitle.trim() === "")?
                noteContent.substring(0,21).trim(): noteTitle; 
            props.onAddNote(noteTitle, noteContent,nowDate);
            setNoteContent('');
            setNoteTitle('');
        }
        }}>ADD</button>
        <button type="button" onClick={props.onDone}>Done</button>
    </div>
</form>
}

export default Form;