// SEE BELOW FOR COMMENTED VERSION

var clock = function(hourhand, minutehand) {

	if (hourhand > 12 || hourhand < 0 || minutehand < 0 || minutehand > 59) { return "out of range" ;}

	var hoursToMinutes = (hourhand * 5) + (minutehand / 12);
	var minutes        = minutehand;

	if (hoursToMinutes > 60) { hoursToMinutes -= 60 ;}

	var angle;

	if (hoursToMinutes > minutes) {
		angle = (hoursToMinutes - minutes) * 6;
	} else {
		angle = (minutes - hoursToMinutes) * 6;
	}

	return [angle, 360 - angle];

};


// COMMENTED
var clock = function(hourhand, minutehand) {

	// If input is out of range, quit the function
	if (hourhand > 12 || hourhand < 0 || minutehand < 0 || minutehand > 59) { return "out of range" ;}

	// Convert hours to minutes so that we have a direct comparison between input values.
	// Values:
	// - hourhand * 5: an hour times five equals the same position in minutes.
	//   Example: Hour 6 is at the 30 minute position. 6 * 5 = 30.
	// - minutehand / 12: there are five 'ticks' of minutes between hour positions. Across
	//   sixty ticks, that leaves a quotient of 12. This will be added to the
	//   hoursToMinutes to account for 'drift' of the hour hand.
	//   Example: at 6:30, 30 minutes is at the halfway point between 6 and 7.
	//   Since there are five 'ticks' between 6 and 7, the halfway point is 2.5.
	//   30 / 12 = 2.5. This gets added to the hour hand position.
	var hoursToMinutes = (hourhand * 5) + (minutehand / 12);

	// Just rename minutehand to minutes for naming consistency with hoursToMinutes.
	var minutes        = minutehand;

	// if the addition of 'drift' pushes the hoursToMinutes above 60, take away 60
	// (the clock's position is after midnight/noon, so back to the beginning).
	if (hoursToMinutes > 60) { hoursToMinutes -= 60 ;}

	var angle;

	// Ascertain which is bigger, hoursToMinutes or minutes, and deduct the smaller
	// from the larger. Then, convert minutes into degrees with * 6. One minute is 6 degrees.
	// There are 60 minutes in a 360 degree minute hand revolution. Divide the total
	// degrees (360), by the number of minutes in a revolution (60) to see the quotient
	// in degrees. 360 / 60 = 6 degrees for each minute.
	if (hoursToMinutes > minutes) {
		angle = (hoursToMinutes - minutes) * 6;
	} else {
		angle = (minutes - hoursToMinutes) * 6;
	}

	// Return the difference between hoursToMinutes and minutes, and
	// also return the other angle by deducting it from the 360 degrees total.
	return [angle, 360 - angle];

};
