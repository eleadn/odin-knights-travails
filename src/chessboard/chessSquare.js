const { CHESS_DIM_X, CHESS_DIM_Y } = require("./chessConsts");

class ChessSquare {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getNeighbors(possibleMoves) {
		const neighbors = [];
		for (let move of possibleMoves) {
			const moveX = this.x + move[0];
			const moveY = this.y + move[1];

			if (
				moveX >= 0 &&
				moveX < CHESS_DIM_X &&
				moveY >= 0 &&
				moveY < CHESS_DIM_Y
			) {
				neighbors.push(new ChessSquare(moveX, moveY));
			}
		}
		return neighbors;
	}
}

module.exports = { ChessSquare };
