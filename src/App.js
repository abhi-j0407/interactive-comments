import './App.css'
import commentData from './data.json'
import CommentWithReplies from './components/CommentWithReplies';


function App() {
  console.log(commentData)
  return (
    <div className="App">
      <div className="main-container">
        {
          commentData.comments.map((comment) => {
            return (
              <CommentWithReplies mainComment={comment} key={comment.id} currentUser={commentData.currentUser}/>
            )
            
          })
        }
      </div>
    </div>
  );
}

export default App;
