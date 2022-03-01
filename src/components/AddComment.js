import React from 'react'

const AddComment = ({currentUser}) => {
    const filePath = `../images/avatars/image-${currentUser.username}.png`
  
    return (
      <div className= 'new-comment-container'>
        <div className="reply-container">
          <div className="user-img">
            <img src={filePath} alt="user-img" className='reply-avatar' />
          </div>
          <div className="reply-area">
            <form action="#" className="reply-form">
              <textarea name="reply-textarea" id="" cols="36" rows="4" className="reply-textarea"></textarea>
              <button type="submit" className="reply-button">SEND</button>
            </form>
          </div>
        </div>    
      </div>
    )
}

export default AddComment