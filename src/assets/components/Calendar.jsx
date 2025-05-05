import Prizes from "../../prizes.js";
import { useState } from "react";

// /* <div className="card locked">
// <img src="/images/matcha-cookie.png" alt="matcha-cookie" />
// <p className="card-date dark">13/5</p>
// </div> */
// {/* <p className="card-msg">
//   You claim a free selfie! Text #IWANTSELFIE to get a cute selfie
//   from me right now hihi test test
// </p> */}

export default function Calendar() {
  const [prizes, setPrizes] = useState(Prizes);

  //   function flipCard(id) {
  //     setPrizes((prev) =>
  //       prev.map((prize) => (
  //         prize.id === id
  //           ? { ...prev, isFlipped: !prize.isFlipped }
  //           : { ...prev };
  //       ))
  //     );
  //   }

  function flipCard(id) {
    setPrizes((prev) =>
      prev.map((prize) =>
        prize.id === id ? { ...prize, isFlipped: !prize.isFlipped } : prize
      )
    );
  }

  const prizeElement = prizes.map((prize) => {
    const today = new Date();
    const isLocked = prize.date.getDate() > today.getDate();

    return (
      <div
        className="card-container"
        onClick={() => !isLocked && flipCard(prize.id)}
      >
        <div
          className={`card ${isLocked ? "locked" : ""} ${
            prize.isFlipped ? "flipped" : ""
          }`}
        >
          <div className="card-front">
            <img src={prize.img} alt="matcha-cookie" />
          </div>
          <div className="card-back">
            <p>{prize.message}</p>
          </div>
        </div>
        <p className={`card-date ${isLocked ? "dark" : ""}`}>
          {prize.date.getDate()}/{prize.date.getMonth() + 1}
        </p>
      </div>
    );
  });

  console.log(prizeElement);

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
          {prizeElement}
        </div>
      </div>
    </main>
  );
}
