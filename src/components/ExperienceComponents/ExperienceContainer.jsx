import styled from "styled-components";
import { StyledH3 } from "../NameComponent";
import AccomplishmentComponent from "./AccomplishmentComponent";
import ExperienceComponent from "./ExperienceComponent";

const ExperienceContainer = () => {
  const experiences = [
    {
      title: "Professional Software Development",
      business: "CodeClan",
      dates:  "Aug. 2022 - Nov. 2022",
      accomplishments:
       [ "Professional software development bootcamp, 800 hours of in person coding experience, covers python, html, css, java, javascript, mongodb, postgres and more",]
    },
    {
      title: "Research Assistant",
      business: "AlbaScience, Edinburgh",
      dates: "Nov. 2021 - Aug. 2022",
      accomplishments: [
        "Optimized and streamlined  many work processes, by automating a number tasks on excel that were previously done manually, thus allowing the team’s time to be used more productively.",
      ],
    },
    {
      title: "Manufacturing Technician",
      business: "Siemens Healthineers, Oxford",
      dates: "Jun. 2017 – Nov. 2020",
      accomplishments: [
        "Involved in the manufacturing of magnetic resonance imaging devices.",
        "Plan the order of daily tasks to maximize efficiency.",
        "A number of work awards for excellence, attention to detail and innovation, such as the automation of the measurement device software by using macro functions to navigate to the most commonly taken measurements making human errors less likely as well as improving  the user friendliness of the task.",
      ],
    },
    {
      title: "Bartender & Barista",
      business: "Gee’s Restaurant",
      dates: "May. 2014 – June. 2017",
      accomplishments: [
        "Work calmly and efficiently under pressure.",
        "By swiftly utilizing my downtime to focus on supporting the busy members of team either through a refreshment, or by quickly lending an ear, I’ve ensured that for the majority of times not only the guest but also the team had an enjoyable day.",
      ],
    },
  ];

  const experienceComponents = experiences.map((experienceObj, index) => {
    return <ExperienceComponent experienceObj={experienceObj} key={index} />;
  });

  return (
    <ExperienceDiv>
      <StyledH3>Professional Experience</StyledH3>

      {experienceComponents}
    </ExperienceDiv>
  );
};

const ExperienceDiv = styled.div``;

export default ExperienceContainer;
