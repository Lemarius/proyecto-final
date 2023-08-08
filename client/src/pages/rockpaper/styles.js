import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    text-align: center;
    background-image: url(../../images/rockpaperbackground2.jpg);
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: inset 10px 10px 5px 0px rgba(0,0,0,0.6);
    
`;

const GameContainer = styled.div`
    width: 870px;
    height: 90%;
    border-radius: 20px;
    border: 1px solid white;
    background-color: orange;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0px 15px 0px 0px rgba(0,0,0,0.1);
`;

const PlayerContainer = styled.div`
    width: 217px;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: linear-gradient(50deg, rgba(38,74,96,1) 0%, rgba(66,133,152,1) 46%, rgba(59,104,126,1) 100%);
    border-right: 1px solid black;
    overflow: hidden;
    
`;

const PlayerImg = styled.img`
    width: 200px;
    position: relative;
    bottom: -240px;
    left: -35px;
`;

const PlayerImg2 = styled.img`
    width: 200px;
    position: relative;
    bottom: -245px;
    right: -45px;
`;

const ComputerContainer = styled.div`
    width: 217px;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: linear-gradient(123deg, rgba(150,85,47,1) 0%, rgba(222,146,48,1) 46%, rgba(110,57,49,1) 100%);
    border-left: 1px solid black;
    overflow: hidden;
`;

const BoardContainer = styled.div`
    width: 435px;
    height: 100%;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const GameLogo = styled.img`
    width: 220px;
    position: absolute;
    top: -60px;
    left: calc(50% - 110px);
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 7px 0px 0px rgba(0,0,0,0.1);
`;

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const StyledPlayerCont = styled.div`

`;

const VersusImg = styled.img`
    width: 50px;
`;

const StyledPlayerPick = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: white;
    padding: 5px 0;
    margin: 0;
    border-bottom: 1px solid black;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: orange;
    text-shadow: 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;

const StyledPlayer = styled.div`
    width: 120px;
    height: 120px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 7px 0px 0px rgba(0,0,0,0.1);
`;

const PlayerTitle = styled.h3`
    font-family: 'Rubik', sans-serif;
    width: 100%;
    margin: 0;
    font-size: 20px;
    color: white;
    font-weight: 700;
    background-color: #001e2e;
    padding: 30px 0;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 30px;
`;

const Button = styled.div`
    width: 50px;
    height: 50px;
    background-color: orange;
    border: 2px solid black;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    filter: brightness(1);
    transition: 0.3s all ease;

    &:hover {
        filter: brightness(1.2);
    }
`;

const PickImg = styled.img`
    width: 90px;
`;

const StyledWinner = styled.h1`
    font-family: 'VT323', monospace;
    font-size: 40px;
    font-weight: 500;
    color: white;
    padding: 10px;
    background-color: orange;
    border: 1px solid black;
    text-transform: uppercase;
    text-shadow: 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
    
    position: relative;
    top: 40px;
`;

const StyledScoreTxt = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: white;
`;

const StyledScoreNumber = styled.h2`
    font-family: 'VT323', monospace;
    font-size: 60px;
    font-weight: 400;
    color: white;
    margin: 0;
`;

export {Container, GameContainer, PlayerContainer, PlayerImg, PlayerImg2, ComputerContainer, BoardContainer, GameLogo, PlayerInfo, StyledPlayerCont, VersusImg, StyledPlayerPick, StyledPlayer, PlayerTitle, ButtonDiv, Button, PickImg,StyledWinner, StyledScoreTxt, StyledScoreNumber}