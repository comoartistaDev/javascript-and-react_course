function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avator = document.querySelector('#player');

window.addEventListener('keyup', (e) => {
	const currTop = extractPos(avator.style.top);
	avator.style.top = `${currTop + 50}px`; 
	
});

const extractPos = (pos) => parseInt(pos.slice(0,-2));