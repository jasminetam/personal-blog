import React from "react";
import { RiMailSendFill } from "react-icons/ri";
import { BiReset } from "react-icons/bi";

const contactState = {
  name: "",
  email: "",
  message: "",
  completed: false,
};

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = contactState;
  }

  async inputData(messageData) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: messageData,
      }),
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetInput = () => {
    this.setState(contactState);
  };

  render() {
    const { name, email, message, completed } = this.state;
    return (
      <div className="contact">
        <div className="contactContainer">
          {!completed ? (
            <div className="contactWrapper">
              <div className="contactHeading">Send a Message</div>
              <div className="contactForm">
                <label  className="contactFormItems" htmlFor="name">Name:</label>
                <input
                  className="contactFormItems"
                  name="name"
                  value={name}
                  onChange={(e) => this.handleChange(e)}
                />
                <label className="contactFormItems" htmlFor="email">Email Address:</label>
                <input
                  className="contactFormItems"
                  name="email"
                  value={email}
                  onChange={(e) => this.handleChange(e)}
                />
                <label className="contactFormItems" htmlFor="message">Message:</label>
                <textarea
                  className="contactFormMsg"
                  name="message"
                  value={message}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="sendButton">
                <button
                  className="buttonItems"
                  type="submit"
                  onClick={() => {
                    this.inputData({ name, email, message });
                    this.setState((currentState) => ({
                      completed: !currentState.completed,
                    }));
                  }}
                >
                  <RiMailSendFill /> Send
                </button>
                <button
                  className="buttonItems"
                  onClick={() => this.resetInput()}
                >
                  <BiReset />Reset
                </button>
              </div>
            </div>
          ) : (<div>
              <div className="messageSent">Message Sent. Thank you!</div>
              <button></button>
              </div>
          )}
        </div>
      </div>
    );
  }
}

export default ContactForm;
