export default function Calendar() {
  return (
    <main>
      <div className="calendar-container">
        <h2>
          Calendar <span>Countdown</span>
        </h2>
        <p>
          Unlock a surprise each day to boost your mood, energy and motivation!
        </p>
        <div className="cards-container">
          <div className="card-starter">
            Ready for your <span>Exam Boosters? 💪🏻</span>
          </div>
          <div className="card">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            {/* <p className="card-msg">
              You claim a free selfie! Text #IWANTSELFIE to get a cute selfie
              from me right now hihi test test
            </p> */}
            <p className="card-date">13/5</p>
          </div>
          <div className="card locked">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            <p className="card-date dark">13/5</p>
          </div>
          <div className="card">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            <p className="card-date dark">13/5</p>
          </div>
          <div className="card">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            <p className="card-date dark">13/5</p>
          </div>
          <div className="card">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            <p className="card-date dark">13/5</p>
          </div>
          <div className="card">
            <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
            <p className="card-date dark">13/5</p>
          </div>
        </div>
      </div>
    </main>
  );
}
