import React from 'react'
import '../comment/comment.scss'
import author from '../../images/author.jpg'
const Comment = () => {
  return (
   <div className="comment">
       <p>Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas</p>
       <div className="person d-flex align-items-center">
           <div className="person-img">
               <img src={author} alt="" />
           </div>
           <div className="person-text ps-2 pt-3">
               <h3>Jim M.</h3>
               <p>Software Engineer</p>
           </div>
       </div>
   </div>
  )
}

export default Comment