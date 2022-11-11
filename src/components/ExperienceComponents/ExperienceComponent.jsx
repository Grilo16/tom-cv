import styled from "styled-components";
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledP } from "../NameComponent";
import AccomplishmentComponent from "./AccomplishmentComponent";

const ExperienceComponent = ({experienceObj}) => {

    
    const accomplishmentComponents = experienceObj.accomplishments.map((accomplishmentObj, index)=> {
        return (
            <AccomplishmentComponent accomplishmentObj={accomplishmentObj} key={index}/>
            )
        })
        
        
        
        
        if (experienceObj)
    return (
        <DisplayExperienceDiv>

        <StyledH4>{experienceObj.title}</StyledH4>

        <FlexDiv>
        <StyledP>{experienceObj.business}</StyledP>
        <StyledP>{experienceObj.dates}</StyledP>
        </FlexDiv>


        <StyledUl>
            {accomplishmentComponents}
        </StyledUl>
        </DisplayExperienceDiv>
    )
};


const StyledUl = styled.ul`
margin-top: 0mm;

`

const DisplayExperienceDiv = styled.div`

`
export const FlexDiv = styled.div`
display: flex;
justify-content: space-between;
`

export default ExperienceComponent