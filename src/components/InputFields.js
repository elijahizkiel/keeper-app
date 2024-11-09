function InputFields(props){
    return <div className="note-text">
        <input type="text" className="title-input" id="title-input" value={props.titleValue} onChange={props.onTitleChange} />
        <textarea id="note-content" cols="30" rows="10" value={props.contentValue} onChange={props.onContentChange} />
        </div>
}

export default InputFields;