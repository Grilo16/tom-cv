import styled from "styled-components";
import { StyledH2, StyledH3, StyledH4, StyledP } from "./NameComponent";

const ProfileComponent = () => {
    return (
        <ProfileDiv>

        <StyledH3>Profile</StyledH3>
        <StyledP>
        I am a passionate software developer with over 5000 commits on GitHub in less than 6 months. I love computers and thrive on challenges. In my previous roles, I have demonstrated my ability to develop innovative solutions to complex problems. I am excited to bring my skills to a new team and help contribute to the success of the company.
        </StyledP>
        </ProfileDiv>


    )
};

const ProfileDiv = styled.div`

`

export default ProfileComponent;