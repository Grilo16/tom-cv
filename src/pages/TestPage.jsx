import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const TestPage = () => {
 
  function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
  


    return (
      <TestPageContainer>
        <nav>
            <Link to={"/"}>back</Link>
        </nav>
        <h1>this is a test page</h1>
        <TestDiv>  
        {/* <OrbsContainer/> */}

          {/* <StackIconContainer height={10}/> */}
          {/* <StackIconContainer height={5} width={20} duration={20}/> */}
          {/* <StackIconContainer height={5}/> */}

          <Canvas>
            <OrbitControls/>
          <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[0, 0, 0]} />
    <Box position={[2.4, 0, 0]} />
    <Box position={[2.4, 2.4, 2.4]} />

          </Canvas>
        


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