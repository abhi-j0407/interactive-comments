import Comment from "./Comment"

const CommentWithReplies = ({ mainComment, currentUser}) => {
    return (
    <div className="comment-with-replies">
            <Comment mainComment={mainComment} currentUser={currentUser}/>
            <div className="reply-section">
                {
                mainComment.replies.map((reply) => {
                    return (
                        <div className='reply'>
                            <span className="vertical-line"></span>
                            <Comment mainComment={reply} key={reply.id} currentUser={currentUser}/>
                        </div> 
                    )
                    })
                }
            </div>
    </div>
  )
}

export default CommentWithReplies