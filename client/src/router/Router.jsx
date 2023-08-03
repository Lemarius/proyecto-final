import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';

import SpaceInvaders from '../pages/spaceinvaders/SpaceInvaders';
import ChooseGame from '../pages/choosegame/ChooseGame';
import RockPaper from '../pages/rockpaper/RockPaper';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<ChooseGame />} />
				<Route path='/play/space-invaders' element={<SpaceInvaders />} />
				<Route path='/play/rock-paper-scissors' element={<RockPaper />} />
			</Route>
		</Routes>
	);
};

export default Router;
