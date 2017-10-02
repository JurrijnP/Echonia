function SimpleTime(Timestamp) {
	var time = Timestamp;
	time = time.replace(/(20[1-9][0-9])(-[0-1][0-9])(-[0-3][0-9]\s)/g, "");
	time = time.replace(/(:[0-5][0-9].[0-9][0-9][0-9]\s)(-0400\sEDT)/g, "");
	return time;
}