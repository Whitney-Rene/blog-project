import { useState, useEffect } from 'react';
import './App.css';
import ViewBlogsPreview from './components/ViewBlogsPreview';
import { apiUrl } from './utils';

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
    
    <ViewBlogsPreview />

    <p>{note}</p>
    
    </>
  )
}

export default App
