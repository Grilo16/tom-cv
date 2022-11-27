import styled from "styled-components";

const CenterLogo = ({size}) => {
    return ( 
        <LogoContainerDiv>
          <div>
            <FirstNameH1 fontSize={size/3.3}>Tom</FirstNameH1>
            <JobTitleP fontSize={size/15}>Software developer</JobTitleP>
          </div>
          <SurnameH1 fontSize={size/3.3}> Britton </SurnameH1>
        </LogoContainerDiv>
    )
};


const LogoContainerDiv = styled.div`
display: flex;
gap: 5%;
justify-content: space-evenly;
margin-right:65%;
align-items: center;

`

const JobTitleP = styled.p`
  font-size: ${(props) => props.fontSize ? props.fontSize + "vw" : "100%"};
  font-weight: 600;
  color: #515369;
  margin: 0;
  margin-top: -12%;
  `;

  const FirstNameH1 = styled.h1`
  position: relative;
  font-size: ${(props) => props.fontSize ? props.fontSize + "vw" : "100%"};
  font-weight: 600;
  color: #515369;
  margin: 0;
  
  `;
  
  const SurnameH1 = styled.h1`
  font-size: ${(props) => props.fontSize ? props.fontSize + "vw" : "100%"};
  font-weight: 600;
  color: #c1c4d2;
  margin: 0;
  `;

export default CenterLogo;