const Reply = ({commentOwner}) => {
  
  return (
    <div className= 'container'>
      <div className="reply-container">
        <div className="user-img">
          <img src='../images/avatars/image-amyrobson.png' alt="user-img" className='reply-avatar' />
        </div>
        <div className="reply-area">
          <form action="#" className="reply-form">
            <textarea name="reply-textarea" id="" cols="36" rows="4" className="reply-textarea" defaultValue={`@${commentOwner}`}></textarea>
            <button type="submit" className="reply-button">REPLY</button>
          </form>
        </div>
      </div>    
    </div>
  )
}

export default Reply