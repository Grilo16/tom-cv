import styled from "styled-components";
import { StyledH3, StyledH4, StyledP } from "../NameComponent";

const SkillsComponent = ({skillObj}) => {
    
    const symbolEmpty = "•"    
    const symbolFull = "●"
    const maxSkills = 10

    let expertise = ""
    for (let i = 0; i< maxSkills; i++){
        if(i< skillObj.skillScore){
            expertise += symbolFull
        }else{
            expertise+= symbolEmpty
        }
    }



    return (
        <FlexContainer>
            <LeftColumn>

        <StyledP >{expertise}</StyledP>
            </LeftColumn>
            

            <RightColumn>
        <StyledH4>{skillObj.skillName}</StyledH4>
            </RightColumn>
        </FlexContainer>
    )
};

const RightColumn = styled.div`
display: flex;
margin-left: 5mm;
margin-right: 5mm;
`
const LeftColumn = styled.div`
margin-left: 3.5mm;
min-width: 22.5mm;
text-align: left;
`

const FlexContainer = styled.div`
display: flex;
justify-content: left;
align-items: center;
margin-right: 1mm;
margin-bottom: 3mm;
`

export default SkillsComponent;