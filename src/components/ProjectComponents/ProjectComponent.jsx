import styled from "styled-components";
import { StyledH3, StyledH4, StyledP } from "../NameComponent";

const ProjectComponent = ({projectObj}) => {

    // {name : "Rogue Bookings", linkRepo : <a href="https://github.com/Grilo16/RogueBookings">Grilo16/RogueBookings</a>, stack: {backEnd: "java/spring", frontEnd: "javaScript/React"}}


    if (projectObj)
    return (
        <FlexContainer>
            <LeftColumn>

        <StyledH4 >{projectObj.name}</StyledH4>
            </LeftColumn>
            


            <RightColumn>
        <StyledH4>{projectObj.linkRepo}</StyledH4>
        <StyledP>{projectObj.stack.backEnd}</StyledP>
        <StyledP>{projectObj.stack.frontEnd}</StyledP>
        {projectObj.liveLink
        ?<StyledH4 backgroundColor={"#8383d4"} borderRadius={"2vw"} paddingRight={"0.5vw"} paddingLeft={"0.5vw"}>{projectObj.liveLink}</StyledH4>
        :null
    }
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

export default ProjectComponent;