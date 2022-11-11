import styled from "styled-components";
import { StyledH3 } from "../NameComponent";
import CoursesComponent, { CourseComponentDiv } from "./CoursesComponent";

const CoursesContainer = () => {

const courses = [
    {courseName: "CS50x",  institution: "Harvard-Edx", dates: {start: "Jun. 2022", finish: "Jul. 2022"}},
    {courseName: "CS50x",  institution: "Harvard-Edx", dates: {start: "Jul. 2022", finish: "Aug. 2022"}},
    {courseName: "Professional Software Development",  institution: "CodeClan", dates: {start: "Aug. 2022", finish: "Nov. 2022"}},
]


const courseComponents = courses.map((courseObj)=>{
    return (
        <CoursesComponent courseObj={courseObj}/>
    )
})


    return (

        <CoursesContainerDiv>
            <StyledH3>Courses</StyledH3>
                {courseComponents}
        </CoursesContainerDiv>
    )
};

const CoursesContainerDiv = styled.div`

`


export default CoursesContainer;