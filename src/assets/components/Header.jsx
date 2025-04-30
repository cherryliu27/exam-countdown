export default function Header() {
  return (
    <header className="header">
      <div className="background-wrapper">
        <img src="/images/clock.png" alt="clock" className="bg-clock" />
        <img
          src="/images/pills-bottle.png"
          alt="pills-bottle"
          className="bg-pills-bottle"
        />
        <img src="/images/pills.png" alt="pills" className="bg-pills" />
        <img
          src="/images/stickies.png"
          alt="stickies"
          className="bg-stickies"
        />
      </div>
      <div className="header-container">
        <div className="main-text">
          <h1 className="title">
            <span className="title-name">Pookie's</span>
            <span className="title-text">Exam</span>
            <span className="title-text">Countdown</span>
          </h1>
          <p className="countdown-number">30</p>
        </div>
        <p className="countdown-text">days to go...</p>
      </div>
    </header>
  );
}
