const Reply = ({ commentOwner, currentUser }) => {

  const filePath = `./images/avatars/image-${currentUser.username}.png`
  
  return (
    <div className= 'container'>
      <div className="reply-container">
        <div className="user-img">
          <img src={filePath} alt="user-img" className='reply-avatar' />
        </div>
        <div className="reply-area">
          <form action="#" className="reply-form">
            <textarea name="reply-textarea" id="reply-text" cols="36" rows="4" className="reply-textarea" defaultValue={`@${commentOwner}`}></textarea>
            <button type="submit" className="reply-button">REPLY</button>
          </form>
        </div>
      </div>    
    </div>
  )
}

export default Reply