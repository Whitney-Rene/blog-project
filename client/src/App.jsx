import { useState, useEffect } from 'react';
import './App.css';

//a string?
const apiUrl = 'http://localhost:1012';

function App() {

  const [note, setNote] = useState('');

  const fetchNote = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    setNote(data);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <>
    <p>{note}</p>
    </>
  )
}

export default App
