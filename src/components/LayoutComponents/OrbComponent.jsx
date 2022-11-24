import styled from "styled-components";

const OrbComponent = () => {
  const height = 23;
  const width = height;

  return (
    <div style={{ overflow: "hidden" }}>
      <OrbDiv>

        <FirstNameH1 height={height}>Tom</FirstNameH1>
        <JobTitleP>Software developer</JobTitleP>

        <OrbElement
          gridRow={"6/16"}
          gridColumn={"8/16"}
          height={height}
          width={width}
          noHover={true}
          >
          <SurnameH1> Britton </SurnameH1>{" "}
        </OrbElement>

        <OrbElement
          gridRow={"6/16"}
          gridColumn={"17/20"}
          height={height / 2}
          width={width / 2}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"2/4"}
          gridColumn={"8/10"}
          height={height / 4}
          width={width / 4}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"15/16"}
          gridColumn={"7"}
          height={height / 8}
          width={width / 8}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"16"}
          gridColumn={"8"}
          height={height / 2}
          width={width / 2}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"14/16"}
          gridColumn={"17"}
          height={height / 4}
          width={width / 4}
        >
          {" "}
        </OrbElement>

        <OrbElement
          gridRow={"3"}
          gridColumn={"19"}
          height={height / 8}
          width={width / 8}
        >
          {" "}
        </OrbElement>

        <DiagonalBarElement
          gridRow={"16"}
          gridColumn={"1"}
          width={height / 8}
          height={40}
          marginLeft={"-19"}
          marginTop={"-5.5"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"16"}
          gridColumn={"1"}
          width={height / 8}
          height={45}
          marginLeft={"-16"}
          marginTop={"-6"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"1"}
          gridColumn={"15"}
          width={height / 8}
          height={45}
          marginTop={"-33"}
          marginBottom={"-5"}
          marginRight={"-10"}
          marginLeft={"5"}
        >
          {" "}
        </DiagonalBarElement>

        <DiagonalBarElement
          gridRow={"1"}
          gridColumn={"15"}
          width={height / 8}
          height={45}
          marginTop={"-33"}
          marginBottom={"-5"}
          marginRight={"-10"}
          marginLeft={"10"}
        >
          {" "}
        </DiagonalBarElement>
      </OrbDiv>
    </div>
  );
};

const JobTitleP = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
  color: #515369;
  height: max-content;
  grid-row: 13/14;
  grid-column: 1/8;
  margin: 0;
  margin-top: -1vw;
  margin-bottom: 1vw;
`;

const FirstNameH1 = styled.h1`
  font-size: 6.9vw;
  font-weight: 600;
  color: #515369;
  height: max-content;
  grid-row: 12/12;
  grid-column: 1/8;
  margin: 0;
  margin-right: 1vw;
`;

const SurnameH1 = styled.h1`
  font-size: 6.9vw;
  font-weight: 600;
  color: #c1c4d2;
  margin: 0;
`;

const OrbDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  justify-content: center;
`;

const OrbElement = styled.div`
  height: ${(props) => (props.height ? props.height + "vw" : "80vw")};
  width: ${(props) => (props.width ? props.width + "vw" : "40vw")};
  background-color: #515369;
  grid-row: ${(props) => (props.gridRow ? props.gridRow : null)};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : null)};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    ${
      (props) =>
        props.noHover
          ? null
          : "transition: 0.5s; border-radius: 10px; transform: rotate(180deg); scale: 2; margin: 1vw; position: relative;"
      // scale:  ${(props)=>props.noHover ? null : "1.1"};
      //   height: ${(props) => (props.height ? props.height + 15 + "vw" : "80vw")};
      //   width: ${(props) => (props.width ? props.width + 15 + "vw" : "40vw")};
      // padding-left: 10vw;
      // margin-right: 85vw;
      // margin-left: 50vw;
    }
  }
`;

const DiagonalBarElement = styled.div`
  height: ${(props) => (props.height ? props.height + "vw" : "80vw")};
  width: ${(props) => (props.width ? props.width + "vw" : "40vw")};
  background-color: #555f69;
  grid-row: ${(props) => (props.gridRow ? props.gridRow : null)};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : null)};
  border-radius: 25vw;
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "vw" : null};
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "vw" : null};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "vw" : null)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "vw" : null};
  transform: rotate(45deg);
`;

export default OrbComponent;
