import './comment.css'
import Comment from "./Comment"

const CommentWithReplies = ({ mainComment, replies }) => {
    return (
    <div className="comment-with-replies">
            <Comment mainComment={mainComment} />
            <div className="reply-section">
                {
                replies.map((reply) => {
                    return (
                        <div className='reply'>
                            <span className="vertical-line"></span>
                            <Comment mainComment={reply} key={ reply.id }/>
                        </div> 
                    )
                    })
                }
            </div>
    </div>
  )
}

export default CommentWithReplies