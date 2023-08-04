import { Link, Outlet } from 'react-router-dom';
import {
	StyledClyde,
	StyledContainer,
	StyledDot,
	StyledGameBar,
	StyledGameCont,
	StyledGameImg,
	StyledGameList,
	StyledGameScreen,
	StyledGameTitle,
	StyledImgCont,
	StyledInnerScreen,
	StyledJoystick,
	StyledJoystickCont,
	StyledLi,
	StyledLogo,
	StyledLogoCont,
	StyledLogoDiv,
	StyledNav,
	StyledPacs,
	StyledSeparator,
	StyledTitle,
	StyledTitleCont,
	StyledTitleDot,
	StyledTitlePac,
	StyledUl
} from './styles';

const Layout = () => {
	return (
		<>
			<StyledNav>
				<StyledLogoDiv>
					<Link to='/'>
						<StyledLogoCont>
							<StyledLogo src='/images/logogg2.png' />
						</StyledLogoCont>
					</Link>
					<StyledPacs>
						<StyledDot></StyledDot>
						<StyledDot></StyledDot>
						<StyledDot></StyledDot>
						<StyledDot></StyledDot>
						<StyledDot></StyledDot>
						<StyledClyde src='/images/inky.png' />
						<StyledClyde src='/images/clyde.png' />
					</StyledPacs>
				</StyledLogoDiv>
				<StyledJoystickCont>
					<StyledJoystick src='/images/yellowarcade.png' />
				</StyledJoystickCont>
				<StyledUl>
					<StyledLi>Home</StyledLi>
					<StyledLi>Games</StyledLi>
					<StyledLi>Contact</StyledLi>
					<StyledLi>About</StyledLi>
				</StyledUl>
			</StyledNav>
			<StyledContainer>
				<StyledGameBar>
					<StyledTitleCont>
						<StyledTitlePac src='/images/pacman.png' />
						<StyledTitleDot></StyledTitleDot>
						<StyledTitle>GAMES</StyledTitle>
					</StyledTitleCont>
					<StyledGameList>
						<Link to='/play/space-invaders'>
							<StyledGameCont>
								<StyledImgCont>
									<StyledGameImg src='/images/spaceinvaders.png' />
								</StyledImgCont>

								<StyledGameTitle>Space Invaders</StyledGameTitle>
							</StyledGameCont>
						</Link>
						<StyledSeparator />
						<Link to='/play/rock-paper-scissors'>
							<StyledGameCont>
								<StyledImgCont>
									<StyledGameImg src='/images/scissors.png' />
								</StyledImgCont>
								<StyledGameTitle>Rock, Paper, Scissors</StyledGameTitle>
							</StyledGameCont>
						</Link>
						<Link to='/play/wordle'>
							<StyledGameCont>
								<StyledImgCont>
									<StyledGameImg src='/images/wordlelogo.png' />
								</StyledImgCont>
								<StyledGameTitle>Wordle</StyledGameTitle>
							</StyledGameCont>
						</Link>
					</StyledGameList>
				</StyledGameBar>
				<StyledGameScreen>
					<StyledInnerScreen>
						<Outlet />
					</StyledInnerScreen>
				</StyledGameScreen>
			</StyledContainer>
		</>
	);
};

export default Layout;
