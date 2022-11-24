import logo from './logo.svg';
import './App.css';
import CvContainer from './containers/CvContainer';
import DecorationComponent1 from './components/DecorationComponents/DecorationComponent1';
import styled from 'styled-components';
import {HashRouter as Router , Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';

function App() {
  
  return (
      
  <Router>
    <Routes >
      <Route path={"/"} element={<Homepage/>} />
      <Route path={"/pdf"} element={<CvContainer/>} />
    </Routes>
  </Router>    

         
       
  );
}

const PageHolderSection = styled.section`
height : 100vh;
width: 100vw;
`

const DecorationContainer = styled.div`
postition: absolute;
display: flex;
overflow: hiddem;
width: 210mm;
height: 297mm;
`



export default App;
