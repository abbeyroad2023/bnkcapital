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

	let prevScroll = 0;
	//section.addEventListener('scroll', getScrollDirection);

	function getScrollDirection() {
		const currScroll = Math.round(this.scrollTop);
		if (actionbar !== null) {
			if (currScroll > section.scrollHeight - section.clientHeight - actionbar.clientHeight) {
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

	document.querySelectorAll('.progress-open').forEach(progressOpen => {
		const progressId = progressOpen.dataset.progress;
		const elProgress = document.querySelector('#' + progressId);
		if (elProgress !== null) {
			progressOpen.addEventListener('click', () => {
				elProgress.classList.add('is-show');

				const scrollPosition = elProgress.offsetTop;
				// document.querySelector("#scrollArea").scrollTop = scrollPosition;
				document.querySelector("#scrollArea").scrollTo({top: scrollPosition - 300, behavior: 'smooth'});

				console.log(scrollPosition);
			})
		}
	})

	document.querySelectorAll('.next-show').forEach(nextShow => {
		const nextId = nextShow.dataset.next;
		const elNext = document.querySelector('#' + nextId);
		if (elNext !== null) {
			nextShow.addEventListener('click', () => {
				elNext.classList.add('is-show');

				console.log(nextId);

				if (nextId === 'next4-1' || nextId === 'next5-1') {
					const scrollPosition2 = elNext.offsetTop;
					document.querySelector("#scrollArea").scrollTo({top: scrollPosition2 - 200, behavior: 'smooth'});
					
				}
			})
		}
	})

	const tabList = document.querySelectorAll('.step-list li');
	for(var i = 0; i < tabList.length; i++){
		tabList[i].querySelector('.step-next').addEventListener('click', function(e){
			e.preventDefault();
			for(var j = 0; j < tabList.length; j++){
				tabList[j].classList.remove('is-show');
			}
			this.parentNode[i].classList.add('is-show');
		});
	}


	// document.querySelectorAll('.step-list').forEach(stepList => {
	// 	const stepItem = stepList.querySelectorAll('.step-item');
	// 	stepList.addEventListener('click', ev => {

	// 		console.log(ev.target)

	// 		// if (ev.target.className === stepCase[i]) {
	// 		// 	for (let j = 0; j < stepItem.length; j+=1) {
	// 		// 		stepItem[j].classList.remove('is-active');
	// 		// 	}
	// 		// 	ev.target.parentNode.classList.add('is-active');
	// 		// }
	// 	})
	// })

});