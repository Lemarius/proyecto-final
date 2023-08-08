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
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.125rem;
`;

const StyledLiImg = styled.img`
    width: 20px;
    object-fit: contain;
`;

const StyledLiH2 = styled.h2`
    font-family: 'VT323', monospace;
    font-size: 20px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
`;

const StyledLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 26px; 
    background-color: #001e30;
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
        ${StyledLiH2} {
            color: #ffe737;
        }
    }

    &.active {
        background-color: #02456d;
        transform: scale(1.1);
        transform: scaleX(1.1);
        transition: 0.3s all ease;
        ${StyledLiH2} {
            color: #ffe737;
        }

        &:hover {
            transform: scale(1.1) scaleX(1.1);
        }
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
    border-bottom: 5px solid #0c787d;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.4);
    background-color: #0f324c;
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
    padding: 20px 0;
    gap: 0;
    background-color: #0f324c;
    border-bottom: 7px solid #001e2e;
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

    &.active {
        background-color: #2470a9
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
    border-top: 5px solid #0c787d;
    border-right: 3px groove #ffe737;
    box-shadow: 10px 15px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInnerScreen = styled.div`
    width: 97%;
    height: 95%;
    border-radius: 20px;
    background-color: #255f8b;
    border-left: 2px groove #ffe737;
    box-shadow: inset 10px 10px 5px 0px rgba(0,0,0,0.6);
    border-bottom: 3px solid #0c787d;
    display: flex;
    justify-content: center;
`;

// Logged tab

const LoggedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 5px solid #ffe737;
`;

const LoggedTitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001e2e;
    gap: 20px;
`;

const LoggedDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #ffe737;
`;

const LoggedH1 = styled.h1`
    font-family: 'VT323', monospace;
    font-size: 30px;
    font-weight: 500;
    padding: 10px 0;
    color: white;
    margin: 0;
`;

const LoggedInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 20px;
`;

const LoggedAdd = styled.img`
    width: 40px;
    transition: 0.3s all ease;
`;

const LoggedImg = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 3px solid white;
    background-color: #001e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;

    &:hover ${LoggedAdd} {
        transform: scale(1.1);
    }
`;

const LoggedName = styled.h2`
    font-family: 'VT323', monospace;
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin: 0;
    padding-top: 10px;
`;

const StyledLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 60px;
`;

const EditCont = styled.div`
    display: flex;
    padding: 5px 10px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    background-color: #001e2e;
    border: 1px solid white;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background-color: #015989;
    }

    &:last-child {
        position: relative;
        top: -10px;
    }

    &:hover:last-child {
        background-color: crimson;
    }
`;

const EditImg = styled.img`
    width: 20px;
    object-fit: contain;
    cursor: pointer;
`;

const EditButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: white;
    background: none;
    border: 0;
    cursor: pointer;
`;

const StatsDiv = styled.div`
    width: 80%;
    background-color: #001e2e;
    padding: 10px;
    margin-top: 10px;
`;

const StatsWalletCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #255f8b;
    margin-bottom: 10px;
    padding: 5px 10px;

    &:last-child {
        margin: 0;
    }
`;

const WalletImgCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StatsWalletImg = styled.img`
    width: 20px;
    object-fit: contain;
`;

const StatsWallet = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: white;
    margin: 0;
`;

const StatsNumber = styled.h2`
    font-family: 'VT323', monospace;
    font-size: 18px;
    font-weight: 200;
    color: white;
    margin: 0;
`;

// Logged out tab 

const LogoutContainer = styled.div`
    width: 80% ;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2470a9;
    padding: 15px 20px;
    border-radius: 20px;
    border: 2px solid #ffe737;
    gap: 10px;
`;


const LogoutH2 = styled.h2`
    width: 75%;
    font-family: 'VT323', monospace;
    font-size: 22px;
    font-weight: 200;
    color: white;
    margin: 0;
    text-align: center;
    padding-top: 20px;
`;

const LogoutH2Btn = styled.h2`
    width: 75%;
    font-family: 'VT323', monospace;
    font-size: 18px;
    font-weight: 200;
    color: white;
    margin: 0;
    text-align: center;
`;

const LogoutPac = styled.img`
    width: 150px;
    object-fit: contain;
`;

const LogoutBtnCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const LogoutBtn = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: white;
    padding: 10px 25px;
    background-color: #f08300;
    border-radius: 20px;
    border: 1px solid white;
    text-shadow: 1px 1px black;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background-color: #fbec7a;
        padding: 15px 25px;
    }
`;




export {StyledNav, StyledLogoDiv, StyledLogoCont, StyledPacs, StyledDot, StyledClyde, StyledLogo, StyledJoystickCont, StyledJoystick, StyledUl, StyledLi, StyledLiImg, StyledLiH2, StyledContainer, StyledGameBar, StyledTitleCont, StyledTitle, StyledTitlePac, StyledTitleDot, StyledGameList, StyledGameCont, StyledSeparator, StyledImgCont, StyledGameImg, StyledGameTitle, StyledGameScreen, StyledInnerScreen, LoggedContainer, LoggedTitleDiv, LoggedDot, LoggedH1, LoggedInfo, LoggedImg, LoggedAdd, LoggedName, StyledLine, EditCont, EditImg, EditButton, StatsDiv, StatsWallet, StatsWalletCont, StatsWalletImg, WalletImgCont, StatsNumber, LogoutContainer, LogoutH2, LogoutPac, LogoutBtnCont, LogoutBtn, LogoutH2Btn};