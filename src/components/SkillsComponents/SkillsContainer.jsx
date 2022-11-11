import styled from "styled-components";
import SkillsComponent from "./SkillsComponent";
import { StyledH1, StyledH2, StyledH3 } from "../NameComponent";

const SkillsContainer = () => {


const Skills = [
    {skillName : "C", skillScore : 4}, 
    {skillName : "Python", skillScore : 8}, 
    {skillName : "JavaScript", skillScore : 8,},
    {skillName : "Java", skillScore : 7}, 
    {skillName : "HTML", skillScore : 6}, 
    {skillName : "Css", skillScore : 6}, 
    {skillName : "React", skillScore : 7}, 
    {skillName : "MongoDb", skillScore : 6}, 
    {skillName : "Postgres", skillScore : 8}, 
]

const skills = Skills.map((skillObj, index)=> {
    return (
        <SkillsComponent skillObj={skillObj} key={index}/>
    )
})


    return (
        <SkillsDiv>
        <StyledH3>Skills And Expertise</StyledH3>
        {skills}
        </SkillsDiv>
    )
};

const SkillsDiv = styled.div`
text-align: center;
padding-left: 6.9mm;
padding-right: 6.9mm;
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.09);
scale: 0.9; 
border-radius: 10mm;
`
export default SkillsContainer;