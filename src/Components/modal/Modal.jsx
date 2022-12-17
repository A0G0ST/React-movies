import React from "react";
const Modal = (props) => {
  return (
    <>
      {props.show && (
        <div className="modal">
          <h1>{props.modalMessage}</h1>
          <button className="modal-btn" onClick={props.handleClick}>
            ACCEPT
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
