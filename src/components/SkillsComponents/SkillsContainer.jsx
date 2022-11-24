import styled from "styled-components";
import SkillsComponent from "./SkillsComponent";
import { StyledH1, StyledH2, StyledH3 } from "../NameComponent";

const SkillsContainer = () => {


const Skills = [
    {skillName : "Java", skillScore : 8}, 
    {skillName : "JavaScript", skillScore : 9,},
    {skillName : "Python", skillScore : 9}, 
    {skillName : "Postgres", skillScore : 9}, 
    {skillName : "MongoDB", skillScore : 9}, 
    {skillName : "React", skillScore : 9}, 
    {skillName : "CSS", skillScore : 8}, 
    {skillName : "HTML", skillScore : 8}, 
    {skillName : "C", skillScore : 6}, 
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