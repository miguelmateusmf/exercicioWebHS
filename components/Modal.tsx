import React from "react";

interface ModalType {
  id: number;
  name: string;
  date: string;
  editTask: Function;
}
export default function Modal({ id, name, date, editTask }: ModalType) {
  const [modal, setModal] = React.useState(false);
  const [tempName, setTempName] = React.useState(name);
  const [tempDate, setTempDate] = React.useState(date);

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

  function edit(id: number, name: string, date: string) {
    editTask(id, tempName, tempDate);
    toggleModal();
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Edit
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Edit Task</h2>
            <div>
              <input
                type="text"
                value={tempName}
                placeholder="Add TODO"
                onChange={(e) => setTempName(e.target.value)}
              ></input>
              <input
                type="date"
                value={tempDate}
                onChange={(e) => setTempDate(e.target.value)}
              ></input>
              <button onClick={(e) => edit(id, tempName, tempDate)}>
                edit
              </button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
