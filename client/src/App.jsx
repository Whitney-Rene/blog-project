import { useState, useEffect } from 'react';
import { apiUrl } from './utils';
import './App.css';
import ViewBlogsPreview from './components/ViewBlogsPreview';
import CreateBlogPost from './components/CreateBlogPost';
import ViewIndividualBlogModal from './components/ViewIndividualBlogModal';


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

    <h4>Whitney-Rene's Spain Blog</h4>
    
    <ViewBlogsPreview />

    <ViewIndividualBlogModal />

    <CreateBlogPost />

    <p>{note}</p>

    </>
  )
}

export default App
