import styled from "styled-components";
import OrbComponent from "../components/LayoutComponents/OrbComponent";

const Homepage = () => {
    return (

        <CenteredFlexDiv>

        <OrbComponent/>

        </CenteredFlexDiv>

    )
}; 




const HomepageTitle = styled.h1`
font-size: 80pt;
margin: 0%;
`
const HomepageSubtitle = styled.h3`
margin: 0%;
margin-left: -28%;
`



const CenteredFlexDiv = styled.div`
position: relative;
background-color: #c1c4d2;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`

export default Homepage;