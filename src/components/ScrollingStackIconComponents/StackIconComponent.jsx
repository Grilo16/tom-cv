import { useContext } from "react";
import styled from "styled-components";
import { OrbContext } from "../LayoutComponents/OrbsContainer";

const StackIconComponent = ({icon, name}) => {

    const {state, dispatch} = useContext(OrbContext)

 const handleSelectStackItem = () => {
    dispatch({type: "SelectStackItem", selectedStackItem: name })

 }

    return (
        <StyledImg onClick={handleSelectStackItem} src={icon} height={"100%"}/>
        )
};

const StyledImg = styled.img`
transition: 2s;
&:hover{
    scale: 1.4;
}
&:before{
    opacity: 0%
}
&:after{
    opacity: 100%
}
`


export default StackIconComponent