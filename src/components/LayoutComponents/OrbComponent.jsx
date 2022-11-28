import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
}) => {
  const { state, dispatch } = useContext(OrbContext);

  const orbDefaultStyle = { height: size, width: size, rotateY: 0, row: row, column: column, borderRadius: null};

  const [orbStyle, setOrbStyle] = useState(orbDefaultStyle);

  useEffect(() => {
    state.selectedOrb === orbNumber
      ? setOrbStyle((orbStyle) => ({
          ...orbStyle,
          height: size * 1.5, 
          width: size * 3,
          borderRadius: 1,
          rotateY: 0,
        }))
        : state.selectedOrb > 0 
        ? setOrbStyle((orbStyle) => ({
          ...orbDefaultStyle,
          }))
        :

      setOrbStyle((orbStyle) => orbDefaultStyle);
  }, [state.selectedOrb]);

  const handleSelection = () => {
    dispatch({ type: "SelectOrbNumber", orbNumber });
  };

  const handleDeselectOrb = () => {
    dispatch({ type: "SelectOrbNumber", orbNumber: 0 });
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
        noHover={noHover}
        onClick={handleSelection}
      >
        {label ? <OrbLabelP fontSize={size / 4}>{label}</OrbLabelP> : " "}
      </OrbElementDiv>
    );
  }
};

const OrbElementDiv = styled.div`
  transition: 0.5s;
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
  margin: ${(props) => (props.margin ? props.margin + "vw" : null)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

export default OrbComponent;
