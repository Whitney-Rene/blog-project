import { useState, useEffect } from "react";
import { apiUrl } from "../utils";
import { formatTime } from "../utils";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../App.css';

function ViewBlogsPreview ()  {

    const [previewData, setPreviewData] = useState([]);

   //could I put this in the utils.js file?  so I can call it in CreateBlogPost?
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

        <ResponsiveMasonry
            columnsCountBreakPoints={{900:4}}
        >

            <Masonry columnsCount={3} gutter="40px">

                <div>
                {previewData.map((item) => (
                    
                <div className="blogPreview" key={`${item.blog_id}-${item.author_id}`}>
                        <img src={`${item.blog_picture}`} alt={`${item.blog_title}`} style={{ width: '100px', height: 'auto' }}/>
                        <div>{item.blog_title}</div>
                        <div>by {item.author_name}</div>
                        <div>{formatTime(item.blog_publishdate)}</div>
                        <br/>
                    </div>

                ))}
                </div>

                </Masonry>

        </ResponsiveMasonry>

        </>
    )
};

export default ViewBlogsPreview;