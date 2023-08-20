import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import "./ErrorModal.css";

const ErrorModal = ({ onConfirm, title, message }) => {
  return (
    <div>
      <div className="backdrop" onClick={onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
