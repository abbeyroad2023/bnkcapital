document.addEventListener("DOMContentLoaded", () => {
	console.log("loadding page");
	
	const statusbar = document.querySelector('#statusbar');
	const header = document.querySelector('#header');
	const homeTop = document.querySelector('#homeTop');
	const homeSearchbar = document.querySelector('#homeSearchbar');
	const section = document.querySelector('#container section');
	const bottom = document.querySelector('#bottom');
	const actionbar = document.querySelector('#actionbar');

	section.addEventListener('scroll', () => {
		const secScroll = Math.round(section.scrollTop);
		if (secScroll > 0) {
			if (statusbar !== null) {
				statusbar.classList.add('scroll');
			}
			if (header !== null) {
				header.classList.add('scroll');
			}
			if (homeSearchbar !== null) {
				if (secScroll > homeTop.scrollHeight - (statusbar.clientHeight + header.clientHeight)) {
					homeSearchbar.classList.add('fixed');
				} else {
					homeSearchbar.classList.remove('fixed');
				}
			}
		} else {
			if (statusbar !== null) {
				statusbar.classList.remove('scroll');
			}
			if (header !== null) {
				header.classList.remove('scroll');
			}
		}
	});

	let prevScroll = 0;
	section.addEventListener('scroll', getScrollDirection);

	function getScrollDirection() {
		const currScroll = Math.round(this.scrollTop);
		if ( currScroll > section.scrollHeight - section.clientHeight - actionbar.clientHeight) {
			bottom.classList.remove('hide');
		} else {
			if (prevScroll > currScroll) {
				bottom.classList.remove('hide');
			}
			else {
				bottom.classList.add('hide');
			}
		}
		prevScroll = currScroll;
	}


	// if (window.NodeList && !NodeList.prototype.forEach) {
	// 	NodeList.prototype.forEach = Array.prototype.forEach;
	// }
	
	document.querySelectorAll('.popup-open').forEach(popOpen => {
		const popId = popOpen.dataset.popup;
		const elPop = document.querySelector('#' + popId);
		if (elPop !== null) {
			popOpen.addEventListener('click', () => {
				elPop.classList.add('is-active');
			})
			elPop.querySelectorAll('.popup-close').forEach(popClose => {
				popClose.addEventListener('click', () => {
					elPop.classList.remove('is-active');
				});
			})
		}
	})
	

});