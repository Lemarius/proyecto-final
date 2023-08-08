import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
	EditButton,
	EditCont,
	EditImg,
	LoggedAdd,
	LoggedContainer,
	LoggedDot,
	LoggedH1,
	LoggedImg,
	LoggedInfo,
	LoggedName,
	LoggedTitleDiv,
	LogoutBtn,
	LogoutBtnCont,
	LogoutContainer,
	LogoutH2,
	LogoutH2Btn,
	LogoutPac,
	StatsDiv,
	StatsNumber,
	StatsWallet,
	StatsWalletCont,
	StatsWalletImg,
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
	StyledLiH2,
	StyledLiImg,
	StyledLine,
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
	StyledUl,
	WalletImgCont
} from './styles';

const Layout = ({
	handleActiveNav,
	activeNav,
	setActiveNav,
	handleActiveGame,
	activeGame,
	setActiveGame
}) => {
	const auth = useAuth();
	const { displayName, uid } = auth.user;
	console.log(displayName);

	const handleLogout = () => {
		auth.logout();
		window.location.reload();
	};

	console.log(activeNav);

	return (
		<>
			<StyledNav>
				<StyledLogoDiv>
					<Link to='/'>
						<StyledLogoCont
							onClick={() => {
								handleActiveNav(setActiveNav, 0);
								handleActiveGame(setActiveGame, 0);
							}}
						>
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
				<Link to='/'>
					<StyledJoystickCont
						onClick={() => {
							handleActiveNav(setActiveNav, 0);
							handleActiveGame(setActiveGame, 0);
						}}
					>
						<StyledJoystick src='/images/yellowarcade.png' />
					</StyledJoystickCont>
				</Link>
				<StyledUl>
					<Link to='/'>
						<StyledLi
							onClick={() => {
								handleActiveNav(setActiveNav, 0);
								handleActiveGame(setActiveGame, 0);
							}}
							className={activeNav === 0 ? 'active' : ''}
						>
							<StyledLiImg src='/images/home-icon.png' />
							<StyledLiH2>Home</StyledLiH2>
						</StyledLi>
					</Link>
					<StyledLi
						onClick={() => {
							handleActiveNav(setActiveNav, 1);
							handleActiveGame(setActiveGame, 0);
						}}
						className={activeNav === 1 ? 'active' : ''}
					>
						<StyledLiImg src='/images/game-icon.png' />
						<StyledLiH2>Games</StyledLiH2>
					</StyledLi>
					<Link to='/blog'>
						<StyledLi
							onClick={() => {
								handleActiveNav(setActiveNav, 2);
								handleActiveGame(setActiveGame, 0);
							}}
							className={activeNav === 2 ? 'active' : ''}
						>
							<StyledLiImg src='/images/blog.png' />
							<StyledLiH2>Blog</StyledLiH2>
						</StyledLi>
					</Link>
					<StyledLi
						onClick={() => {
							handleActiveNav(setActiveNav, 3);
							handleActiveGame(setActiveGame, 0);
						}}
						className={activeNav === 3 ? 'active' : ''}
					>
						<StyledLiImg src='/images/about-icon.png' />
						<StyledLiH2>Contact</StyledLiH2>
					</StyledLi>
					{!displayName && !uid && (
						<Link to='/login'>
							<StyledLi
								onClick={() => {
									handleActiveNav(setActiveNav, 4);
									handleActiveGame(setActiveGame, 0);
								}}
								className={activeNav === 4 ? 'active' : ''}
							>
								<StyledLiImg src='/images/login-icon.png' />
								<StyledLiH2>Login</StyledLiH2>
							</StyledLi>
						</Link>
					)}
					{(displayName || uid) && (
						<Link to='/profile'>
							<StyledLi onClick={() => handleLogout()}>
								<StyledLiImg src='/images/logout-icon.png' />
								<StyledLiH2>Logout</StyledLiH2>
							</StyledLi>
						</Link>
					)}
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
							<StyledGameCont
								onClick={() => handleActiveGame(setActiveGame, 1)}
								className={activeGame === 1 ? 'active' : ''}
							>
								<StyledImgCont>
									<StyledGameImg src='/images/spaceinvaders.png' />
								</StyledImgCont>

								<StyledGameTitle>Space Invaders</StyledGameTitle>
							</StyledGameCont>
						</Link>
						<StyledSeparator />
						<Link to='/play/rock-paper-scissors'>
							<StyledGameCont
								onClick={() => handleActiveGame(setActiveGame, 2)}
								className={activeGame === 2 ? 'active' : ''}
							>
								<StyledImgCont>
									<StyledGameImg src='/images/scissors.png' />
								</StyledImgCont>
								<StyledGameTitle>Rock, Paper, Scissors</StyledGameTitle>
							</StyledGameCont>
						</Link>
						<StyledSeparator />
						<Link to='/play/wordle'>
							<StyledGameCont
								onClick={() => handleActiveGame(setActiveGame, 3)}
								className={activeGame === 3 ? 'active' : ''}
							>
								<StyledImgCont>
									<StyledGameImg src='/images/wordlelogo.png' />
								</StyledImgCont>
								<StyledGameTitle>Wordle</StyledGameTitle>
							</StyledGameCont>
						</Link>
					</StyledGameList>
					{(displayName || uid) && (
						<LoggedContainer>
							<LoggedTitleDiv>
								<LoggedDot></LoggedDot>
								<LoggedH1>Profile</LoggedH1>
								<LoggedDot></LoggedDot>
							</LoggedTitleDiv>
							<LoggedInfo>
								<StyledLine></StyledLine>
								<LoggedImg>
									<LoggedAdd src='/images/add.png' />
								</LoggedImg>
								<LoggedName>User {displayName}</LoggedName>
							</LoggedInfo>
							<EditCont>
								<EditImg src='/images/editar.png' />
								<EditButton>Edit profile</EditButton>
							</EditCont>
							<StatsDiv>
								<StatsWalletCont>
									<WalletImgCont>
										<StatsWalletImg src='/images/moneda.png' />
										<StatsWallet>Coins: </StatsWallet>
									</WalletImgCont>
									<StatsNumber>100</StatsNumber>
								</StatsWalletCont>
								<StatsWalletCont>
									<WalletImgCont>
										<StatsWalletImg src='/images/score.png' />
										<StatsWallet>Score: </StatsWallet>
									</WalletImgCont>
									<StatsNumber>2175</StatsNumber>
								</StatsWalletCont>
								<StatsWalletCont>
									<WalletImgCont>
										<StatsWalletImg src='/images/highscore.png' />
										<StatsWallet>High Score: </StatsWallet>
									</WalletImgCont>
									<StatsNumber>9720</StatsNumber>
								</StatsWalletCont>
							</StatsDiv>
							<EditCont onClick={() => handleLogout()}>
								<EditImg src='/images/logout-icon.png' />
								<EditButton>Logout</EditButton>
							</EditCont>
						</LoggedContainer>
					)}
					{!displayName && !uid && (
						<LoggedContainer>
							<LoggedTitleDiv>
								<LoggedDot></LoggedDot>
								<LoggedH1>Profile</LoggedH1>
								<LoggedDot></LoggedDot>
							</LoggedTitleDiv>
							<LogoutH2>
								You're not registered/logged in! Do it now to be able to see
								your profile here!
							</LogoutH2>
							<LogoutContainer>
								<LogoutBtnCont>
									<Link to='/login'>
										<LogoutBtn
											onClick={() => {
												handleActiveNav(setActiveNav, 4);
												handleActiveGame(setActiveGame, 0);
											}}
										>
											Sign up!
										</LogoutBtn>
									</Link>
									<LogoutH2Btn>or</LogoutH2Btn>
									<Link to='/login'>
										<LogoutBtn
											onClick={() => {
												handleActiveNav(setActiveNav, 4);
												handleActiveGame(setActiveGame, 0);
											}}
										>
											Log in!
										</LogoutBtn>
									</Link>
								</LogoutBtnCont>
								<LogoutPac src='/images/pacmanregister3.png' />
							</LogoutContainer>
						</LoggedContainer>
					)}
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
