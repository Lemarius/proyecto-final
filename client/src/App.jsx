import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
