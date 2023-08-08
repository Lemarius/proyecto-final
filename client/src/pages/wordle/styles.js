import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    background-image: url('../../../images/wordlebackground.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: inset 10px 10px 5px 0px rgba(0,0,0,0.6);
`;

const StyledGameContainer = styled.div`
    width: 55%;
    height: 97%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    position: relative;
`;

const StyledLogoCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -40px;
`;

const StyledLogoImg = styled.img`
    width: 100px;
`;

const StyledLogoTitle = styled.h1`
    margin: 0;
`;

const StyledWordCont = styled.div`
    width: 200px;
    height: 50px;
    margin-top: 50px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledWord = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

const GameGrid = styled.div`
    position: relative;
    top: -20px;
`;


export {StyledContainer, StyledGameContainer, StyledLogoCont, StyledLogoImg, StyledLogoTitle, StyledWordCont, StyledWord, GameGrid}