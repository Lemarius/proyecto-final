import { Link } from 'react-router-dom';
import { StyledBtn, StyledContainer } from './styles';

const ChooseGame = () => {
	return (
		<>
			<StyledContainer>
				<StyledBtn>
					<Link to='/login'>Sign up!</Link>
				</StyledBtn>
			</StyledContainer>
		</>
	);
};

export default ChooseGame;
