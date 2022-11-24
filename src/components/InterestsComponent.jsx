import styled from "styled-components";
import { StyledH2, StyledH3, StyledP } from "./NameComponent";

const Interests = () => {
    return (
        
        <InterestsDiv> 
        <StyledH3>Interests</StyledH3>
        <StyledP>Code, Maths, Online games, Extreme sports, Motorcycles, Quantum physics</StyledP>
        </InterestsDiv>
        
    )
};


const InterestsDiv = styled.div`
padding-left: 6.9mm;
padding-top: 0.5mm;

`
export default Interests;