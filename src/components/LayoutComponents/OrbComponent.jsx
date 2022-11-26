import { useState } from "react";
import { Link } from "react-router-dom";
import styled, {Keyframes} from "styled-components";
import pdfIcon from "../../static/icons/pdfIcon.png"
import C from "../../static/ProgramingLanguagesIcons/C.png"
import Css from "../../static/ProgramingLanguagesIcons/Css.png"
import Flask from "../../static/ProgramingLanguagesIcons/Flask.png"
import HTML from "../../static/ProgramingLanguagesIcons/HTML.png"
import Java from "../../static/ProgramingLanguagesIcons/Java.png"
import Javascript from "../../static/ProgramingLanguagesIcons/Javascript.png"
import MongoDB from "../../static/ProgramingLanguagesIcons/MongoDB.png"
import Postgres from "../../static/ProgramingLanguagesIcons/Postgres.png"
import Python from "../../static/ProgramingLanguagesIcons/Python.png"
import React from "../../static/ProgramingLanguagesIcons/React.png"
import Spring from "../../static/ProgramingLanguagesIcons/Spring.png"
import { keyframes } from "styled-components";
const OrbComponent = () => {


  
  const [selectedOrb, setSelectedOrb] = useState("")
  
  const stackIcons = [C, Css, Flask, HTML, Java, Javascript, MongoDB, Postgres, Python, React, Spring, C, Css, Flask, HTML, Java, Javascript, MongoDB, Postgres, Python, React, Spring].map(icon => <img height={"125vw"} src={icon}/>) 




  const height = 23;
  const width = height;

const handleSelectOrb = () =>{
  setSelectedOrb()
}

  return (
    <div style={{ overflow: "hidden" }}>
      <OrbDiv>

        <OrbElement
          gridRow={"4/8"}
          gridColumn={"8/16"}
          height={height}
          width={width}
          noHover={true}
          >
            <div style={{display: "flex", gap: "2vw", justifyContent: "space-evenly", marginRight: "15vw"}}>
      <div>

        <FirstNameH1 height={height}>Tom</FirstNameH1>
        <JobTitleP>Software developer</JobTitleP>
      </div>
          <SurnameH1> Britton </SurnameH1>{" "}
            </div>
        </OrbElement>

{selectedOrb === "1" ? 
        <OrbElement
        gridRow={"4/5"}
        gridColumn={"17/20"}
        height={height/1.5}
        width={width+20}
        borderRadius={"20"}
        onClick={()=>setSelectedOrb("0")}
        scale={"1.1"}
        noHover={true}
        marginLeft={2}
        style={{overflow: "hidden"}}
        >
          <IconHolderDiv style={{display: "flex", gap:"1vw"}}>

          {stackIcons}
          </IconHolderDiv>
        </OrbElement>
          :
        <OrbElement
        gridRow={"4/5"}
        gridColumn={"17/20"}
        height={height / 2}
        width={width / 2}
        onClick={()=>setSelectedOrb("1")}
        >
          {" "}
        </OrbElement>
        }

        <OrbElement
          gridRow={"2/4"}
          gridColumn={"8/10"}
          height={height / 4}
          width={width / 4}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"7"}
          gridColumn={"7"}
          height={height / 8}
          width={width / 8}
        >
          <Link to={"pdf"} style={{textDecoration: "none", color: "#c2c4d1", textAlign: "center"}}>
          <OrbTextP>cv</OrbTextP>
          <OrbTextP backgroundColor={"#585f69"}>pdf</OrbTextP>
          </Link>
        </OrbElement>

        <OrbElement
          gridRow={"16"}
          gridColumn={"8"}
          height={height / 2}
          width={width / 2}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"6/8"}
          gridColumn={"17"}
          height={height / 4}
          width={width / 4}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"3"}
          gridColumn={"19"}
          height={height / 8}
          width={width / 8}
        >
          {" "}
        </OrbElement>

        <DiagonalBarElement
          gridRow={"16"}
          gridColumn={"1"}
          width={height / 8}
          height={40}
          marginLeft={"-30"}
          marginTop={"-5.5"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"16"}
          gridColumn={"1"}
          width={height / 8}
          height={45}
          marginLeft={"-27"}
          marginTop={"-6"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"1"}
          gridColumn={"15"}
          width={height / 8}
          height={45}
          marginTop={"-33"}
          marginBottom={"-5"}
          marginRight={"-10"}
          marginLeft={"5"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"1"}
          gridColumn={"15"}
          width={height / 8}
          height={45}
          marginTop={"-33"}
          marginBottom={"-5"}
          marginRight={"-10"}
          marginLeft={"10"}
        >
          {" "}
        </DiagonalBarElement>
      </OrbDiv>
    </div>
  );
};

const JobTitleP = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
  color: #515369;
  margin: 0;
  margin-top: -1vw;
`;

const FirstNameH1 = styled.h1`
  position: relative;
  font-size: 6.9vw;
  font-weight: 600;
  color: #515369;
  margin: 0;
`;

const SurnameH1 = styled.h1`
  font-size: 6.9vw;
  font-weight: 600;
  color: #c1c4d2;
  margin: 0;
`;

const OrbDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  justify-content: center;
`;

const OrbElement = styled.div`
  height: ${(props) => (props.height ? props.height + "vw" : "80vw")};
  width: ${(props) => (props.width ? props.width + "vw" : "40vw")};
  background-color: #515369;
  grid-row: ${(props) => (props.gridRow ? props.gridRow : null)};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : null)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius + "vw" : "50%")};
  scale: ${(props) => (props.scale ? props.scale  : null)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: ${(props)=>props.marginLeft ? props.marginLeft + "vw" : null};

  &:hover {
    ${
      (props) =>
        props.noHover
          ? "transition: 0.5s;"
          : "transition: 0.5s; scale: 1.1; "
      // scale:  ${(props)=>props.noHover ? null : "1.1"};
      //   height: ${(props) => (props.height ? props.height + 15 + "vw" : "80vw")};
      //   width: ${(props) => (props.width ? props.width + 15 + "vw" : "40vw")};
      // padding-left: 10vw;
      // margin-right: 85vw;
      // margin-left: 50vw;
    }
  }
`;

const DiagonalBarElement = styled.div`
  height: ${(props) => (props.height ? props.height + "vw" : "80vw")};
  width: ${(props) => (props.width ? props.width + "vw" : "40vw")};
  background-color: #555f69;
  grid-row: ${(props) => (props.gridRow ? props.gridRow : null)};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : null)};
  border-radius: 25vw;
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "vw" : null};
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "vw" : null};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "vw" : null)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "vw" : null};
  transform: rotate(45deg);
`;


const IconScrollAnimation = keyframes`
0% {margin-left: 0vw}
100% {margin-left: 196.3vw}
`
const IconHolderDiv = styled.div`
display: flex;
gap: 2vw;
margin-right: 160vw;
animation: ${IconScrollAnimation} 20s linear infinite;
&:hover {
  animation-play-state: paused;  
}

`

const OrbTextP = styled.p`
color: #c2c4d1;
margin: 0;
background-color: ${(props) => props.backgroundColor ? props.backgroundColor : null};
border-radius: 1vw;
width:  ${(props) => props.backgroundColor ? "2vw" : null};
`
export default OrbComponent;
