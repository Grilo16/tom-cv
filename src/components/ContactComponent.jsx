import styled from "styled-components";
import { StyledH2, StyledH3, StyledH4, StyledP } from "./NameComponent";

const ContactComponent = () => {
    return (
        <ContactComponentDiv>

        <StyledH3>Contact</StyledH3>

                <StyledH4>Email</StyledH4>
                <StyledP marginBottom={"0.5mm"}>tom.jf.britton@gmail.com</StyledP>
                
                <StyledH4>Location</StyledH4>
                <StyledP marginBottom={"0.5mm"}>Edinburgh</StyledP>

                <StyledH4>Phone</StyledH4>
                <StyledP marginBottom={"0.5mm"}>07402921531</StyledP>

                <StyledH4>LinkedIn</StyledH4>
                <StyledP marginBottom={"0.5mm"} ><a style={{textDecoration: "none"}}href="https://www.linkedin.com/in/tom-jf-britton/">in/tom-jf-britton/</a></StyledP>
              
                <StyledH4>Github</StyledH4>
                <StyledP marginBottom={"0.5mm"} ><a style={{textDecoration: "none"}}href="https://github.com/Grilo16/">github.com/Grilo16/</a></StyledP>
        </ContactComponentDiv>

    )

};

const ContactComponentDiv = styled.div`
margin-top: 10%;
padding-left: 6.9mm;

`

export default ContactComponent;