const scrollTo = function(element, to, duration) {
	const start = element.scrollTop;
	const	change = to - start;
	const	increment = 20;

	const animateScroll = function(elapsedTime) {
		elapsedTime += increment;
		const position = easeInOut(elapsedTime, start, change, duration);
		element.scrollTop = position;
		if (elapsedTime < duration) {
			setTimeout(function() {
				animateScroll(elapsedTime);
			}, increment);
		}
	};

	animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
	currentTime /= duration / 2;
	if (currentTime < 1) {
		return change / 2 * currentTime * currentTime + start;
	}
	currentTime -= 1;
	return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollTo;
