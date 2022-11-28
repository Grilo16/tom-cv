import styled from "styled-components";
import ContactComponent from "./ContactComponent";
import CoursesContainer from "./CoursesComponents/CoursesContainer";
import EducationContainer from "./EducationComponents/EducationContainer";
import ExperienceComponent from "./ExperienceComponents/ExperienceComponent";
import Interests from "./InterestsComponent";
import LanguagesContainer from "./LanguagesComponents/LanguagesContainer";
import NameComponent from "./NameComponent";
import ProfileComponent from "./ProfileComponent";
import ProjectContainer from "./ProjectComponents/ProjectContainer";
import LeftColumnComponent from "./RightLeftComponents/LeftColumnComponent";
import RightColumnComponent from "./RightLeftComponents/RightColumnComponent";
import SkillsContainer from "./SkillsComponents/SkillsContainer";

const CvPdfContainer = () => {
  return (
    <>
      <BackgroundDiv>
        <LeftColumnComponent>
          <ContactComponent />
          <SkillsContainer />
          <LanguagesContainer />
          <Interests />
        </LeftColumnComponent>

        {/* <DecorationComponent1/> */}

        <RightColumnComponent>
          <NameComponent />
          <ProfileComponent />
          <ExperienceComponent />
          <EducationContainer />
          <CoursesContainer />
        </RightColumnComponent>

        <ProjectsDiv>
          <ProjectContainer />
        </ProjectsDiv>
      </BackgroundDiv>
    </>
  );
};

const BackgroundDiv = styled.div`
  display: grid;
  height: 297mm;
  background-color: white;
  grid-template-columns: 100%;
  margin-top: 10mm;
`;

const ProjectsDiv = styled.div`
  grid-column: span 2/2;
  max-height: 55mm;
  margin-left: 85mm;
`;

export default CvPdfContainer;
