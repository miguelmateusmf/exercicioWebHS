import React from "react";
import editImg from "../images/edit.png";
import Image from "next/image";

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
      <button onClick={toggleModal} className="">
        <Image src={editImg} alt="edit" height="24" />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="flex justify-between ">
              <h2>Edit Task</h2>
              <button className="font-semibold mb-2" onClick={toggleModal}>
                X
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="p-2 rounded shadow"
                type="text"
                value={tempName}
                placeholder="Add Task"
                onChange={(e) => setTempName(e.target.value)}
              ></input>
              <input
                className="p-2 rounded shadow"
                type="date"
                value={tempDate}
                onChange={(e) => setTempDate(e.target.value)}
              ></input>
              <button
                aria-label="Edit task"
                className={`mb-3 border border-webhs-blue font-semibold p-2 rounded shadow focus:outline-none w-full  ${
                  tempDate === "" || tempName === ""
                    ? "border-gray-500 bg-white text-grey"
                    : "border-webhs-blue bg-white text-webhs-blue hover:bg-webhs-blue hover:text-white transition hover:duration-300 duration-300 "
                }`}
                onClick={(e) => edit(id, tempName, tempDate)}
                disabled={tempDate === "" || tempName === "" ? true : false}
                title="Make sure to choose a name and date to submit the task!"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
