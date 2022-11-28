import styled, { keyframes } from "styled-components";
import C from "../../static/ProgramingLanguagesIcons/C.png";
import Css from "../../static/ProgramingLanguagesIcons/Css.png";
import Flask from "../../static/ProgramingLanguagesIcons/Flask.png";
import HTML from "../../static/ProgramingLanguagesIcons/HTML.png";
import Java from "../../static/ProgramingLanguagesIcons/Java.png";
import Javascript from "../../static/ProgramingLanguagesIcons/Javascript.png";
import MongoDB from "../../static/ProgramingLanguagesIcons/MongoDB.png";
import Postgres from "../../static/ProgramingLanguagesIcons/Postgres.png";
import Python from "../../static/ProgramingLanguagesIcons/Python.png";
import React from "../../static/ProgramingLanguagesIcons/React.png";
import Spring from "../../static/ProgramingLanguagesIcons/Spring.png";
import StackIconComponent from "./StackIconComponent";

const StackIconContainer = ({height, width, duration}) => {
  const stackIcons = [

    C,
    Css,
    Flask,
    HTML,
    Java,
    Javascript,
    MongoDB,
    Postgres,
    Python,
    React,
    Spring,
    C,
    Css,
    Flask,
    HTML,
    Java,
    Javascript,
    MongoDB,
    Postgres,
    Python,
    React,
    Spring,
  
  ].map((icon) => <StackIconComponent icon={icon} />);

  


  const margin = stackIcons.length/2 + height * 14.28

  return (

<IconContainerDiv width={width}>
      <IconHolderDiv  margin={margin} duration={duration} >
        <IconDiv height={height}>{stackIcons}</IconDiv>
      </IconHolderDiv>
    </IconContainerDiv>
  );
};

const IconDiv = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height + "vw" : "10vw")};
  justify-content: left;
  gap: 1vw;
`;

const IconScrollAnimation = (margin) => keyframes`
100% {margin-left: -${margin}vw}
`;
const IconHolderDiv = styled.div`
animation: ${props => IconScrollAnimation(props.margin)} ${props => props.duration ? props.duration+ "s" : "20s"} linear infinite;
// margin-left: ${props => props.margin ? props.margin*-1 + "vw": null};
  &:hover {
    animation-play-state: paused;
  }
`;

const IconContainerDiv = styled.div`
  overflowX: hidden;
  width: ${props => props.width ? props.width +"vw" : null};
`;

export default StackIconContainer;
