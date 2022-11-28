import styled from "styled-components";
import { StyledH1, StyledH2, StyledH3 } from "../NameComponent";
import EducationComponent from "./EducationComponent";

const EducationContainer = () => {


    const certificates = [
    {title : "Bachelor of science: Biomedical Sciences", institution : "Oxford Brookes University", date: {start: "Sep. 2014", finish: "May. 2017"}}, 
     
]

const educationComponents = certificates.map((certificateObj, index)=> {
    return (
        <EducationComponent certificateObj={certificateObj} key={index}/>
    )
})


    return (
        <EducationDiv>
        <StyledH3>Education/Certifications</StyledH3>
        {educationComponents}
        </EducationDiv>
    )
};

const EducationDiv = styled.div`
`
export default EducationContainer;