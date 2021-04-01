import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoC from "../assets/logoC.png";
import resumeData from "../resumeData";
import CV_Christophe_TURPIN from "../assets/CV_Christophe_TURPIN.pdf";
import ContactModal from "./ContactModal";

const NavDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 30px;
  z-index: 300;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => props.show && "#111"};
  #logo {
    position: fixed;
    left: 20px;
    top: 20px;
    width: 50px;
    object-fit: contain;
    cursor: pointer;
  }
  #picture {
    width: 40px;
    height: 40px;
    cursor: pointer;
    object-fit: contain;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  top: -10px;
  right: 40px;
  position: relative;
  display: inline-block;
  #down {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    #DropDOwnContent {
      display: block;
    }
    #down {
      transform: rotate(180deg);
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 10px;
  margin-top: 10px;
  margin-bottom: -20px;
  background-color: #111;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  p,
  a {
    height: 33%;
    color: white !important;
    padding: 12px 16px;
    text-decoration: none !important;
    font-size: 0.7rem;
    display: block;
    cursor: pointer;
    position: relative;
    bottom: 20px;
  }
  p:hover,
  a:hover {
    text-decoration: underline !important;
  }
`;

function Nav() {
  const [show, handleShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [contact, setContact] = React.useState("");

  const handleOpen = (type) => {
    setContact(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContact("");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <NavDiv show={show}>
      <a href="#top">
        <img id="logo" src={logoC} alt="logo" />
      </a>
      <Dropdown style={{ float: "left" }}>
        {/* <Email style={{ color: "teal" }} /> */}
        <img id="picture" src={resumeData.picture} alt="Chris" />
        <ArrowDropDown id="down" />
        <DropdownContent id="DropDOwnContent">
          <ArrowDropUp
            style={{
              color: "white",
              width: "60px",
              position: "relative",
              left: "110px",
              bottom: "20px",
            }}
          />
          <a
            href={CV_Christophe_TURPIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le CV
          </a>
          <p onClick={() => handleOpen("Email")}>Contacter par Email</p>
          <p onClick={() => handleOpen("Téléphone")}>Contacter par Téléphone</p>
          <ContactModal
            open={open}
            handleClose={handleClose}
            contact={contact}
          />
        </DropdownContent>
      </Dropdown>
    </NavDiv>
  );
}

export default Nav;
