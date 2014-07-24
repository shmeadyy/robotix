"use strict";

function Maze(width, height){
  this.width = width; //parameters keep it dynamic rather than hardcoding
  this.height = height;

  this.startX = null;
  this.startY = null;
  this.startOrientation = null;
  this.endX = null;
  this.endY = null;

  this.directions = ["north", "east", "south", "west"]

  this.spaces = [];

  var x, y;
  for (x=1; x <= width; x +=1){ //for loop goes through each column and creates an array element for it, that array element will be another empty array.
  	this.spaces[x] = [];
  	for (y=1; y <= height; y += 1){ // this for loop will add 1 element to the array for each space in the column
  		this.spaces[x][y] = new MazeSpace(this.directions);
  	}
  }

}

Maze.prototype.setStart = function(x, y, orientation){  //defines a method, setStart, that will be a part of all Maze objects
	if (this.isValidDirection(orientation) && this.isInbounds(x,y)){ //isBounds is a method of the Maze object, therefore you must reference the object ('this') first!
		this.startX = x;
		this.startY = y;
		this.startOrientation = orientation;
		return true;
	}
	return false;
}

Maze.prototype.setEnd = function(x, y){
 if (!this.isInbounds(x,y)){
 	return false;
 }
	this.endX = x;
	this.endY = y;
	return true;
}

Maze.prototype.setWall = function(x, y, direction){ //maze keeps track of where the robot can move, spaces array, where the walls are
	if (this.isInbounds(x,y) <= this.height && this.isValidDirection(direction)){
    this.spaces[x][y].setWall(direction);  //will call setWall method on the proper space
    return true;
  }
  return false;
}

Maze.prototype.isValidDirection = function(direction){
	return this.directions.indexOf(direction) !== -1
}

Maze.prototype.isInbounds = function(x, y){
	return x > 0 && x <= this.width && y > 0 && y <= this.height
}

Maze.prototype.canMove = function(x, y, direction){
	if (this.isValidDirection(direction)){
		return false;
	}

  if (!this.isInbounds(x,y)){ //checks if current space is in maze
    return false;
  }
var forwardX, forwardY;
  switch(direction){
  	case "north":
  	  forwardX = x;
  	  forwardY = y+1;
  	  break;
  	case "east":
  	  forwardX = x +1;
  	  forwardY = y;
  	  break;
  	case "south":
  	  forwardX = x;
  	  forwardY = y-1;
  	  break;
  	case "west":
  	  forwardX = x-1;
  	  forwardX = y;
  	  break;
  }

  //Validations on the Maze and where we are within it
  if (!this.isInbounds(forwardX, forwardY)){ //if we AREN'T in bounds, return false
  	return false;
  }

  if (this.spaces[x][y][direction]){ //determines if we can or cannot move in a certain way, if we CAN'T, return false
  	return false;
  }

  var opposites = {
  	north: "south";
  	east: "west";
  	south: "north";
  	west: "east"
  };

  if (this.spaces[forwardX][forwardY][opposites]{  //if there IS a wall there, return false
  	return false;
  }
	return true;
}