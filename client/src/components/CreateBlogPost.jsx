import { useRef } from 'react';
import { apiUrl } from '../utils';
import '../App.css'

function CreateBlogPost () {

    const blogTitle = useRef();
    const blogContent = useRef();
    const blogPicture = useRef();

    const handlePostRequest = async (data) => {
        try {
            const response = await fetch (`${apiUrl}/addblogpost`, {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            
            if(!response.ok) {
                throw new Error ('Failed to add new blogpost');
            };

        } catch (error) {
            console.error('Error while adding blogpost', error);
        }
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        const newBlogPost = { blog_title: blogTitle.current?.value, blog_content: blogContent.current?.value, blog_picture: blogPicture.current?.value}
        
        try {
            await handlePostRequest(newBlogPost);

            console.log(newBlogPost)
        } catch (error) {
            console.error('Error while adding blogpost:', error);
        }

        blogTitle.current.value = '';
        blogContent.current.value = '';
        blogPicture.current.value = '';

    }

    return (
        <>

        <form className='form' onSubmit={handleSubmit}>

            <p className='formTitle'>Add a blogpost:</p>

            <label>Blog Title</label>
            <input type='text' name='title' required placeholder='title' ref={blogTitle}/>
            <br />

            <label>Blog Content</label>
            <input type='text' name='content' required placeholder='content' ref={blogContent}/>
            <br />

            <label>Blog Picture</label>
            <input type='text' name='photo' placeholder='url or jpg' ref={blogPicture}/>
            <br />

            <div className='space'>
                <button  className='createButton' type='submit'>Create New Blog Post</button>
            </div>

        </form>
        </>
    )

}

export default CreateBlogPost;