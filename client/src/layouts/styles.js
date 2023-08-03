import styled from 'styled-components';

// Navbar

const StyledNav = styled.nav`
    width: 100%;
    padding: 1.5rem 6rem;
    background-color: #0f324c;
    backdrop-filter: blur(25px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 3px solid #ffe737;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.4);
    position: relative;
`;

const StyledLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

const StyledLogoCont = styled.div`
    width: 200px;
    height: 20%;
    border-radius: 20px;
    background-color: #ffe737;
    cursor: pointer;
`;

const StyledPacs = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

const StyledDot = styled.li`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #ffe737;

    &:last-of-type {
        width: 35px;
        height: 35px;
    }
`;

const StyledClyde = styled.img`
    width: 30px;
`;

const StyledLogo = styled.img`
    width: 100%;
    transition: 0.3s all ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;


const StyledJoystickCont = styled.div`
    width: 120px;
    height: 120px;
    position: absolute;
    top: 15px;
    left: calc(50% - 60px);
    border: 2px solid #ffe737;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a4f73;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        transform: scale(1.03);
    }
`;

const StyledJoystick = styled.img`
    width: 80%;
    
`;

const StyledUl = styled.ul`
width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.125rem;
`;

const StyledLi = styled.li`
    font-family: 'VT323', monospace;
    font-size: 20px;
    padding: 12px 26px; 
    background-color: #001e30;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom: 2px solid #0a4f73;
    transition: 0.3s all ease;

    &:hover {
        transform: scale(1.1);
        transform: scaleX(1.1);
        color: #ffe737;
    }
`;

// Game Bar

const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    
`;

const StyledGameBar = styled.div`
    width: 20%;
    height: 80vh;
    border-radius: 20px;
    border-right: 1px solid #ffe737;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.4);
`;

const StyledTitleCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    border-top-right-radius: 20px;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
`;

const StyledTitleDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #ffe737;
`;

const StyledTitlePac = styled.img`
    width: 40px;
`;

const StyledTitle = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 26px;
    letter-spacing: -1px;
    color: white;
    font-weight: 500;
`;

const StyledGameList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding-top: 20px;
    gap: 0;
    background-color: #0f324c;
`;

const StyledGameTitle = styled.h2`
    width: 150px;
    font-family: 'VT323', monospace;
    font-size: 18px;
    font-weight: 300;
    color: white;
`;

const StyledGameCont = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 5px 24px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background-color: #2470a9;
    }
`;

const StyledSeparator = styled.div`
    width: 90%;
    height: 1px;
    margin: auto;
    background-color: #001e2e;
`;

const StyledImgCont = styled.div`
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    background-color: #001e2e;
`;

const StyledGameImg = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

// Game screen

const StyledGameScreen = styled.div`
    width: 70%;
    height: 80vh;
    background-color: #0f324c;
    border-radius: 20px;
    border-right: 1px solid #ffe737;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInnerScreen = styled.div`
    width: 97%;
    height: 95%;
    border-radius: 20px;
    background-color: #255f8b;
    
    display: flex;
    justify-content: center;
`;



export {StyledNav, StyledLogoDiv, StyledLogoCont, StyledPacs, StyledDot, StyledClyde, StyledLogo, StyledJoystickCont, StyledJoystick, StyledUl, StyledLi, StyledContainer, StyledGameBar, StyledTitleCont, StyledTitle, StyledTitlePac, StyledTitleDot, StyledGameList, StyledGameCont, StyledSeparator, StyledImgCont, StyledGameImg, StyledGameTitle, StyledGameScreen, StyledInnerScreen};