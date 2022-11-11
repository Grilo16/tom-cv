import styled from "styled-components";
    
const color1 = "#f4b184"
const color2 = "#203864"


const txtOrange = "#ddb8a2"    
const txtBlue = "#233348"    

const DecorationComponent1 = () => {
    return (
        <GridDiv>
<StyledDivBlue/>
<StyledDivOrange/> 
        </GridDiv>

    )
};


const StyledDivBlue = styled.div`
position: relative;
transform: rotate(75deg);
background-color: #203864;

`
const StyledDivOrange = styled.div`
position: relative;
transform: rotate(-75deg);
background-color: #f4b184;
left: 20mm;
`

const GridDiv = styled.div`
position: absolute;
display: grid;
grid-template-columns: 1fr 1fr;
overflow: hidden;
width: 20mm;
height: 200mm;
left: 20mm;
scale: 5;

`


export default DecorationComponent1;