import styled from "styled-components";
import { StyledH2, StyledH3, StyledH4, StyledP } from "./NameComponent";
import contactInfo from "./cvData/contactInfo";

const ContactComponent = () => {
  const displayContactInfo = contactInfo.map((item) => {
    const key = Object.keys(item);
    const value = item[key];
    return value.label ? (
        <>
      <StyledH4>{key}</StyledH4>
      <StyledP marginBottom={"0.5mm"}><a
          style={{ textDecoration: "none" }}
          href={value.link}
        >{value.label}</a></StyledP>
        </>
      
    ) : (
        <>
      <StyledH4>{key}</StyledH4>
      <StyledP marginBottom={"0.5mm"}>{value}</StyledP>
        </>
    );
  });

  return (
    <ContactComponentDiv>
      <StyledH3>Contact</StyledH3>

      {displayContactInfo}
     
    </ContactComponentDiv>
  );
};

const ContactComponentDiv = styled.div`
  margin-top: 10%;
  padding-left: 6.9mm;
`;

export default ContactComponent;
