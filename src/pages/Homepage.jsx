import styled from "styled-components";
import OrbsContainer from "../components/LayoutComponents/OrbsContainer";

const Homepage = () => {
    return (
        <CenteredFlexDiv>

        <OrbsContainer OrbSize={25}/>

        </CenteredFlexDiv>
    )
}; 


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