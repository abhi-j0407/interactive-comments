import { useState } from "react";

const Tracker = ({ score }) => {
  
  const [shownScore, setShownScore] = useState(score);
  
  const increaseScore = () => setShownScore(shownScore + 1)
  const decreaseScore = () => setShownScore(shownScore - 1)

  return (
    <div className="tracker">
      <img src="../images/icon-plus.svg" alt="increment-track" className="tracker-icon" onClick={increaseScore}/>
      <h5 className="likes">{shownScore}</h5>
      <img src="../images/icon-minus.svg" alt="decrement-tracker" className="tracker-icon" onClick={decreaseScore}/>
    </div>
  )
}

export default Tracker