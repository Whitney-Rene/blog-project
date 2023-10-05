

function ViewEntireBlog ({selectedData, closeModal}) {

// user will click on icon and see modal with all info from blogpost table in postgres
//will I need to call an instace of this component within another component?

console.log(selectedData);

return (
    <>
        <div className="backdrop"></div>

        <div className='modal'>
        <p>{selectedData.blog_content}</p>
        <button className='close' onClick={closeModal}>close</button>
        </div>

    </>
)

}

export default ViewEntireBlog