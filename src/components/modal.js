import React from "react";



export default function Modal({closeModal, title}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>{props.title}</h2>
        </div>
        <div className="modal-body"></div>
      </div>
    </div>
  );
}