import { createContext, useReducer } from "react";
import styled from "styled-components";
import OrbComponent from "./OrbComponent";
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
import { Link } from "react-router-dom";
import StackIconContainer from "../ScrollingStackIconComponents/StackIconContainer";

export const OrbContext = createContext(null)

const reducer = (state, action) => {
  switch(action.type){

    case "SelectOrbNumber":
      return {...state, selectedOrb: action.orbNumber}

    case "SelectStackItem": 
      return {...state, selectedStackItem : action.selectedStackItem}

    default: 
      return state
  }
}

const OrbsContainer = ({OrbSize}) => {

const initialStates = {
  selectedOrb: null,
  selectedStackItem: null
}

const [state, dispatch] = useReducer(reducer, initialStates)




  const OrbData = [
    {
      row: "4/8",
      column: "2",
      ratio: 1,
      label: null,
      data: null,
    },
    {
      row: "4",
      column: "3",
      ratio: 2,
      label: <Link to={"test"}> link</Link>,
      data: null,
    },
    {
      row: "2/4",
      column: "2",
      ratio: 4,
      label: null,
      data: null,
    },
    {
      row: "7",
      column: "1",
      ratio: 8,
      label: null,
      data: null,
    },
    {
      row: "8",
      column: "2",
      ratio: 2,
      label: "A longer Label",
      data: null,
    },
    {
      row: "6/8",
      column: "3",
      ratio: 4,
      label: "Skills",
      data: <StackIconContainer height={5} width={20} duration={6}/>
      ,
    },
    {
      row: "3",
      column: "4",
      ratio: 8,
      label: null,
      data: null,
    },
    {
      row: "2/11",
      column: "5",
      ratio: 1,
      display: true,
      label: " ",
      data: null,
    },
  ].map((orb, index) => {
    const maxSize = OrbSize ? OrbSize : 13;
    if (index === 0){
        return (
            <OrbComponent key={index} label={orb.label ? orb.label: "test"} size={maxSize/orb.ratio} row={orb.row} column={orb.column} noHover={true} logo={true}/>
            )
    }
    return (
        <OrbComponent key={index} orbNumber={index}  label={orb.label ? orb.label: "test"}  size={maxSize/orb.ratio} row={orb.row} column={orb.column} data={orb.data} display={orb.display}/>

    );
  });


  return (
    <OrbContext.Provider value={{state, dispatch}}>

    <PageContainerDiv>
<GridContainerDiv >
  {OrbData}
    </GridContainerDiv>
    </PageContainerDiv>
    </OrbContext.Provider>
    )
};


const PageContainerDiv = styled.div`
display: flex;
flex-direction: rows;
align-items: center;
justify-content: center;

`

const GridContainerDiv = styled.div`
display: grid;
grid-auto-columns: max-content;
grid-auto-rows: max-content;
justify-content: center;
margin-left: 35%;
perspective: 100px;
perspective-origin: 50% 30%;


`

export default OrbsContainer;
