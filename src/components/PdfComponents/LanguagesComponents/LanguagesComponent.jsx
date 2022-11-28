import styled from "styled-components";
import { StyledH3, StyledH4, StyledP } from "../NameComponent";

const LanguagesComponent = ({languageObj}) => {
    // {language: "Spanish", proficiency: "Limited"},

    if(languageObj)
    return (
        <languageDiv>  
            <StyledH4>{languageObj.language}</StyledH4>
            <StyledP>{languageObj.proficiency}</StyledP>

        </languageDiv>

    )
};

const languageDiv = styled.div`

`

export default LanguagesComponent