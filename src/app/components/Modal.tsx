"use client";
import React from "react";

export default function Modal() {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  React.useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              peLorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident peLorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident peLorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident peLorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident peLorem ipsum dolor sit
              amet consectetur adipisicing elit. Provident peLorem ipsum dolor
              sit amet consectetur adipisicing elit. Provident peLorem ipsum
              dolor sit amet consectetur adipisicing elit. Provident peLorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident
              peLorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident peLorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident peLorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident peLorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident peLorem ipsum dolor sit
              amet consectetur adipisicing elit. Provident pe
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
