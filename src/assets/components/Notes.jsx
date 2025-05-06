export default function Notes() {
  return (
    <div className="notes">
      <div className="background-wrapper">
        <img src="/images/pills2.png" alt="pens" className="bg-pills2" />
        <img
          src="/images/stationary.png"
          alt="stationaries"
          className="bg-stationary"
        />
      </div>
      <div className="notes-container">
        <p className="notes-main-text">Remember to rest and stay hydrated 😌</p>
        <p className="notes-add-text">
          Prepared by your amazing girlfriend. <span>You're welcome 💋</span>
        </p>
      </div>
    </div>
  );
}
