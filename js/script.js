const dropdownBtn = document.querySelector('.dropdown')
const menu = document.querySelector('.menu')

const ShowMenu = () => {
	menu.classList.toggle('active-menu')
}

dropdownBtn.addEventListener('click', ShowMenu)

// --SERCH--

const navButton = document.querySelector('.search-btn')
const inputBar = document.querySelector('.search-input')

const ShowInput = () => {
	inputBar.classList.toggle('active-input')
}

navButton.addEventListener('click', ShowInput)

// --HEADER--

const slider = document.querySelector('.slider')
const leftBtn = document.querySelector('.btn-slider-left')
const rightBtn = document.querySelector('.btn-slider-right')
const sliderPage = document.querySelectorAll('.slide')
const caruselSpeed = 8000
let index = 0

const changeSlideUp = () => {
	sliderPage[index].classList.toggle('active')
	changeSlideAdd()
}
const changeSlideDown = () => {
	sliderPage[index].classList.toggle('active')
	changeSlideSubtract()
}

const changeSlideAdd = () => {
	if (index >= sliderPage.length - 1) {
		index = 0
		sliderPage[index].classList.toggle('active')
	} else if (index >= 0) {
		index++
		sliderPage[index].classList.toggle('active')
	}
}
const changeSlideSubtract = () => {
	if (index <= 0) {
		index = sliderPage.length - 1
		sliderPage[index].classList.toggle('active')
	} else if (index <= sliderPage.length - 1) {
		index--
		sliderPage[index].classList.toggle('active')
	}
}

let startCarousel = setInterval(changeSlideUp, caruselSpeed)

rightBtn.addEventListener('click', changeSlideUp)
leftBtn.addEventListener('click', changeSlideDown)

// --MASONRY--

var elem = document.querySelector('.grid')
var msnry = new Masonry(elem, {
	// options
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
})

// --IMG_POPUP--

const imgPop = document.querySelectorAll('.grid-item img')
const popupImg = document.querySelector('.popup-img')
const popup = document.querySelector('.poped-img')
const span = document.querySelector('.popup-img span')
const lArrow = document.querySelector('.left-arrow')
const rArrow = document.querySelector('.right-arrow')
const imageIndex = document.querySelector('.index')
let indexGalery = 0

imgPop.forEach((item, i) => {
	item.addEventListener('click', () => {
		updateImage(i)
		popupImg.style.display = 'block'
	})
})

const updateImage = i => {
	let path = `./img/galery/img${i + 1}-min.jpg`
	popup.src = path
	imageIndex.innerHTML = `${i + 1}`
	index = i
}

span.addEventListener('click', () => {
	popupImg.style.display = 'none'
})

lArrow.addEventListener('click', () => {
	if (index > 0) {
		updateImage(index - 1)
	}
})

rArrow.addEventListener('click', () => {
	if (index < imgPop.length - 1) {
		updateImage(index + 1)
	}
})

// --RULER--
const rulerBtn = document.querySelector('.ruler-btn')
const ruler = document.querySelector('.ruler')
const project = document.querySelector('.project')

const ShowImg = () => {
	if (ruler.classList.contains('inactive')) {
		setTimeout(() => {
			rulerBtn.innerHTML = 'Rozwiń <i class="fa-solid fa-arrow-down ps-2"></i>'
		}, 300)
	} else {
		setTimeout(() => {
			rulerBtn.innerHTML = 'Zwiń <i class="fa-solid fa-arrow-up ps-2"></i>'
		}, 300)
	}
	ruler.classList.toggle('inactive')
	setTimeout(() => {
		project.classList.toggle('grid-full')
	}, 290)
}

rulerBtn.addEventListener('click', ShowImg)

// --FOOTER--

const footerYear = document.querySelector('.footer__year')
const date = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
date()
