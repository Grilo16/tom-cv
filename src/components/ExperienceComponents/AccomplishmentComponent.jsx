import styled from "styled-components";

const AccomplishmentComponent = ({accomplishmentObj}) => {
    if (accomplishmentObj)
    return (
        <StyledLi>{accomplishmentObj}</StyledLi>
    )
};

const StyledLi = styled.li`

`


export default AccomplishmentComponent;