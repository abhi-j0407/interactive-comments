const Tracker = ({score}) => {
  return (
    <div className="tracker">
      <img src="../images/icon-plus.svg" alt="increment-track" className="tracker-icon" />
      <h5 className="likes">{score}</h5>
      <img src="../images/icon-minus.svg" alt="decrement-tracker" className="tracker-icon"/>
    </div>
  )
}

export default Tracker