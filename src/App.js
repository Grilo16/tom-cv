import logo from './logo.svg';
import './App.css';
import DecorationComponent1 from './components/PdfComponents/DecorationComponents/DecorationComponent1';
import styled from 'styled-components';
import {HashRouter as Router , Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';
import CvPdfContainer from './components/PdfComponents/CvPdfContainer';

function App() {
  
  return (
      
  <Router>
    <Routes >
      <Route path={"/"} element={<Homepage/>} />
      <Route path={"/pdf"} element={<CvPdfContainer/>} />
      <Route path={"/test"} element={<TestPage/>} />
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
