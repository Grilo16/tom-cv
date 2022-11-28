import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import DisplayDetailsContainer from "../DisplayDetailComponents/DisplayDetailsContainer";
import CenterLogo from "./CenterLogo";

import { OrbContext } from "./OrbsContainer";

const OrbComponent = ({
  label,
  size,
  row,
  column,
  noHover,
  logo,
  orbNumber,
  data,
  display,
}) => {
  const { state, dispatch } = useContext(OrbContext);



  const orbDefaultStyle = { height: size, width: size, rotateY: 0, row: row, column: column, borderRadius: null, marginLeft: null, marginRight: null,opacity: null};

  const [orbStyle, setOrbStyle] = useState(orbDefaultStyle);

  useEffect(() => {
    state.selectedOrb === orbNumber && !display 
      ? setOrbStyle((orbStyle) => ({
          ...orbStyle,
          height: size * 1.5, 
          width: size * 3,
          borderRadius: 1,
          rotateY: 0,
        }))
        : display &&  state.selectedOrb !== 5
        ? setOrbStyle((orbStyle) => ({
          ...orbDefaultStyle,
          marginLeft: 0,
          marginRight: 0,
          width: 0.1,
          height: 0.1,
          borderRadius: 2,
          opacity: 0.1,
          noHover: true
        }))
        : display &&  state.selectedOrb === 5 && !state.selectedStackItem
        ? setOrbStyle((orbStyle) => ({
          ...orbDefaultStyle,
          marginLeft: 0,
          marginRight: 0,
          width: 0.1,
          height: 0.1,
          borderRadius: 2,
          opacity: 0.1,
          noHover: true
        }))
        : display && state.selectedStackItem && state.selectedOrb === 5
        ? setOrbStyle((orbStyle) => ({
          ...orbDefaultStyle,
          marginLeft: 2,
          marginRight: 25,
          width: 32,
          height: 45,
          borderRadius: 2,
          opacity: 100,
          noHover: true
        }))
        : state.selectedOrb > 0 
        ? setOrbStyle((orbStyle) => ({
          ...orbDefaultStyle,
          }))
        : setOrbStyle((orbStyle) => orbDefaultStyle);
  }, [state.selectedOrb, state.selectedStackItem]);

  const handleSelection = () => {
    dispatch({ type: "SelectOrbNumber", orbNumber });
    if (orbNumber !== 5){
      dispatch({ type: "SelectStackItem", selectedStackItem: null });
    }

  };

  const handleDeselectOrb = () => {
    dispatch({ type: "SelectOrbNumber", orbNumber: 0 });
    dispatch({ type: "SelectStackItem", selectedStackItem: null });
  };

  if (logo) {
    return (
      <OrbElementDiv
        gridRow={orbStyle.row}
        gridColumn={orbStyle.column}
        height={orbStyle.height}
        width={orbStyle.width}
        rotateY={orbStyle.rotateY}
        noHover={noHover}
        onClick={handleDeselectOrb}
        >
        <CenterLogo size={size} />
      </OrbElementDiv>
    );
  } else {
    return (
      <OrbElementDiv
      gridRow={orbStyle.row}
      gridColumn={orbStyle.column}
      height={orbStyle.height}
      width={orbStyle.width}
      rotateY={orbStyle.rotateY}
      borderRadius={orbStyle.borderRadius}
      noHover={noHover ? noHover : orbStyle.noHover ? orbStyle.noHover : null}
      onClick={!display ? handleSelection : null}
      justifyContent={state.selectedOrb === orbNumber ? "top" : "center"} 
      overflow={state.selectedOrb === orbNumber ? "hidden" : null} 
      marginLeft={orbStyle.marginLeft}
      marginRight={orbStyle.marginRight}
      opacity={orbStyle.opacity}

      >
        {label ? <OrbLabelP fontSize={size / 4}>{label}</OrbLabelP> : " "}
       {state.selectedOrb === orbNumber 
       ?
       <ContentDiv>
        {data ? data : null}
        </ContentDiv>
      :display && state.selectedStackItem  
      ? <ContentDiv>
        <DisplayDetailsContainer/>
      </ContentDiv>
      :null
      }
      </OrbElementDiv>
    );
  }
};

const OrbElementDiv = styled.div`
  transition: 0.5s;
  opacity: ${props => props.opacity ? props.opacity+ "%" : null};
  height: ${(props) =>
    props.height
      ? props.height + "vw"
      : props.size
      ? props.size + "vw"
      : "80vw"};
  width: ${(props) =>
    props.width ? props.width + "vw" : props.size ? props.size + "vw" : "40vw"};
  background-color: #515369;
  grid-row: ${(props) => (props.gridRow ? props.gridRow : null)};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : null)};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "vw" : "50%"};
  scale: ${(props) => (props.scale ? props.scale : null)};
  margin: ${(props) => (props.margin ? props.margin + "vw" : 0)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + "vw" : 0)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + "vw" : 0)};
  display: flex;
  flex-direction: column;
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "center")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  transform: ${(props) =>
    props.rotateY ? "rotateY(" + props.rotateY + "deg)" : "rotateY(0deg)"};
  &:hover {
    ${(props) =>
      props.noHover ? "transition: 0.5s;" : "transition: 0.5s; scale: 1.1; margin: 1vw;"}
  }
`;

const OrbLabelP = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "vw" : "100%")};
  text-align: center;
  padding: 15px;
  color: #c2c4d1;
  margin: 0;
`;



const ContentDiv = styled.div`
width: 100%;
height: 100%;
`



export default OrbComponent;
