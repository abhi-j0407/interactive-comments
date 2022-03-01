import './App.css'
import commentData from './data.json'
import CommentWithReplies from './components/CommentWithReplies';
import AddComment from './components/AddComment';


function App() {
  return (
    <main>
      <div className="App">
        <div className="main-container">
          {
            commentData.comments.map((comment) => {
              return (
                <CommentWithReplies mainComment={comment} key={comment.id} currentUser={commentData.currentUser}/>
              )
              
            })
          }
          <AddComment currentUser={commentData.currentUser}/>
        </div>
      </div>
    </main>
  );
}

export default App;
