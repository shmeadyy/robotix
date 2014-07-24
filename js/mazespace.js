"use strict";

function MazeSpace(directions){
	var i;
	for (i=0; i < directions.length; i +=1){ //go through each element in the array and create a corresponding property in the mazespace object and set it's property value to false
		this[directions[i]]
	}
  this.north = false;
  this.south = false;
  this.east = false;
  this.west = false;

}

MazeSpace.prototype.setWall = function(direction){ //receive corresponding direction in a variable then set to true
	this[direction] = true;
}