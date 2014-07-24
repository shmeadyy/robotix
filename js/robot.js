"use strict";

function Robot(){
	this.x = null;
	this.y = null;
	this.orientation = null;
	this.maze = null;
}

Robot.prototype.setMaze = function(maze){
	this.maze = maze;
	this.x = maze.startX;
	this.y = maze.startY;
	this.orientation = maze.startOrientation;
}

Robot.prototype.turnRight = function(){
	if (!this.maze || !this.maze.isValidDirection(this.orientation)){ //validates that the robot is in the maze and facing a valid direction
		return false;
	}
	var rights = {
		north: "east",
		east: "south",
		south: "west",
		west: "north"
	}
	this.orientation = rights[this.orientation];
	return true;
}

Robot.prototype.turnLeft = function(){
	if (!this.maze || !this.maze.isValidDirection(this.orientation)){ //validates that the robot is in the maze and facing a valid direction
		return false;
	}
	var rights = {
		north: "west",
		east: "north",
		south: "east",
		west: "south"
	}
	this.orientation = rights[this.orientation];
	return true;
}

Robot.prototype.moveForward = function(){ //manually move robot forward
	switch (this.orientation){
		case "north":
		  this.y += 1;
		  break;
		case "east":
		  this.x += 1;
		  break;
		case "south":
		  this.y -= 1;
		  break;
		case "west":
		  this.x -= 1;
	}
} //change the robot's x or y coordinates depending on which way he's facing