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
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState({
    modalMessage: "Testing",
    modalImage: "/images/matcha-latte.png",
    modalVideo: "",
    modalAudio: "",
  });

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
    const clickedPrize = prizes.find((prize) => prize.id === id);
    if (!clickedPrize.isFlipped && clickedPrize.includesModal) {
      setTimeout(() => {
        setModalContent({
          modalMessage: clickedPrize.modalMessage,
          modalImage: clickedPrize.modalImage ? clickedPrize.modalImage : null,
          modalVideo: clickedPrize.modalVideo ? clickedPrize.modalVideo : null,
        });
        setIsModalOpen(true);
      }, 2500);
    }

    setPrizes((prev) =>
      prev.map((prize) =>
        prize.id === id ? { ...prize, isFlipped: !prize.isFlipped } : prize
      )
    );

    // console.log(prizes.find((prize) => prize.id === id).length);
  }

  function closeModal() {
    setIsModalOpen((prev) => !prev);
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
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div
              className={`modal-content ${
                modalContent.modalImage ||
                modalContent.modalVideo ||
                modalContent.modalAudio
                  ? "has-image"
                  : "no-image"
              }`}
            >
              <p>{modalContent.modalMessage}</p>
              {Array.isArray(modalContent.modalImage) ? (
                modalContent.modalImage.map((image) => (
                  <img src={image} alt="" />
                ))
              ) : modalContent.modalImage ? (
                <img src={modalContent.modalImage} />
              ) : null}
              {modalContent.modalVideo ? (
                <video width="100%" controls>
                  <source src={modalContent.modalVideo} type="video/mp4" />
                </video>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
