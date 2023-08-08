import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';

import SpaceInvaders from '../pages/spaceinvaders/SpaceInvaders';
import ChooseGame from '../pages/choosegame/ChooseGame';
import RockPaper from '../pages/rockpaper/RockPaper';
import Wordle from '../pages/wordle/Wordle';
import LoginPage from '../pages/loginpage/LoginPage';
import Blog from '../pages/blog/Blog';

const Router = ({
	handleActiveNav,
	activeNav,
	setActiveNav,
	handleActiveGame,
	activeGame,
	setActiveGame
}) => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout
						handleActiveNav={handleActiveNav}
						activeNav={activeNav}
						setActiveNav={setActiveNav}
						handleActiveGame={handleActiveGame}
						activeGame={activeGame}
						setActiveGame={setActiveGame}
					/>
				}
			>
				<Route index element={<ChooseGame />} />
				<Route path='/play/space-invaders' element={<SpaceInvaders />} />
				<Route path='/play/rock-paper-scissors' element={<RockPaper />} />
				<Route path='/play/wordle' element={<Wordle />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/blog' element={<Blog />} />
			</Route>
		</Routes>
	);
};

export default Router;
