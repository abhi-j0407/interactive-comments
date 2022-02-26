import './App.css'
import commentData from './data.json'
// import Comment from './components/Comment'
import CommentWithReplies from './components/CommentWithReplies';


function App() {
  console.log(commentData)
  return (
    <div className="App">
      <div className="main-container">
        {
          commentData.comments.map((comment) => {
            return (
              <CommentWithReplies mainComment={comment} replies={comment.replies} key={ comment.id }/>
            )
            
          })
        }
      </div>
    </div>
  );
}

export default App;
