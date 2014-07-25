Task:  Writing a program that moves a robot through a maze using object-oriented Javascript.

Completed:
  1) Move robot forward manually (click path with buttons)
  2) Move robot automatically --> by having the robot continue to follow the left wall (use canMoveForward() method to check if robot can move forward or not, if true => use turnLeft() method; if false => use moveForward() method).
    Algorithm for each step: check if he can move forward (canMoveForward()): if true, move forward and turn him left. (moveForward() = true, turnLeft();)
    																																					if false, turn him right (moveForward() = false, turnRight();)
    																									  											repeat indefinitely until end of maze. (exitMaze())