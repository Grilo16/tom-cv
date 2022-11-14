import styled from "styled-components";
import { FlexDiv } from "../ExperienceComponents/ExperienceComponent";
import { StyledH3, StyledH4, StyledP } from "../NameComponent";

const CoursesComponent = ({courseObj}) => {
    
    if (courseObj)
    return (
    
    <CourseComponentDiv>
            <CourseComponentDiv>
            <StyledH4> {courseObj.courseName}</StyledH4>
            <FlexDiv>
            <StyledP> {courseObj.institution}</StyledP>
        <FlexDiv>
            <StyledP> {courseObj.dates.start + " - " + courseObj.dates.finish}</StyledP>
        </FlexDiv>
    </FlexDiv>
    <StyledP>{courseObj.description}</StyledP>
    
        </CourseComponentDiv>     
    
    </CourseComponentDiv>
    )
};

export const CourseComponentDiv = styled.div`

`


export default CoursesComponent;