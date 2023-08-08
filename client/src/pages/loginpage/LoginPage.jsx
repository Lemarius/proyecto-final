import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
	FormContainer,
	InputContainer,
	LoginContainer,
	RegisterContainer,
	SocialContainer,
	SocialImg,
	SocialMedia,
	SocialTxt,
	StyledAlready,
	StyledAlreadyH4,
	StyledAlreadySpan,
	StyledButton,
	StyledButtonCont,
	StyledContainer,
	StyledGoogle,
	StyledGoogleImg,
	StyledH1,
	StyledImgCont,
	StyledInput,
	StyledInputCont,
	StyledInputImg,
	StyledLoginBtn,
	StyledLogoutBtn,
	StyledLogoutDiv,
	StyledP,
	StyledTitleCont,
	TextContainer,
	TextH1,
	TextH1Cont,
	TextH3,
	TextP,
	TextPCont
} from './styles';

const LoginPage = () => {
	const auth = useAuth();
	const { displayName, uid } = auth.user;
	console.log(displayName);

	const [tab, setTab] = useState(false);

	const [emailRegister, setEmailRegister] = useState('');
	const [passwordRegister, setPasswordRegister] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleTab = () => {
		setTab(!tab);
	};

	const handleRegister = e => {
		e.preventDefault();
		auth.register(emailRegister, passwordRegister);
	};

	const handleLogin = e => {
		e.preventDefault();
		auth.login(email, password);
	};

	const handleGoogle = e => {
		e.preventDefault();
		auth.loginWithGoogle();
	};

	const handleLogout = () => {
		auth.logout();
		window.location.reload();
	};

	return (
		<StyledContainer>
			<FormContainer>
				{tab && (
					<>
						<StyledTitleCont>
							<StyledH1>Sign up!</StyledH1>
							<StyledP>Suscribe to our web and get rewards!</StyledP>
						</StyledTitleCont>
						<RegisterContainer>
							<InputContainer>
								<StyledInputCont>
									<StyledImgCont>
										<StyledInputImg src='/images/email3.png' />
									</StyledImgCont>
									<StyledInput
										placeholder='Email'
										onChange={e => setEmailRegister(e.target.value)}
										type='email'
										name='email'
									/>
								</StyledInputCont>
							</InputContainer>
							<InputContainer>
								<StyledInputCont>
									<StyledImgCont>
										<StyledInputImg src='/images/candado2.png' />
									</StyledImgCont>
									<StyledInput
										placeholder='Password'
										onChange={e => setPasswordRegister(e.target.value)}
										type='password'
										name='password'
									/>
								</StyledInputCont>
							</InputContainer>
							<StyledButtonCont>
								<StyledButton onClick={e => handleRegister(e)}>
									Register
								</StyledButton>
							</StyledButtonCont>
							<StyledAlready>
								<StyledAlreadyH4>
									You already have an account?{' '}
									<StyledAlreadySpan onClick={handleTab}>
										Login now!
									</StyledAlreadySpan>
								</StyledAlreadyH4>
							</StyledAlready>
						</RegisterContainer>
					</>
				)}
				{!tab && (
					<>
						<StyledTitleCont>
							{!displayName && (
								<>
									<StyledH1>Log in your account!</StyledH1>
									<StyledP>If you're not registered, do it now!</StyledP>
								</>
							)}
							{displayName && (
								<>
									<StyledH1>You're already logged in!</StyledH1>
									<StyledP>Good job!</StyledP>
								</>
							)}
						</StyledTitleCont>
						<LoginContainer>
							{!displayName && !uid && (
								<>
									<InputContainer>
										<StyledInputCont>
											<StyledImgCont>
												<StyledInputImg src='/images/email3.png' />
											</StyledImgCont>
											<StyledInput
												placeholder='Email'
												onChange={e => setEmail(e.target.value)}
												type='email'
												name='email'
											/>
										</StyledInputCont>
									</InputContainer>
									<InputContainer>
										<StyledInputCont>
											<StyledImgCont>
												<StyledInputImg src='/images/candado2.png' />
											</StyledImgCont>
											<StyledInput
												placeholder='Password'
												onChange={e => setPassword(e.target.value)}
												type='password'
												name='password'
											/>
										</StyledInputCont>
									</InputContainer>
									<StyledLoginBtn>
										<StyledButtonCont>
											<StyledButton onClick={e => handleLogin(e)}>
												Login
											</StyledButton>
										</StyledButtonCont>

										<StyledGoogle>
											<StyledGoogleImg
												src='/images/googleauth.png'
												onClick={e => handleGoogle(e)}
											/>
										</StyledGoogle>
									</StyledLoginBtn>
									<StyledAlready>
										<StyledAlreadyH4>
											Don't have a account!{' '}
											<StyledAlreadySpan onClick={handleTab}>
												Sign up now!
											</StyledAlreadySpan>
										</StyledAlreadyH4>
									</StyledAlready>
								</>
							)}
							{displayName && (
								<>
									<StyledLogoutDiv>
										<StyledP>You logged in correctly!</StyledP>
										<StyledAlreadyH4>
											If you wanna logout click this button below!
										</StyledAlreadyH4>
										<StyledLogoutBtn onClick={() => handleLogout()}>
											Logout
										</StyledLogoutBtn>
									</StyledLogoutDiv>
								</>
							)}
							{uid && !displayName && (
								<>
									<StyledLogoutDiv>
										<StyledP>You logged in correctly!</StyledP>
										<StyledAlreadyH4>
											If you wanna logout click this button below!
										</StyledAlreadyH4>
										<StyledLogoutBtn onClick={() => handleLogout()}>
											Logout
										</StyledLogoutBtn>
									</StyledLogoutDiv>
								</>
							)}
						</LoginContainer>
					</>
				)}
			</FormContainer>
			<TextContainer>
				<TextH1Cont>
					<TextH1>ARE YOU READY TO PLAY GAME?</TextH1>
				</TextH1Cont>
				<TextPCont>
					<TextP>
						Sign up now in our web so you can enjoy the maximum experience,
						check your stadistics, earn coins and spend them in our game shop!
					</TextP>
					<TextH3>www.getgamed.com/play</TextH3>
				</TextPCont>
				<SocialContainer>
					<SocialMedia>
						<SocialImg src='/images/instagram.png' />
						<SocialTxt>@get.gamed</SocialTxt>
					</SocialMedia>
					<SocialMedia>
						<SocialImg src='/images/facebook.png' />
						<SocialTxt>Get Game'd</SocialTxt>
					</SocialMedia>
				</SocialContainer>
			</TextContainer>
		</StyledContainer>
	);
};

export default LoginPage;
