document.addEventListener("DOMContentLoaded", () => {
	console.log("loadding page");
	
	// const statusbar = document.querySelector('#statusbar');
	const header = document.querySelector('#header');
	const homeTop = document.querySelector('#homeTop');
	const homeSearchbar = document.querySelector('#homeSearchbar');
	const section = document.querySelector('#container section');
	const bottom = document.querySelector('#bottom');
	const actionbar = document.querySelector('#actionbar');

	section.addEventListener('scroll', () => {
		const secScroll = Math.round(section.scrollTop);
		if (secScroll > 0) {
			// if (statusbar !== null) {
			// 	statusbar.classList.add('scroll');
			// }
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
			// if (statusbar !== null) {
			// 	statusbar.classList.remove('scroll');
			// }
			if (header !== null) {
				header.classList.remove('scroll');
			}
		}
	});

	// let prevScroll = 0;
	//section.addEventListener('scroll', getScrollDirection);

	// function getScrollDirection() {
	// 	const currScroll = Math.round(this.scrollTop);
	// 	if (actionbar !== null) {
	// 		if (currScroll > section.scrollHeight - section.clientHeight - actionbar.clientHeight) {
	// 			bottom.classList.remove('hide');
	// 		} else {
	// 			if (prevScroll > currScroll) {
	// 				bottom.classList.remove('hide');
	// 			}
	// 			else {
	// 				bottom.classList.add('hide');
	// 			}
	// 		}
	// 		prevScroll = currScroll;
	// 	}
	// }


	// if (window.NodeList && !NodeList.prototype.forEach) {
	// 	NodeList.prototype.forEach = Array.prototype.forEach;
	// }
	
	document.querySelectorAll('.popup-open').forEach(popOpen => {
		const popId = popOpen.dataset.popup;
		const elPop = document.querySelector('#' + popId);
		if (elPop !== null) {
			popOpen.addEventListener('click', () => {
				elPop.classList.add('is-active');


				if (elPop.querySelector('.pop-head') !== null && elPop.querySelector('.pop-head').classList.contains('in-progress-bar') === true) {
					const stepCount = elPop.querySelector('.step-list').childElementCount;
					const currentBar = Math.round(1 / (stepCount-1) * 100);
					//console.log(currentBar)
					if (elPop.querySelector('.progress-bar') !== null) {
						elPop.querySelector('.progress-bar > span').style.width = currentBar + '%';
					}
				};

				if (elPop.querySelector('.step-list') !== null) {

					elPop.querySelectorAll('.step-item').forEach((stepItem, index, array) => {
						const stepBtn = stepItem.querySelector('.btn');
	
						stepItem.classList.remove('is-show');
						
						stepItem.addEventListener('click', ev => {
							if (ev.target.classList.contains('step-disabled') === true) {
								ev.target.parentNode.classList.add('is-active');
								if (stepBtn.disabled === true) {
									stepBtn.disabled = false;
								}
							}
							if (ev.target.classList.contains('next-show') === true) {
								ev.target.parentNode.classList.remove('is-show');
								const currentBar = Math.round(((index + 2) / array.length) * 100);
								//console.log(currentBar)
								elPop.querySelector('.progress-bar > span').style.width = currentBar + '%';
							}
							
						})
					})
					elPop.querySelector('.step-item').classList.add('is-show');
				};

				//progress bar
				const elProgress = document.getElementById('progress-pop');
				const countdownElement = document.getElementById("countdown");
				if (elProgress !== null && elProgress.classList.contains("is-active")) {

					let count = 1;

					function updateCountdown() {
						countdownElement.textContent = count;
						count++;

						if (count > 100) {
							setTimeout(closePopup, 1500);
						} else {
							setTimeout(updateCountdown, 40);
						}
					}

					function closePopup() {
						elProgress.classList.remove('is-active');
					}

					setTimeout(updateCountdown, 100);

				}

			})
			elPop.querySelectorAll('.popup-close').forEach(popClose => {
				popClose.addEventListener('click', () => {
					elPop.classList.remove('is-active');

					// elPop.querySelectorAll('.step-item').forEach(stepItem => {
					// 	stepItem.classList.remove('is-show');
					// })
					
				});
			})
		}
	})

	document.querySelectorAll('.progress-open').forEach(progressOpen => {
		const progressId = progressOpen.dataset.progress;
		const elProgress = document.querySelector('#' + progressId);
		if (elProgress !== null) {
			progressOpen.addEventListener('click', () => {
				elProgress.classList.add('is-show');
				const scrollPosition = elProgress.offsetTop;
				// document.querySelector("#scrollArea").scrollTop = scrollPosition;
				document.querySelector("#scrollArea").scrollTo({top: scrollPosition - 120, behavior: 'smooth'});

				//console.log(scrollPosition);
			})
		}
	})

	document.querySelectorAll('.next-show').forEach(nextShow => {
		const nextId = nextShow.dataset.next;
		const elNext = document.querySelector('#' + nextId);
		if (elNext !== null) {
			nextShow.addEventListener('click', () => {
				elNext.classList.add('is-show');

				//console.log(nextId);
				if (
					nextId === 'next1-1' || 
					nextId === 'next4-1' || 
					nextId === 'next5-1' || 
					nextId === 'next5-2' || 
					nextId === 'next7-1' || 
					nextId === 'next8-1' || 
					nextId === 'next8-2'
					) {
					const scrollPosition2 = elNext.offsetTop;
					document.querySelector("#scrollArea").scrollTo({top: scrollPosition2 - 120, behavior: 'smooth'});
					
				}
			})
		}
	})

});