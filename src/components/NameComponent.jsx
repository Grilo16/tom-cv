import styled from "styled-components";

const NameComponent = () => {

    return (

        <NameDiv>
        <StyledH1>
            Thomas Jose Ferreira Britton
        </StyledH1>
        <StyledH2>
            Software Developer
        </StyledH2>
        </NameDiv>
        
    )
};


const NameDiv = styled.div`
margin-top: 28mm;

`

export const StyledH1 = styled.h1`
margin-top:${(props)=>props.marginTop ? props.marginTop : "3.45mm"};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : "3.45mm"};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : null};
margin-right:${(props)=>props.marginRight ? props.marginRight : "4mm"};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "0vw"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : "0vw"};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : "19pt"};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : null};
height:${(props)=>props.height ? props.height : null};
width:${(props)=>props.width ? props.width : null};
border-radius:${(props)=>props.borderRadius ? props.borderRadius : null};
`
export const StyledH2 = styled.h2`
margin-top:${(props)=>props.marginTop ? props.marginTop : "3.45mm"};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : "3.45mm"};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : null};
margin-right:${(props)=>props.marginRight ? props.marginRight : "4mm"};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "0vw"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : "0vw"};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : "17pt"};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : null};
height:${(props)=>props.height ? props.height : null};
width:${(props)=>props.width ? props.width : null};
border-radius:${(props)=>props.borderRadius ? props.borderRadius : null};
`
export const StyledH3 = styled.h3`
margin-top:${(props)=>props.marginTop ? props.marginTop : "1.45mm"};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : "1.45mm"};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : null};
margin-right:${(props)=>props.marginRight ? props.marginRight : "4mm"};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "0vw"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : "0vw"};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : "15pt"};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : null};
height:${(props)=>props.height ? props.height : null};
width:${(props)=>props.width ? props.width : null};
border-radius:${(props)=>props.borderRadius ? props.borderRadius : null};
`
export const StyledH4 = styled.h4`
margin-top:${(props)=>props.marginTop ? props.marginTop : "0.9mm"};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : "0.9mm"};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : null};
margin-right:${(props)=>props.marginRight ? props.marginRight : "4mm"};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "0vw"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : "0vw"};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : "12pt"};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : null};
height:${(props)=>props.height ? props.height : null};
width:${(props)=>props.width ? props.width : null};
border-radius:${(props)=>props.borderRadius ? props.borderRadius : null};
`
export const StyledP = styled.p`
margin-top:${(props)=>props.marginTop ? props.marginTop : "0.9mm"};
margin-bottom:${(props)=>props.marginBottom ? props.marginBottom : "0.9mm"};
margin-left:${(props)=>props.marginLeft ? props.marginLeft : null};
margin-right:${(props)=>props.marginRight ? props.marginRight : "4mm"};
padding-top:${(props)=>props.paddingTop ? props.paddingTop : "0vw"};
padding-bottom:${(props)=>props.paddingBottom ? props.paddingBottom : "0vw"};
padding-left:${(props)=>props.paddingLeft ? props.paddingLeft : null};
padding-right:${(props)=>props.paddingRight ? props.paddingRight : null};
font-size:${(props)=>props.fontSize ? props.fontSize : "10pt"};
background-color:${(props)=>props.backgroundColor ? props.backgroundColor : null};
height:${(props)=>props.height ? props.height : null};
width:${(props)=>props.width ? props.width : null};
border-radius:${(props)=>props.borderRadius ? props.borderRadius : null};
`

export default NameComponent;