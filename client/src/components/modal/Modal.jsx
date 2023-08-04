import './styles.css';

const Modal = ({ isCorrect, turn, solution }) => {
	return (
		<div className='modal'>
			{isCorrect && (
				<div>
					<h1>You win!</h1>
					<p className='solution'> The solution was: {solution}</p>
					<p>You found the solution in {turn} guesses!</p>
				</div>
			)}
			{!isCorrect && (
				<div>
					<h1>You lose...</h1>
					<p className='solution'>The solution was: {solution}</p>
					<p>Better luck next time!</p>
				</div>
			)}
		</div>
	);
};

export default Modal;
