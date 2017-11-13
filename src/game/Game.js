import React from 'react';
import io from 'socket.io-client'

const Game = () => {
	const socket = io('http://localhost:3030');
	
	return (
		<div>Game coming soon</div>
	)
}

export default Game;