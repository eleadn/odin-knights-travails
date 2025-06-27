const { CHESS_DIM_X, CHESS_DIM_Y, KNIGHT_MOVES } = require("./chessConsts");

function getNeighbors(square, possibleMoves) {
	const neighbors = [];
	for (let move of possibleMoves) {
		const moveX = square[0] + move[0];
		const moveY = square[1] + move[1];

		if (
			moveX >= 0 &&
			moveX < CHESS_DIM_X &&
			moveY >= 0 &&
			moveY < CHESS_DIM_Y
		) {
			neighbors.push([moveX, moveY]);
		}
	}

	return neighbors;
}

function knightMovesBsf(start, end) {
	const queue = [start];
	const visited = new Set([start.toString()]);
	const predecessors = new Map([[start.toString(), null]]);

	while (queue.length > 0) {
		const current = queue.shift();

		if (current[0] === end[0] && current[1] === end[1]) {
			break;
		}

		const childs = getNeighbors(current, KNIGHT_MOVES);
		for (const c of childs) {
			if (!visited.has(c.toString())) {
				queue.push(c);
				visited.add(c.toString());
				predecessors.set(c.toString(), current);
			}
		}
	}

	const path = [end];
	let current = predecessors.get(path[0].toString());

	while (current !== null) {
		path.unshift(current);
		current = predecessors.get(current.toString());
	}

	return path;
}

function knightMoves(start, end) {
	return knightMovesBsf(start, end);
}

module.exports = { knightMoves };
