import Prizes from "../../prizes.js";
import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
// import { useRef, useEffect } from "react";

export default function Calendar() {
  // const { width, height } = useWindowSize();
  // const modalRef = useRef(null);
  const [prizes, setPrizes] = useState(Prizes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: "",
    modalMessage: "",
    modalImage: "",
    modalVideo: "",
    modalAudio: "",
    modalIframe: "",
    outcomeImage: "",
  });

  // useEffect(() => {
  //   if (isModalOpen && modalRef.current) {
  //     modalRef.current.scrollTop = 0;
  //   }
  // }, [isModalOpen]);

  function flipCard(id) {
    const clickedPrize = prizes.find((prize) => prize.id === id);
    if (!clickedPrize.isFlipped && clickedPrize.includesModal) {
      setTimeout(() => {
        setModalContent({
          message: clickedPrize.message,
          modalMessage: clickedPrize.modalMessage
            ? clickedPrize.modalMessage
            : null,
          modalImage: clickedPrize.modalImage ? clickedPrize.modalImage : null,
          modalVideo: clickedPrize.modalVideo ? clickedPrize.modalVideo : null,
          modalAudio: clickedPrize.modalAudio ? clickedPrize.modalAudio : null,
          modalIframe: clickedPrize.modalIframe
            ? clickedPrize.modalIframe
            : null,
          outcomeImage:
            clickedPrize.signedOff && clickedPrize.outcomeImage
              ? clickedPrize.outcomeImage
              : null,
        });
        setIsModalOpen(true);
      }, 2500);
    }

    setPrizes((prev) =>
      prev.map((prize) =>
        prize.id === id ? { ...prize, isFlipped: !prize.isFlipped } : prize
      )
    );
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

  return (
    <main>
      {/* <Confetti width={width} height={height} /> */}
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
              // ref={modalRef}
              className={`modal-content ${
                modalContent.modalImage || modalContent.modalVideo
                  ? "has-image"
                  : "no-image"
              }`}
            >
              <p className="modal-title">{modalContent.message}</p>
              {
                <p className="modal-message">
                  {modalContent.modalMessage ? modalContent.modalMessage : null}
                </p>
              }
              {Array.isArray(modalContent.modalImage) ? (
                modalContent.modalImage.map((image) => (
                  <img src={image} alt="" />
                ))
              ) : modalContent.modalImage ? (
                <img src={modalContent.modalImage} />
              ) : null}
              {modalContent.modalVideo ? (
                <video width="100%" controls playsInline>
                  <source src={modalContent.modalVideo} type="video/mp4" />
                </video>
              ) : null}
              {modalContent.modalAudio ? (
                <audio controls>
                  <source src={modalContent.modalAudio} type="audio/mp4" />
                </audio>
              ) : null}
              {modalContent.modalIframe ? (
                <div
                  className="modal-iframe"
                  dangerouslySetInnerHTML={{ __html: modalContent.modalIframe }}
                />
              ) : null}
              {modalContent.outcomeImage ? (
                <>
                  <p className="modal-title">RECEIPT</p>
                  <img src={modalContent.outcomeImage} alt="" />
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
