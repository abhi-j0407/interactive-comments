import './comment.css'


import Tracker from './tracker'

const comment = () => {
    
    return (
      
    <div className="comment-container">
            <Tracker />
            <div className="comment-body">
                <div className="comment-header">
                    <div className="header-left">
                        <img src="../images/avatars/image-amyrobson.png" alt="amyrobson" className='avatar' />
                        <h4 className="name">amyrobson</h4>
                        <h5 className='timestamp'>1 month ago</h5>
                    </div>
                    <div className="header-right">
                        <img src="../images/icon-reply.svg" alt="" className='reply-icon' />
                        <h4 className='reply'>Reply</h4>   
                    </div>
                </div>
                <div className="comment-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, omnis rerum ut eos fugit fugiat quo
                    cupiditate aut minima asperiores eligendi accusantium, dolor maxime beatae error commodi sequi placeat
                    aliquam.
                </div>
            </div>
    </div>
  )
}

export default comment