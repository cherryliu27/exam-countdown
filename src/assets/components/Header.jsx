export default function Header() {
  const today = new Date();

  let daysLeft = 0;

  if (today.getFullYear() === 2025 && today.getMonth() === 4) {
    if (today.getDate() < 25) {
      daysLeft = 25 - today.getDate();
    } else if (today.getDate() < 26) {
      daysLeft = 26 - today.getDate();
    }
  }

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
          <p className="countdown-number">{daysLeft}</p>
        </div>
        <p className="countdown-text">days to go...</p>
      </div>
    </header>
  );
}
