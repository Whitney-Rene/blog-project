import { useState, useEffect } from 'react';
import { apiUrl } from './utils';
import './App.css';
import ViewBlogPreview from './components/ViewBlogPreview';
import CreateBlogPost from './components/CreateBlogPost';
import ViewEntireBlog from './components/ViewEntireBlog';


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

    <h2 className='TITLE'>Whitney-Rene's Spain Blog</h2>
    
    <ViewBlogPreview />

    <CreateBlogPost />

    <p>Note to self: {note}</p>

    </>
  )
}

export default App
