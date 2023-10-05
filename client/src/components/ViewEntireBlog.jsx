
function ViewEntireBlog ({selectedData, closeModal}) {

return (
    <>
        <div className="backdrop"></div>

        <div className='modal'>

            <p>{selectedData.blog_content}</p>
            <p>(This text above is coming from my blog_content column in my db.)</p>
            <button className='close' onClick={closeModal}>close</button>

        </div>

    </>
)

}

export default ViewEntireBlog