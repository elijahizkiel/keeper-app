function InputFields(props){
    return <>
        <input type="text" className="title-input" id="title-input" value={props.titleValue} onChange={props.onTitleChange} />
        <textarea id="note-content" cols="30" rows="10" value={props.contentValue} onChange={props.onContentChange} />
        </>
}

export default InputFields;