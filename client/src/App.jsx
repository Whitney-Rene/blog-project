import { useState, useEffect } from 'react';
import { apiUrl } from './utils';
import './App.css';
import ViewBlogsPreview from './components/ViewBlogsPreview';
import CreateBlogPost from './components/CreateBlogPost';


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

    <CreateBlogPost />

    <p>{note}</p>

    </>
  )
}

export default App
