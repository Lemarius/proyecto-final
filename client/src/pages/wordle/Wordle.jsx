import { useEffect, useState } from 'react';
import data from '../../data/db.json';
import {
	GameGrid,
	StyledContainer,
	StyledGameContainer,
	StyledLogoCont,
	StyledLogoImg,
	StyledLogoTitle
} from './styles';
import Row from '../../components/row/Row';
import Keypad from '../../components/keypad/Keypad';
import Modal from '../../components/modal/Modal';

const WordleGame = () => {
	const [solution, setSolution] = useState(null);
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([...Array(6)]);
	const [history, setHistory] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);
	const [usedKeys, setUsedKeys] = useState({});
	const [showModal, setShowModal] = useState(false);

	const randomSolution = () => {
		const randomIndex = Math.floor(Math.random() * data.solutions.length);
		const randomObj = data.solutions[randomIndex].word;
		return randomObj;
	};

	const formatGuess = () => {
		let solutionArray = [...solution];
		let formattedGuess = [...currentGuess].map(l => {
			return { key: l, color: 'gray' };
		});

		formattedGuess.forEach((l, i) => {
			if (solutionArray[i] === l.key) {
				formattedGuess[i].color = 'green';
				solutionArray[i] = null;
			}
		});

		formattedGuess.forEach((l, i) => {
			if (solutionArray.includes(l.key) && l.color !== 'green') {
				formattedGuess[i].color = 'yellow';
				solutionArray[solutionArray.indexOf(l.key)] = null;
			}
		});

		return formattedGuess;
	};

	const addNewGuess = formattedGuess => {
		if (currentGuess === solution) {
			setIsCorrect(true);
		}

		setGuesses(prevGuesses => {
			let newGuesses = [...prevGuesses];
			newGuesses[turn] = formattedGuess;
			return newGuesses;
		});

		setHistory(prevHistory => {
			return [...prevHistory, currentGuess];
		});

		setTurn(prevTurn => {
			return prevTurn + 1;
		});

		setUsedKeys(prevUsedKeys => {
			let newKeys = { ...prevUsedKeys };

			formattedGuess.forEach(l => {
				const currentColor = newKeys[l.key];

				if (l.color === 'green') {
					newKeys[l.key] = 'green';
					return;
				}

				if (l.color === 'yellow' && currentColor !== 'green') {
					newKeys[l.key] = 'yellow';
					return;
				}

				if (
					l.color === 'gray' &&
					currentColor !== 'green' &&
					currentColor !== 'yellow'
				) {
					newKeys[l.key] = 'gray';
					return;
				}
			});

			return newKeys;
		});

		setCurrentGuess('');
	};

	const handleKeyUp = e => {
		if (e.key === 'Enter') {
			if (turn > 5) {
				console.log('You used all your guesses');
				return;
			}

			if (history.includes(currentGuess)) {
				console.log('You already tried that word');
				return;
			}

			if (currentGuess.length !== 5) {
				console.log('Word must be 5 chars long');
				return;
			}

			const formatted = formatGuess(currentGuess);
			addNewGuess(formatted);
		}

		if (e.key === 'Backspace') {
			setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
		}
		if (/^[A-Za-z]$/.test(e.key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess(prevGuess => prevGuess + e.key);
			}
		}
	};

	useEffect(() => {
		setSolution(randomSolution());
	}, [setSolution]);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyUp);

		if (isCorrect) {
			setTimeout(() => {
				setShowModal(true);
			}, 2000);
			window.removeEventListener('keyup', handleKeyUp);
		}

		if (turn > 5) {
			setTimeout(() => {
				setShowModal(true);
			}, 2000);
			window.removeEventListener('keyup', handleKeyUp);
		}

		return () => window.removeEventListener('keyup', handleKeyUp);
	}, [handleKeyUp, isCorrect, turn]);

	return (
		<>
			<StyledContainer>
				<StyledGameContainer>
					<StyledLogoCont>
						<StyledLogoImg src='/images/wordle-icon.svg' />
						<StyledLogoTitle>Wordle</StyledLogoTitle>
					</StyledLogoCont>
					<GameGrid>
						{guesses.map((g, i) => {
							if (turn === i) {
								return <Row key={i} currentGuess={currentGuess} />;
							}
							return <Row key={i} guess={g} />;
						})}
						<Keypad usedKeys={usedKeys} />
						{showModal && (
							<Modal isCorrect={isCorrect} turn={turn} solution={solution} />
						)}
					</GameGrid>
				</StyledGameContainer>
			</StyledContainer>
		</>
	);
};

export default WordleGame;
