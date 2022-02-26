

import Tracker from './Tracker'

const Comment = ({mainComment}) => {

    console.log(mainComment)

    return (  
        <div className="comment-container">
            <div className="main-comment">
                <Tracker score={mainComment.score} />
                <div className="comment-body">
                    <div className="comment-header">
                        <div className="header-left">
                            <img src={mainComment.user.image.png} alt="user-img" className='avatar' />
                            <h4 className="name">{mainComment.user.username}</h4>
                            <h5 className='timestamp'>{mainComment.createdAt}</h5>
                        </div>
                        <div className="header-right">
                            <img src="../images/icon-reply.svg" alt="" className='reply-icon' />
                            <h4 className='reply'>Reply</h4>   
                        </div>
                    </div>
                    <div className="comment-content">
                        {mainComment.content}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Comment