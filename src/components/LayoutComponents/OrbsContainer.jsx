import { createContext, useReducer } from "react";
import styled from "styled-components";
import OrbComponent from "./OrbComponent";

export const OrbContext = createContext(null)

const reducer = (state, action) => {
  switch(action.type){

    case "SelectOrbNumber":
      return {...state, selectedOrb: action.orbNumber}

    default: 
      return state
  }
}

const OrbsContainer = ({OrbSize}) => {

const initialStates = {
  selectedOrb: null
}

const [state, dispatch] = useReducer(reducer, initialStates)


  const OrbData = [
    {
      row: "4/8",
      column: "2",
      ratio: 1,
      label: null,
    },
    {
      row: "4",
      column: "3",
      ratio: 2,
      label: null,
    },
    {
      row: "2/4",
      column: "2",
      ratio: 4,
      label: null,
    },
    {
      row: "7",
      column: "1",
      ratio: 8,
      label: null,
    },
    {
      row: "8",
      column: "2",
      ratio: 2,
      label: "A longer Label",
    },
    {
      row: "6/8",
      column: "3",
      ratio: 4,
      label: "Skills",
    },
    {
      row: "3",
      column: "4",
      ratio: 8,
      label: null,
    },
  ].map((orb, index) => {
    const maxSize = OrbSize ? OrbSize : 13;
    if (index === 0){
        return (
            <OrbComponent key={index} label={orb.label ? orb.label: "test"} size={maxSize/orb.ratio} row={orb.row} column={orb.column} noHover={true} logo={true}/>
            )
    }
    return (
        <OrbComponent key={index} orbNumber={index}  label={orb.label ? orb.label: "test"}  size={maxSize/orb.ratio} row={orb.row} column={orb.column} />

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
