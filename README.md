# Country-Guess-Game


## In this game, user tries to guess the country by using the keyboard.

1) Computer picks a country from a predefined library randomly and waits for user to enter a key.
2) When a key is entered;
    - Computer checks if the key is already used, if so, computer waits for user to enter another key until user enters a different key
    - If the key is not used, it is stored as a used key and computer checks if the key is found in the picked country. If so, computer reveals those letters. If not, number of guesses reamining decreases by 1.
3) If user reveals all letters before running out of guesses, computer alerts user "You Won" and wins increased by 1, then computer resets the game. If not, computer resets the game without increasing the number of wins.
