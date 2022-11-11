import styled from "styled-components";

const LeftColumnComponent = (
    {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fontSize,
    backgroundColor,
    height,
    width,
    children,
}
) => {
    return (
        <LeftSideDiv
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
        >

        {children}
        </LeftSideDiv>
    )
};

const LeftSideDiv = styled.div`
margin-top:${(props)=>props.marginTop ? props.marginTop : null};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : null};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : "null"};
margin-right:${(props)=>props.marginRight ? props.marginRight : null};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "55mm"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : null};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : null};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : "#ececec"};
height:${(props)=>props.height ? props.height : "100%"};
width:${(props)=>props.width ? props.width : null};
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
`
export default LeftColumnComponent;