import React,{useState} from 'react'
import Header from './components/Header';
import NoteCard,{Note} from './components/NoteCard';
import Footer from './components/Footer';
import Form from "./components/Form";

const date = new Date(Date.now());

function App() {
    let [notes, setNotes] = useState([]);
    let [takingNote, setTakingNote] = useState(false);
    
    function addNote(title, noteContent, lastTimeUpdated){

        setNotes((prev) => [new Note(title,noteContent,lastTimeUpdated), ...prev]);
    }

    function deleteNote(id){
        setNotes((prev)=>{
            return prev.filter((item) => {
                return (item.timeOfCreation !== id);
            }) 
        })
    }
    function handleDone(noteId, editedNote){
        setNotes(notes.map((note)=>{
            if(note.timeOfCreation === noteId){return editedNote;}
            return note;
        }))        
    }

 return (
    <>
    <Header text="Keeper" />
    <main>
        {
            takingNote? 
              <Form
                onAddNote={addNote} 
                onDone={()=> setTakingNote(!takingNote)} 
              />:
              <button className='take-note-btn' 
                onClick={() => {
                    setTakingNote(!takingNote);
                }}>
                    Take Note
              </button>
        }
        <div className='note-cards'>
        {notes?.map((note) => {
            return <NoteCard 
                key={note.timeOfCreation} 
                id={note.timeOfCreation}
                note={note} 
                onDelete={deleteNote} 
                onDone={handleDone}
                />
        })}
        </div>
    </main>
    <Footer text="Copy right reserved ©" year={date.getFullYear()} />
    </>
    );
}

export default App;
