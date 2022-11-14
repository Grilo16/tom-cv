import styled from "styled-components";
import { StyledH3 } from "../NameComponent";
import CoursesComponent, { CourseComponentDiv } from "./CoursesComponent";

const CoursesContainer = () => {

const courses = [
    {courseName: "CS50x",  institution: "Harvard-Edx", dates: {start: "Jun. 2022", finish: "Jul. 2022"}, description: "Online computer science introduction course, covers C, python, html, algorithms, and more"},
    {courseName: "CS50p",  institution: "Harvard-Edx", dates: {start: "Jul. 2022", finish: "Aug. 2022"}, description: "Online python course, covers language features in detail such as list/dictionary comprehension, class design, and integration with web using flask and jinja"},
    {courseName: "Professional Software Development",  institution: "CodeClan", dates: {start: "Aug. 2022", finish: "Nov. 2022"}, description: "Professional software development bootcamp, 800 hours of in person coding experience, covers python, html, css, java, javascript, mongodb, postgres and more"},
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