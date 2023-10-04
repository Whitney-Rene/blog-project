import { useState, useEffect } from "react";
import { apiUrl } from "../utils";

function ViewBlogsPreview ()  {

    const [previewData, setPreviewData] = useState([]);

    const blogsPreviewData = async () => {
        try {
            const response = await fetch(`${apiUrl}/blogpreview`);
            if(!response.ok) {
                throw new Error ("Failed to fetch preview data for blogs");
            }
            const data = await response.json();
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
            <h1></h1>

            <div>
            {previewData.map((item) => (
                
            <div key={`${item.blog_id}-${item.author_id}`}>
                    <div>{item.blog_picture}</div>
                    <div>{item.blog_title}</div>
                    <div>{item.author_name}</div>
                    <div>{item.blog_publishdate}</div>
                </div>

            ))}
            </div>

        </>
    )
};

export default ViewBlogsPreview;