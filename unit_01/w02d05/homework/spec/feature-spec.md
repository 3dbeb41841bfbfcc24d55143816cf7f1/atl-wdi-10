# Feature Spec : Tic Tac Toe

```markdown
1.  Initially, nothing is shown in the main content window.
2.  When the 'New Game' button is clicked:
  2.1.  A board appears on the page.
  2.2.  An indicator shows that the current player is 'X'.
3.  When a square on the board is clicked:
  3.1.  If the game is not yet over and if the move is valid (i.e. the space is
        empty):
    3.1.1.  The mark of the current player is placed in the space.
    3.1.2.  If the game is not yet over, the opposing player becomes the new 'current player'
    3.1.3.  If the game is over, The user sees a message declaring the current
            player to be the winner.
  3.2.  If the game is over, or if the move is invalid, no moves are placed on the board.
```
