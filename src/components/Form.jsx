import React,{useState} from "react"
import InputFields from "./InputFields";

function Form(props){
    let [noteTitle, setNoteTitle] = useState("");
    let [noteContent, setNoteContent] = useState("");

    function setTitle(event) {
        let value = event.target.value;
        setNoteTitle(value);
    }

    function setContent(event){
        let content = event.target.value;
        setNoteContent(content);
    }
    
return <form>
    <InputFields onTitleChange={setTitle} onContentChange={setContent} titleValue ={noteTitle} contentValue={noteContent} />
    <button type="button" id="add-note-btn" onClick={()=>{
        props.onClick(noteTitle, noteContent,new Date(Date.now));
        setNoteContent('');
        setNoteTitle('');
        }}>ADD</button>
</form>
}

export default Form;