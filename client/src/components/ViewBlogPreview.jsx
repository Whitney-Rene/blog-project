import { useState, useEffect } from "react";
import { apiUrl } from "../utils";
import { formatTime } from "../utils";
import ReactModal from 'react-modal';
import '../App.css';
import ViewEntireBlog from "./ViewEntireBlog";

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

function ViewBlogPreview ()  {

    const [previewData, setPreviewData] = useState([]);
    

   //could I put this in the utils.js file?  so I can call it in CreateBlogPost?
    const blogsPreviewData = async () => {
        try {
            const response = await fetch(`${apiUrl}/blogpreview`);
            if(!response.ok) {
                throw new Error ("Failed to fetch preview data for blogs");
            }
            const data = await response.json();
            console.log(data);
            setPreviewData(data);
        } catch (error) {
            console.error('Error loading contacts')
        }
    }

    console.log(previewData)

    useEffect (() => {
        blogsPreviewData();
    }, []);

    return (
        <>

            <div>
            {previewData.map((item) => (
                
                <div className="blogPreview" key={`${item.blog_id}-${item.author_id}`}>
                    <img className="images" src={`${item.blog_picture}`} alt={`${item.blog_title}`}/>
                    <br />
                    <a href="#" className="blog-title" onClick=''>{item.blog_title}</a >
                    <div>by {item.author_name}</div>
                    <div>{formatTime(item.blog_publishdate)}</div>
                    {/* {<ViewIndividualBlogModal prop=?/> } */}
                    <br/>
                </div>

            ))}
            </div>

        </>
    )
};

export default ViewBlogPreview;