import styled from "styled-components";
import ContactComponent from "../components/ContactComponent";
import Interests from "../components/InterestsComponent";
import NameComponent, { StyledH1, StyledH2, StyledH3, StyledH4 } from "../components/NameComponent";
import ProfessionalExperienceComponent from "../components/ExperienceComponents/ExperienceContainer";
import ProfileComponent from "../components/ProfileComponent";
import SkillsContainer from "../components/SkillsComponents/SkillsContainer";
import LeftColumnComponent from "../components/RightLeftComponents/LeftColumnComponent";
import RightColumnComponent from "../components/RightLeftComponents/RightColumnComponent";
import EducationContainer from "../components/EducationComponents/EducationContainer";
import CoursesContainer from "../components/CoursesComponents/CoursesContainer";
import LanguagesContainer from "../components/LanguagesComponents/LanguagesContainer";
import DecorationComponent1 from "../components/DecorationComponents/DecorationComponent1";
import ProjectContainer from "../components/SampleProjectComponents/ProjectContainer";

const CvContainer = () => {


    return (
        <>
        <BackgroundDiv>
                <LeftColumnComponent>
                <ContactComponent/>
                <SkillsContainer/>
                <LanguagesContainer/>
                <Interests/>                
                </LeftColumnComponent>

        {/* <DecorationComponent1/> */}


                <RightColumnComponent>
               <NameComponent/>
               <ProfileComponent/>
               <ProfessionalExperienceComponent/>
               <EducationContainer/>
               <CoursesContainer/>
                </RightColumnComponent>



        <ProjectsDiv>
            <ProjectContainer/>
        </ProjectsDiv>
        </BackgroundDiv>
        </>

             
    )
};

const BackgroundDiv = styled.div`
display: grid;
height: 297mm;
background-color: white;
grid-template-columns: 100%;
margin-top: 10mm;

`

const ProjectsDiv = styled.div`
grid-column: span 2/2;
max-height: 55mm;
margin-left: 85mm;

`



export default CvContainer;