import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    border-radius: 20px;
    position: relative;
    background-image: url(../../images/spacebackgroundgame5.jpg);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
`;
 
const StyledLogo = styled.img`
    width: 500px;
    position: absolute;
    top: -40px;
    left: calc(50% - 250px);
`;

const StyledCanvas = styled.canvas`
    background-color: black;
    background-image: url(../../images/spacebackground.png);
    border: 1px solid white;
    border-radius: 10px;
`;

const GameOver = styled.div`
    width: 250px;
    border-radius: 20px;
    background-color: gray;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

const StyledH1 = styled.h1`
    font-family: 'VT323', monospace;
    font-size: 45px;
    font-weight: 500;
    color: white;
`;

const StyledButton = styled.button`
    font-family: 'VT323', monospace;
    font-size: 20px;
    background-color: white;
    color: black;
    cursor: pointer;
    margin-bottom: 5px;
`;

export {StyledContainer, StyledLogo, StyledCanvas, GameOver, StyledButton, StyledH1}