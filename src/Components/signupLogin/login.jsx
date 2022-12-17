import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

//function component
const Login = () => {
  const user = {
    email: "",
    password: "",
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const checkUser = JSON.parse(localStorage.getItem("user"));
    const alreadyExist = checkUser.find((stored) => {
      const validPassword = user.password === stored.password;
      const validEmail = user.email === stored.email;
      localStorage.setItem("Authorized", stored.email);
      return validPassword && validEmail;
    });
    if (alreadyExist) {
      navigate("/movies/addMovie");
    } else {
      setShowModal(true);
      setModalMessage(
        "This account doesn't exist or you typed the wrong combination."
      );
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState();
  const hideModal = () => {
    setShowModal(false);
    window.location.reload();
  };
  const navigate = useNavigate();

  return (
    <div className="login">
      <h3 className="login-header">Already have an account?</h3>
      <form onSubmit={onSubmit}>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          onChange={(e) => (user.email = e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => (user.password = e.target.value)}
          required
        />
        <button className="login-btn" type="submit">
          Log in
        </button>
      </form>
      <Modal
        show={showModal}
        modalMessage={modalMessage}
        handleClick={hideModal}
      ></Modal>
    </div>
  );
};

export default Login;
