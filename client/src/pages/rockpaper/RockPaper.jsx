import { useState } from 'react';
import {
	BoardContainer,
	Button,
	ButtonDiv,
	ComputerContainer,
	Container,
	GameContainer,
	GameLogo,
	PickImg,
	PlayerContainer,
	PlayerImg,
	PlayerImg2,
	PlayerInfo,
	PlayerTitle,
	StyledPlayer,
	StyledPlayerCont,
	StyledPlayerPick,
	StyledScoreNumber,
	StyledScoreTxt,
	StyledWinner,
	VersusImg
} from './styles';

const RockPaper = () => {
	const [playerAction, setPlayerAction] = useState('');
	const [computerAction, setComputerAction] = useState('');

	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const [winner, setWinner] = useState(null);

	const actions = {
		rock: {
			name: 'rock',
			beats: 'scissors',
			image: 'images/rock.png'
		},
		paper: {
			name: 'paper',
			beats: 'rock',
			image: 'images/paper.png'
		},
		scissors: {
			name: 'scissors',
			beats: 'paper',
			image: 'images/scissors.png'
		}
	};

	const onActionSelected = selectedAction => {
		const newComputerAction = randomAction();
		setPlayerAction(selectedAction);
		setComputerAction(newComputerAction);

		const newWinner = calculateWinner(selectedAction, newComputerAction);
		setWinner(newWinner);

		if (newWinner === -1) {
			setPlayerScore(playerScore + 1);
		} else if (newWinner === 1) {
			setComputerScore(computerScore + 1);
		}
		console.log(calculateWinner(selectedAction, newComputerAction));
	};

	const randomAction = () => {
		const keys = Object.keys(actions);
		const index = Math.floor(Math.random() * keys.length);

		return keys[index];
	};

	const calculateWinner = (action1, action2) => {
		if (action1 === action2) {
			return 0;
		} else if (actions[action1].beats === action2) {
			return -1;
		} else if (actions[action2].beats === action1) {
			return 1;
		}

		return null;
	};

	const ShowWinner = ({ winner = 0 }) => {
		const text = {
			null: 'Make a pick!',
			'-1': 'You win!',
			0: "It's a tie!",
			1: 'You lose! :('
		};

		return <StyledWinner>{text[winner]}</StyledWinner>;
	};

	return (
		<>
			<Container>
				<GameContainer>
					<GameLogo src='/images/rockpaperlogo3.png' />
					<PlayerContainer>
						<PlayerTitle>Player</PlayerTitle>
						<StyledScoreTxt>Score:</StyledScoreTxt>
						<StyledScoreNumber>{playerScore}</StyledScoreNumber>
						<PlayerImg src='../../images/person1.png' />
					</PlayerContainer>
					<BoardContainer>
						<PlayerInfo>
							<Players name='You' score={playerScore} action={playerAction} />
							<VersusImg src='/images/versus.png' />
							<Players
								name='Computer'
								score={computerScore}
								action={computerAction}
							/>
						</PlayerInfo>

						<ButtonDiv>
							<ActionButton action='rock' onActionSelected={onActionSelected} />
							<ActionButton
								action='paper'
								onActionSelected={onActionSelected}
							/>
							<ActionButton
								action='scissors'
								onActionSelected={onActionSelected}
							/>
						</ButtonDiv>
						{winner !== null && <ShowWinner winner={winner} />}
					</BoardContainer>
					<ComputerContainer>
						<PlayerTitle>Computer</PlayerTitle>
						<StyledScoreTxt>Score:</StyledScoreTxt>
						<StyledScoreNumber>{computerScore}</StyledScoreNumber>
						<PlayerImg2 src='../../images/person2.png' />
					</ComputerContainer>
				</GameContainer>
			</Container>
		</>
	);
};

const Players = ({ name, action }) => {
	return (
		<StyledPlayerCont>
			<StyledPlayerPick>{name}</StyledPlayerPick>
			<StyledPlayer>{action && <ActionIcon action={action} />}</StyledPlayer>
		</StyledPlayerCont>
	);
};

const ActionIcon = ({ action }) => {
	const icons = {
		rock: '/images/rock.png',
		paper: '/images/paper.png',
		scissors: '/images/scissor.png'
	};

	const imageSrc = icons[action];

	return <PickImg src={imageSrc} alt={action} />;
};

const ActionButton = ({ action, onActionSelected }) => {
	return (
		<Button onClick={() => onActionSelected(action)}>
			<ActionIcon action={action} />
		</Button>
	);
};

export default RockPaper;
