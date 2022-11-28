import { useContext } from "react";
import styled from "styled-components";
import { OrbContext } from "../LayoutComponents/OrbsContainer";
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


const DisplayDetailsContainer = () => {

    const {state, dispatch} = useContext(OrbContext)
    const stackIcons = {

        "C": {label: null, img: C},
        "HTML": {label: null, img: HTML},
        "Css": {label: null, img: Css},
        "Python": {label: "Python", img: Python},
        "Flask": {label: null, img: Flask},
        "Javascript": {label: "Javascript", img: Javascript},
        "React": {label: "React", img: React},
        "Java": {label: null, img: Java},
        "Spring": {label: "Spring", img: Spring},
        "MongoDB": {label: null, img: MongoDB},
        "Postgres": {label: "Postgres", img: Postgres},
        "C": {label: null, img: C},
        "HTML": {label: null, img: HTML},
        "Css": {label: null, img: Css},
        "Python": {label: "Python", img: Python},
        "Flask": {label: null, img: Flask},
        "Javascript": {label: "Javascript", img: Javascript},
        "React": {label: "React", img: React},
        "Java": {label: null, img: Java},
        "Spring": {label: "Spring", img: Spring},
        "MongoDB": {label: null, img: MongoDB},
        "Postgres": {label: "Postgres", img: Postgres},
      
    }


    let selectedLanguage = stackIcons[state.selectedStackItem]

    return (
        <DetailsContainerDiv>

            <DetailsHeader>
            <DetailsImg src={selectedLanguage.img}/>
                    {selectedLanguage.label 
                    ? <DetailsTitle>
                        {selectedLanguage.label} 
                    </DetailsTitle>
                    : null}
            </DetailsHeader>

            
        </DetailsContainerDiv>
        )
};

const DetailsTitle = styled.h1`
font-size: ${(props) => (props.fontSize ? props.fontSize + "vw" : "1.5vw")};
text-align: center;
padding: 15px;
color: #c2c4d1;
margin: 0;
`

const DetailsImg = styled.img`
height: 8vw
`

const DetailsHeader = styled.div`
box-shadow: 0 1vw 1vw rgb(0 0 0 / 0.2);
border-radius: 1vw;
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-around;
align-items: center;
padding-bottom: 1vw;
`

const DetailsContainerDiv = styled.div`
background-color: green
text-align: center
`


export default DisplayDetailsContainer;