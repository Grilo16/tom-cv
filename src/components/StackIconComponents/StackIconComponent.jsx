import styled from "styled-components";

const StackIconComponent = ({icon}) => {

    return (
        <StyledImg src={icon} height={"100%"}/>
        )
};

const StyledImg = styled.img`
transition: 2s;
&:hover{
    scale: 1.4;
}
&:before{
    opacity: 0%
}
&:after{
    opacity: 100%
}
`


export default StackIconComponent