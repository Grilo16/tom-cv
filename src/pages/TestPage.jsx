import { Link } from "react-router-dom";
import styled from "styled-components";
import OrbComponent from "../components/LayoutComponents/OrbComponent";
import OrbsContainer from "../components/LayoutComponents/OrbsContainer";
import StackIconComponent from "../components/StackIconComponents/StackIconComponent";
import StackIconContainer from "../components/StackIconComponents/StackIconContainer";

const TestPage = () => {
 



    return (
      <TestPageContainer>
        <nav>
            <Link to={"/"}>back</Link>
        </nav>
        <h1>this is a test page</h1>
        <TestDiv>  
        {/* <OrbsContainer/> */}

          {/* <StackIconContainer height={10}/> */}
          <StackIconContainer height={5} width={20} duration={20}/>
          {/* <StackIconContainer height={5}/> */}
        


        </TestDiv>



      </TestPageContainer>  
    )
};

const TestPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TestDiv = styled.div`
background-color: grey;
height: 50vh;
width: 50vw;

`


export default TestPage;