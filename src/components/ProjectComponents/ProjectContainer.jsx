import styled from "styled-components";
import { StyledH1, StyledH2, StyledH3 } from "../NameComponent";
import ProjectComponent from "./ProjectComponent";

const ProjectContainer = () => {
  const projects = [
    {
      name: "Rogue Bookings",
      linkRepo: (
        <a href="https://github.com/Grilo16/RogueBookings">
          Grilo16/RogueBookings
        </a>
      ),
      stack: { backEnd: "java/spring", frontEnd: "javaScript/React" },
      liveLink: (
        <a href="https://grilo16.github.io/RogueBookingsClient/">
          Live link
        </a>
      ),
    },
    {
      name: "Ducky's Revenge",
      linkRepo: (
        <a href="https://github.com/Grilo16/duckys_revenge">
          Grilo16/duckys_revenge
        </a>
      ),
      stack: { backEnd: "mongoDb/localStorage", frontEnd: "javaScript/React" },
      liveLink: (
        <a href="https://grilo16.github.io/DuckysRevengeGitHost/">
          Live Link
        </a>
      ),
    },
    {
      name: "Ducky's Fight Club",
      linkRepo: (
        <a href="https://github.com/Grilo16/project_duck_gym_fight_club">
          Grilo16/project_duck_gym_fight_club
        </a>
      ),
      stack: { backEnd: "Postgres/Sql", frontEnd: "flask/python" },
    },
  ];

  const projectComponents = projects.map((projectObj, index) => {
    return <ProjectComponent projectObj={projectObj} key={index} />;
  });

  return (
    <SkillsDiv>
      <StyledH3>Sample projects</StyledH3>
      {projectComponents}
    </SkillsDiv>
  );
};

const SkillsDiv = styled.div`
  text-align: center;
  padding-left: 6.9mm;
  padding-right: 6.9mm;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.09);
  scale: 0.9;
  border-radius: 10mm;
  margin-top: 10mm;
  width: max-content;
`;
export default ProjectContainer;
