import { useState, useEffect } from "react";
import { apiUrl } from "../utils";
import { formatTime } from "../utils";
import ReactModal from 'react-modal';
import '../App.css';
import ViewEntireBlog from "./ViewEntireBlog";

// if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

function ViewBlogPreview ()  {

    const [previewData, setPreviewData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (blogPost) => {
        debugger;
        setSelectedData(blogPost)
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

   //could I put this in the utils.js file?  so I can call it in CreateBlogPost?
    const blogsPreviewData = async () => {
        try {
            const response = await fetch(`${apiUrl}/blogpreview`);
            if(!response.ok) {
                throw new Error ("Failed to fetch preview data for blogs");
            }
            const data = await response.json();
            console.log('data', data)
            setPreviewData(data);
        } catch (error) {
            console.error('Error loading contacts')
        }
    }


    useEffect (() => {
        blogsPreviewData();
        //whatever is in the dependency array, if that changes, call function(s) in useEffect again
        //if the dep array is empty, the function(s) will only run once on the intial render of the page
    }, [previewData]);

    return (
        <>

            <div>
            {previewData.map((item) => (
                
                <div className="blogPreview" key={`${item.blog_id}-${item.author_id}`}>

                    <img className="images" src={`${item.blog_picture}`} alt={`${item.blog_title}`}/>
                    <br />
                    <a href="#" className="blog-title" onClick={() => openModal(item)}>{item.blog_title}</a >
                    <p>by {item.author_name}</p>
                    <p>{formatTime(item.blog_publishdate)}</p>
                    <br/>

                </div>

            ))}
            </div>

            {isModalOpen && (
                <ViewEntireBlog selectedData={selectedData} closeModal={closeModal}/>
            )}

        </>
    )
};

export default ViewBlogPreview;