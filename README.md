# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. It provides an interactive game board for two players to take turns and try to win the game by forming a winning combination.

## Features

- Two players can take turns to play the game.
- The game keeps track of the current player and displays the winning message when a player wins or the game ends in a draw.
- The restart button allows players to reset the game and start a new match.

## How to Play

1. Open the `index.html` file in your web browser.
2. The game board consists of a 3x3 grid.
3. Players take turns by clicking on empty cells to place their marks (X or O).
4. The game checks for a win or a draw after each move.
5. If a player wins or the game ends in a draw, a message will be displayed.
6. Click the "Restart" button to start a new game.

## Game Logic

- The JavaScript file (`script.js`) contains the game logic.
- It uses event listeners to respond to user clicks on the game board.
- Winning combinations are defined in the `WINNING_COMBINATIONS` constant.
- The game checks for a win or draw using functions like `checkWin()` and `isDraw()`.
- The game state is managed through functions that update classes on HTML elements.
- CSS styles are used to create a visually appealing game board.

## Dependencies

This project uses the following technologies:

- HTML
- CSS
- JavaScript

## How to Run

To play the game, simply open the `index.html` file in your web browser.

## Credits

This project was created by [Isaac Aguinaga](https://github.com/ScaiaAguinaga).

## License

This project is open-source and available under the [MIT License](LICENSE).
