import { useEffect, useState } from 'react';
import {
	GameOver,
	StyledButton,
	StyledCanvas,
	StyledContainer,
	StyledH1,
	StyledLogo
} from './styles';

const SpaceInvaders = () => {
	const tileSize = 32;
	const rows = 20;
	const columns = 28;
	const boardWidth = tileSize * columns;
	const boardHeight = tileSize * rows;
	let shipImg;
	const shipVelocityX = tileSize;

	let alienArray = [];
	const alienWidth = tileSize * 2;
	const alienHeight = tileSize;
	const alienX = tileSize;
	const alienY = tileSize;
	let alienImg;

	let alienRows = 3;
	let alienColumns = 4;
	let alienCount = 0;
	let alienVelocityX = 1.5;

	let bulletArray = [];
	const bulletVelocityY = -10;

	let score = 0;

	const [ship, setShip] = useState({
		x: (tileSize * columns) / 2 - tileSize,
		y: tileSize * rows - tileSize * 2,
		width: tileSize * 2,
		height: tileSize
	});
	const [gameOver, setGameOver] = useState(false);
	console.log(gameOver);

	useEffect(() => {
		const board = document.getElementById('board');
		const context = board.getContext('2d');

		const update = () => {
			if (gameOver) {
				return;
			}
			requestAnimationFrame(update);
			context.clearRect(0, 0, boardWidth, boardHeight); // Limpia el canvas antes de dibujar
			context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

			for (let i = 0; i < alienArray.length; i++) {
				const alien = alienArray[i];
				if (alien.alive) {
					alien.x += alienVelocityX;

					if (alien.x + alien.width >= board.width || alien.x <= 0) {
						alienVelocityX *= -1;
						alien.x += alienVelocityX * 2;

						for (let j = 0; j < alienArray.length; j++) {
							alienArray[j].y += alienHeight;
						}
					}
					context.drawImage(
						alienImg,
						alien.x,
						alien.y,
						alien.width,
						alien.height
					);
					if (alien.y >= ship.y) {
						setGameOver(true);
					}
				}
			}

			for (let i = 0; i < bulletArray.length; i++) {
				const bullet = bulletArray[i];
				bullet.y += bulletVelocityY;
				context.fillStyle = 'white';
				context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

				for (let j = 0; j < alienArray.length; j++) {
					const alien = alienArray[j];
					if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
						bullet.used = true;
						alien.alive = false;
						alienCount--;
						score += 100;
					}
				}
			}

			while (
				bulletArray.length > 0 &&
				(bulletArray[0].used || bulletArray[0].y < 0)
			) {
				bulletArray.shift();
			}

			if (alienCount === 0) {
				alienColumns = Math.min(alienColumns + 1, columns / 2 - 2);
				alienRows = Math.min(alienRows + 1, rows - 4);
				alienVelocityX += 0.5;
				alienArray = [];
				bulletArray = [];
				createAliens();
			}
			context.fillStyle = 'white';
			context.font = '16px courier';
			context.fillText(score, 5, 20);
		};

		const moveShip = e => {
			if (gameOver) {
				return;
			}
			if (e.code === 'ArrowLeft' && ship.x - shipVelocityX >= 0) {
				setShip(prevShip => ({ ...prevShip, x: prevShip.x - shipVelocityX }));
			} else if (
				e.code === 'ArrowRight' &&
				ship.x + shipVelocityX + ship.width <= board.width
			) {
				setShip(prevShip => ({ ...prevShip, x: prevShip.x + shipVelocityX }));
			}
		};

		alienImg = new Image();
		alienImg.src = '../../images/alien-magenta.png';

		const createAliens = () => {
			for (let c = 0; c < alienColumns; c++) {
				for (let r = 0; r < alienRows; r++) {
					const alien = {
						img: alienImg,
						x: alienX + c * alienWidth,
						y: alienY + r * alienHeight,
						width: alienWidth,
						height: alienHeight,
						alive: true
					};
					alienArray.push(alien);
				}
			}
			alienCount = alienArray.length;
		};

		createAliens();

		const shoot = e => {
			if (gameOver) {
				return;
			}
			if (e.code === 'Space') {
				const bullet = {
					x: ship.x + (ship.width * 15) / 32,
					y: ship.y,
					width: tileSize / 8,
					height: tileSize / 2,
					used: false
				};
				bulletArray.push(bullet);
			}
		};

		const detectCollision = (a, b) => {
			return (
				a.x < b.x + b.width &&
				a.x + a.width > b.x &&
				a.y < b.y + b.height &&
				a.y + a.height > b.y
			);
		};

		shipImg = new Image();
		shipImg.src = '../../images/ship.png';
		shipImg.onload = () => {
			context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
		};

		requestAnimationFrame(update);
		document.addEventListener('keydown', moveShip);
		document.addEventListener('keyup', shoot);

		return () => {
			document.removeEventListener('keydown', moveShip); // Limpia el evento al desmontar el componente
		};
	}, [ship, boardWidth, boardHeight, shipVelocityX]);

	return (
		<>
			<StyledContainer>
				<StyledLogo src='../../images/space-invaders-logo.png' />
				<StyledCanvas
					id='board'
					width={boardWidth}
					height={boardHeight}
				></StyledCanvas>
				{gameOver && (
					<GameOver>
						<StyledH1>GAME OVER</StyledH1>
						<StyledButton onClick={() => window.location.reload(false)}>
							RESTART
						</StyledButton>
					</GameOver>
				)}
			</StyledContainer>
		</>
	);
};

export default SpaceInvaders;
