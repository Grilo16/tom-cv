import styled from "styled-components";
import { FlexDiv } from "../ExperienceComponents/ExperienceComponent";
import { StyledH4, StyledH3, StyledP } from "../NameComponent";

const EducationComponent = ({certificateObj}) => {


    return (
        <>
        {certificateObj ?
            
            <CertificatesDiv>
            <StyledH4>{certificateObj.title}</StyledH4>
            <FlexDiv>
            <StyledP>{certificateObj.institution}</StyledP>
            <FlexDiv>
            <StyledP>{certificateObj.date.start + " - " + certificateObj.date.finish}  </StyledP>
            </FlexDiv>
            </FlexDiv>
            </CertificatesDiv>
            :null
        }
    </>
    )
};

const CertificatesDiv = styled.div`

`

export default EducationComponent;