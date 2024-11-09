import React,{useState} from 'react'
import Header from './components/Header';
import NoteCard,{Note} from './components/NoteCard';
import Footer from './components/Footer';
import Form from "./components/Form";

const date = new Date(Date.now());

function App() {
    let [notes, setNotes] = useState([]);

    function addNote(title,noteContent, lastTimeUpdated){
        setNotes((prev) => [...prev,new Note(title,noteContent,lastTimeUpdated)]);
    }

    function deleteNote(id){
        setNotes((prev)=>{
            return prev.filter((item) => {
                return (item.title !== id);
            }) 
        })
    }

 return (
    <>
    <Header text="Keeper" />
    <main>
    <Form onClick={addNote} />
    {notes?.map(note => {
        return <NoteCard key={note.title} title={note.title} text={note.content} onClick={deleteNote} />
    })}
    </main>
    <Footer text="Copy right reserved ©" year={date.getFullYear()} />
    </>
    );
}

export default App;
