#!/usr/bin/env node

const { knightMoves, printMoves } = require("./chessboard/chessSquare");

printMoves(knightMoves([3, 3], [4, 3]));
