import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useState } from 'react';

const App = () => {
	const [activeNav, setActiveNav] = useState(0);
	const [activeGame, setActiveGame] = useState(0);

	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<GlobalStyles />
					<Router
						handleActiveNav={handleActiveNav}
						activeNav={activeNav}
						setActiveNav={setActiveNav}
						handleActiveGame={handleActiveGame}
						activeGame={activeGame}
						setActiveGame={setActiveGame}
					/>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};

const handleActiveNav = (setActiveNav, num) => {
	setActiveNav(num);
};

const handleActiveGame = (setActiveGame, num) => {
	setActiveGame(num);
};

export default App;
