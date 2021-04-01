import { Button } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import resumeData from "../resumeData";

const BannerHeader = styled.header`
  background: #111 url(${resumeData.imagebaseurl}) bottom center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  object-fit: contain;
  height: 448px;
  margin-left: --5px;
`;

const BannerContent = styled.div`
  width: 90vw;
  margin-left: 30px;
  padding-top: 140px;
  h5 {
    font-size: 0.8rem;
    font-weight: 800;
    text-align: justify;
    line-height: 1.3;
    width: 50vw;
  }
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const BannerButtons = styled.header`
  display: flex;

  text-decoration: none;
  a {
    text-decoration: none;
  }
  button {
    color: white;
    font-weight: 600;
    text-transform: none;
    background-color: black;
    opacity: 0.6;
    margin-right: 20px;
    cursor: pointer;
  }
  button:hover {
    color: black;
    background-color: white;
    transition: all 0.2s;
  }
  img,
  svg {
    width: 20px;
    margin-right: 10px;
  }
`;

const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

function Banner() {
  function getIcon(link) {
    return link.name === "LinkedIn" ? (
      <LinkedIn />
    ) : link.name === "Github" ? (
      <GitHub />
    ) : (
      <img src={link.image} alt={link.name} />
    );
  }

  return (
    <BannerHeader id="top">
      <BannerContent>
        <h1>{resumeData.name}</h1>
        <h3>{resumeData.role}</h3>
        <BannerButtons>
          {resumeData.socialLinks.map((socialLink) => (
            <a
              key={socialLink.url}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                {getIcon(socialLink)}
                {socialLink.name}
              </Button>
            </a>
          ))}
        </BannerButtons>
        <h5>{resumeData.roleDescription}</h5>
      </BannerContent>
      <BannerFadeBottom />
    </BannerHeader>
  );
}

export default Banner;
