import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

const date = new Date(Date.now())

function App() {
 return (
  <>
  <Header text="Keeper" />
  <Note title="This is the note Title" text="Here is the content" />
  <Footer text="Copy right reserved ©" year={date.getFullYear()} />
  </>
 );
}

export default App;
