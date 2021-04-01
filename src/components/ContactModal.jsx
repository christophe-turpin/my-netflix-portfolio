import { Fade, Modal, Backdrop, Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import * as emailjs from "emailjs-com";

const CModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: auto;
  a {
    color: white;
  }
  a:hover {
    color: red;
  }
`;

const ContactForm = styled.div`
  form {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    min-height: 40vh;
    padding: 15px;
  }
  input,
  textarea {
    background-color: #111;
    opacity: 0.7;
    color: white;
    padding: 10px;
    border: 1px gray solid;
  }
  textarea {
    min-height: 20vh !important;
  }
  button {
    color: white;
    font-weight: 600;
    text-transform: none;
    background-color: black;
    margin-right: 20px;
    cursor: pointer;
    margin-top: 20px;
  }
  button:hover {
    color: red;
    transition: all 0.2s;
  }
`;

const CFade = styled(Fade)`
  background-color: #111;
  color: white;
  border: none;
  min-height: 15vh;
`;

const FadeDiv = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

function ContactModal(props) {
  const { contact, open, handleClose } = props;
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleSubmit() {
    let templateParams = {
      from_name: `${message.name}, ${message.email}`,
      to_name: "daisukeleblonx@gmail.com",
      subject: message.subject,
      message_html: message.message,
    };
    emailjs.send(
      "gmail",
      "template_6gZTJ4oN",
      templateParams,
      "user_A36dpAU6B7XJQ6rXxh5j0"
    );
    resetForm();
    alert("Votre message a bien été envoyé");
  }
  function resetForm() {
    setMessage({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  return (
    <CModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <CFade in={open}>
        <FadeDiv>
          <h2 id="transition-modal-title">Contact par {contact}</h2>
          {contact === "Email" && (
            <ContactForm>
              <h4>
                Envoyé un mail directement à{" "}
                <a href="mailto:christophe.turpin.dev@gmail.com">
                  christophe.turpin.dev@gmail.com
                </a>{" "}
                <br />
                Ou remplissez ce formulaire pour lui envoyer un message
              </h4>
              <br />
              <form onSubmit={handleSubmit}>
                <label className="text-muted">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={message.name}
                  onChange={(e) =>
                    setMessage({ ...message, name: e.target.value })
                  }
                  placeholder="Votre nom"
                />
                <label className="text-muted">Adresse email </label>
                <input
                  type="email"
                  name="email"
                  value={message.email}
                  onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                  }
                  placeholder="Votre adresse email"
                />
                <label className="text-muted">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={message.subject}
                  onChange={(e) =>
                    setMessage({ ...message, subject: e.target.value })
                  }
                  placeholder="Objet du contact"
                />
                <label className="text-muted">Message</label>
                <textarea
                  name="message"
                  className="text-primary"
                  placeholder="Votre message"
                  value={message.message}
                  onChange={(e) =>
                    setMessage({ ...message, message: e.target.value })
                  }
                />
                <Button type="submit">Envoyer</Button>
              </form>
            </ContactForm>
          )}
          {contact === "Téléphone" && (
            <a href="tel:+33750839660">07.50.83.96.60</a>
          )}
        </FadeDiv>
      </CFade>
    </CModal>
  );
}

export default ContactModal;
