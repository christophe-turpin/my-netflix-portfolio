import { OpenInNew } from "@material-ui/icons";
import React, { useState } from "react";
import Iframe from "react-iframe";
import styled from "styled-components";

const Contain = styled.div`
  transition-timing-function: ease-in;
  transition: all 0.5s;
  margin: 50px 0;
`;
const RowDiv = styled.div`
  display: flex;
  height: fit-content;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-left: 20px;
  color: white;
  ::-webkit-scrollbar {
    display: none !important;
  }
  ::-moz-scrollbar {
    display: none !important;
  }
`;
const RowTitle = styled.h2``;
const RowPosters = styled.div`
  display: flex;
  height: fit-content;
  padding: 20px;
`;
const Poster = styled.div`
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  width: 200px;
  height: 100px;
  margin-right: 10px;
  transition: transform 450ms;
  h6,
  p {
    display: none;
  }
  h3 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  &:hover {
    background-image: url(${(props) => props.hover || props.background});
    transition: transform 450ms;
    transform: scale(1.2);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    h6,
    p {
      display: flex;
      flex-flow: row wrap;
      font-size: 0.7rem;
      background-color: #111;
      opacity: 0.6;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    h6 {
      font-weight: bold;
    }
    h3 {
      display: none;
    }
  }
`;
const FrameDiv = styled.div`
  display: ${(props) => (props.frameObject ? "flex" : "none")};
  flex-flow: column nowrap;
  align-items: center;
`;
// const RowDiv = styled.div``;

function Row({ title, resumeData }) {
  const [frameObject, setFrameObject] = useState(null);

  const handleClick = (element) => {
    frameObject === element ? setFrameObject(null) : setFrameObject(element);
  };

  return (
    <Contain>
      <RowTitle>{title}</RowTitle>
      <RowDiv>
        <RowPosters>
          {resumeData.map((element) => (
            <Poster
              onClick={() => handleClick(element)}
              key={element.id}
              background={element.background}
              hover={element.hover}
            >
              {element?.place && <h3>{element?.place}</h3>}
              {element?.title && <h6>{element?.title}</h6>}
              {element?.description && <p>{element?.description}</p>}
              {element?.period && <p>{element?.period}</p>}
              {element?.Achievements && <p>{element?.Achievements}</p>}
            </Poster>
          ))}
        </RowPosters>
      </RowDiv>
      <FrameDiv frameObject={frameObject}>
        {frameObject?.type === "project" ? (
          <>
            <a
              style={{ color: "white" }}
              href={frameObject?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                Ouvrir le site dans une nouvelle fenêtre <OpenInNew />
              </h4>
            </a>
            <Iframe
              url={frameObject?.url}
              width="100%"
              height="448px"
              id="myId"
              className="frame"
              display="initial"
              position="relative"
            />
          </>
        ) : frameObject?.type === "education" ? (
          <img src={frameObject?.src} alt={frameObject?.title} />
        ) : null}
      </FrameDiv>
    </Contain>
  );
}

export default Row;
