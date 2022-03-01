import Tracker from './Tracker'
import Reply from './Reply'
import { useState } from 'react';

const Comment = ({ mainComment, currentUser }) => {
    
    const [showReply, setShowReply] = useState(false);

    const setReply = () => setShowReply(!showReply)

    return (  
        <div className="container">
            <div className="main-comment">
                <Tracker score={mainComment.score} />
                <div className="comment-body">
                    <div className="comment-header">
                        <div className="header-left">
                            <img src={mainComment.user.image.png} alt="user-img" className='avatar' />
                            <h4 className="name">{mainComment.user.username}</h4>
                            {(mainComment.user.username === currentUser.username) ? <h5 className="current-user">you</h5> : null}
                            <h5 className='timestamp'>{mainComment.createdAt}</h5>
                        </div>
                        {(mainComment.user.username === currentUser.username) ?
                            <div className="owner-ctrl">
                                <button className='clean-btn header-right'>
                                    <img src="./images/icon-delete.svg" alt="" className='icon' />
                                    <h4 className='delete-btn'>Delete</h4>  
                                </button>
                                <button className='clean-btn header-right'>
                                    <img src="./images/icon-edit.svg" alt="" className='icon' />
                                    <h4 className='edit-btn'>Edit</h4>  
                                </button>
                            </div>
                            :     
                            <button className='clean-btn header-right' onClick={setReply}>
                                <img src="./images/icon-reply.svg" alt="" className='icon' />
                                <h4 className='reply-btn'>Reply</h4>  
                            </button>            
                        }
                    </div>
                    <div className="comment-content">
                        {mainComment.content}
                    </div>
                </div>
            </div>
            {showReply ? <Reply commentOwner={mainComment.user.username} currentUser={ currentUser}/> : null }
        </div>
  )
}

export default Comment