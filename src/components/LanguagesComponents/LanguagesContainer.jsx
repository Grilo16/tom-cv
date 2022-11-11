import styled from "styled-components";
import { StyledH2, StyledH3 } from "../NameComponent";
import LanguagesComponent from "./LanguagesComponent";

const LanguagesContainer = () => {

const languages = [
    {language: "Portuguese", proficiency: "Native"},
    {language: "Spanish", proficiency: "Limited"},
    {language: "English", proficiency: "Native"},
]


const languagesComponents = languages.map((languageObj)=>{
    return <LanguagesComponent languageObj={languageObj} />
})

    return (
    
        <LanguagesDiv>
        <StyledH3>Languages</StyledH3>
        <GridContainerDiv> 

        {languagesComponents}
        </GridContainerDiv>
        </LanguagesDiv>

    )
};


const GridContainerDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

`

const LanguagesDiv = styled.div`
padding-left: 6.9mm;
`

export default LanguagesContainer