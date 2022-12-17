import React from "react";
import Modal from "../modal/Modal";

//class component
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalMessage: "",
      showModal: false,
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const checkUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];
    const validEmail = checkUser.find((stored) => {
      const alreadyExist = this.state.email === stored.email;
      this.setState({
        showModal: true,
        modalMessage:
          "The email you chose already exists! Choose a diffrent one or login",
      });
      return alreadyExist;
    });
    if (!validEmail) {
      checkUser.push(this.state);
      localStorage.setItem("user", JSON.stringify(checkUser));
      this.setState({
        showModal: true,
        modalMessage: "Your account has been added",
      });
      this.state.email = "";
      this.state.password = "";
    }
  };
  inputEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  inputPassword = (e) => {
    this.setState({ password: e.target.value });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="signup">
        <h3 className="signup-header">Don't have an account yet? Sign up</h3>
        <form onSubmit={this.onSubmit}>
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.inputEmail}
            required
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.inputPassword}
            required
          />
          <button className="signup-btn" type="submit">
            Sign up
          </button>
        </form>
        <Modal
          show={this.state.showModal}
          modalMessage={this.state.modalMessage}
          handleClick={this.hideModal}
        ></Modal>
      </div>
    );
  }
}
