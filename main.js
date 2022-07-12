// // 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ქვემოთ მობმული სურათი (საათი.png).
// const clock = document.querySelector(".clock");
// function createClock() {
// 	let day = new Date(),
// 		hour = ("" + day.getHours()).padStart(2, "0"),
// 		min = ("" + day.getMinutes()).padStart(2, "0"),
// 		sec = ("" + day.getSeconds()).padStart(2, "0");

// 	// console.log(hour, min, sec);

// 	// clock.innerHTML = `${hour} : ${min} : ${sec}`;

// 	if (hour <= 12) {
// 		clock.innerHTML = `${hour} : ${min} : ${sec} AM`;
// 	} else {
// 		clock.innerHTML = `${hour - 12} : ${min} : ${sec} PM`;
// 	}
// }

// setInterval(createClock, 1000);

// // 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ:
// //    1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
// //    2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს
// //    დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

// // 3. დავამატოთ ასეთი (ღილაკები.png) ღილაკები იმდენი რამდენი სლაიდიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).
// // COMMENT
// // slider
// // სლაიდერის ღილაკები
// const nextBtn = document.querySelector("#next"),
// 	prevBtn = document.querySelector("#prev"),
// 	sliders = document.querySelectorAll(".slider-item"),
// 	startAutoSliding = document.querySelector("#start-auto"),
// 	stopAutoSliding = document.querySelector("#stop-auto"),
// 	pgnBulletsBlock = document.querySelector(".pagination-bullets"),
// 	bullets = document.querySelectorAll(".pgn-bullet"),
// 	slidesWrapper = document.querySelector(".slider-wrapper");

// // საწყისი activeIndex
// let activeIndex = 0;

// console.log("sliders", sliders);

// function initSlider() {
// 	// next prev ღილაკებზე ლისენერის დამატება
// 	nextBtn.addEventListener("click", showNextSlide);
// 	prevBtn.addEventListener("click", showPrevSlide);

// 	// ერთ-ერთ სლაიდზე active კლასის დამატება activeIndex-ის მიხედვით
// 	renderSlides();
// 	renderBullets();
// 	// კლავიატურის ღილაკებზე მოსმენა
// 	document.addEventListener("keyup", (e) => {
// 		// console.log(e);
// 		// e.code გვიბრუნდებს შესაბამისი ღილაკის შესახებ ინფორმაციას
// 		if (e.code === "ArrowLeft") {
// 			showPrevSlide();
// 		}
// 		if (e.code === "ArrowRight") {
// 			showNextSlide();
// 		}
// 	});
// }

// function renderBullets() {
// 	bullets.forEach((dot, index) => {
// 		dot.addEventListener("click", () => {
// 			console.log(index);
// 			activeIndex = index;
// 			renderSlides();
// 		});
// 	});
// }

// function updateActiveClass(arr) {
// 	arr.forEach((el, i) => {
// 		if (i === activeIndex) {
// 			el.classList.add("active");
// 		} else {
// 			el.classList.remove("active");
// 		}
// 	});
// }

// // activeIndex (0, 1, ან 2) ინდექსის მქონე სლაიდზე ამატებს active კლასს, დანარჩენებზე შლის
// function renderSlides() {
// 	console.log("activeIndex", activeIndex);
// 	updateActiveClass(sliders);
// 	updateActiveClass(bullets);
// }

// //
// function showNextSlide() {
// 	// console.log("next");
// 	// activeIndex ის მნიშვნელობის გაზრდა და ვამოწმებთ ეს ინდექსი (სლაიდების რაოდენობას - 1)-ზე მეტი ხომ არაა
// 	if (activeIndex === sliders.length - 1) {
// 		activeIndex = 0;
// 	} else {
// 		activeIndex++;
// 	}
// 	//  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
// 	renderSlides();
// }

// function showPrevSlide() {
// 	// console.log("prevBtn");
// 	// activeIndex ის მნიშვნელობის შემცირება და ვამოწმებთ ეს ინდექსი 0-ზე ნაკლები ხომ არაა
// 	if (activeIndex === 0) {
// 		activeIndex = sliders.length - 1;
// 	} else {
// 		activeIndex--;
// 	}
// 	//  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
// 	renderSlides();
// }

// // COMMENT autosliding
// // id სლაიდერის ინტერვალისთვის
// let autoSlidingId = null;

// function startIntervalFnSlider() {
// 	// ეს კოდი შესრულდება ყოველ 3 წამში (3000 მილიწამში)
// 	autoSlidingId = setInterval(showNextSlide, 5000);
// }

// // autosliding -ის შეჩერება
// function stopIntervalFnSlider() {
// 	if (autoSlidingId) {
// 		clearInterval(autoSlidingId);
// 		autoSlidingId = null;
// 	}
// }

// autosliding-ის დამატება შესაბამის ღილაკებზე
// startAutoSliding.addEventListener("click", startIntervalFnSlider);
// stopAutoSliding.addEventListener("click", stopIntervalFnSlider);

// slidesWrapper.addEventListener("mouseenter", stopIntervalFnSlider);

// slidesWrapper.addEventListener("mouseleave", startIntervalFnSlider);

// სლაიდერის დარენდერება საიტის ჩატვირთვისას
// initSlider();

// COMMENT form ვალიდაციები
const userSignUpForm = document.querySelector("#sign-up"),
	userName = document.querySelector("#username"),
	email = document.querySelector("#email"),
	password = document.querySelector("#password"),
	userNameError = document.querySelector("#username-error"),
	passwordError = document.querySelector("#password-error"),
	emailError = document.querySelector("#email-error");

function validateUserName() {
	// როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
	if (!userName.validity.valid) {
		// console.log(userName.validity);
		userName.classList.add("error");
		userNameError.textContent = "user name required";

		// true ან დაბლა false ს ვაბრუნებთ იმის მიხედვით ვალიდაცია გაიარა თუ არა
		return false;
	} else {
		userNameError.textContent = "";
		userName.classList.remove("error");
		return true;
	}
}

function validateEmail() {
	// როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
	if (!email.validity.valid) {
		email.classList.add("error");
		emailError.textContent = "email required";
		// როცა, ცარიელი არაა, მაგრამ მეილის სწორი ფორმა არაა და @ სიმბოლო არაა გამოყენებული
		if (email.validity.typeMismatch) {
			emailError.textContent = "not valid email";
		}
		return false;
	} else {
		emailError.textContent = "";
		email.classList.remove("error");
		return true;
	}
}

function validatePassword() {
	// როცა პაროლი 4 სიმბოლოზე ნაკლებია, მაშინ გამოვა ერორი
	if (password.value.length <= 4) {
		password.classList.add("error");
		passwordError.textContent = "password must be 4 or more charachter";
		// console.log(userName.validity.tooShort);
		return false;
	} else {
		passwordError.textContent = "";
		password.classList.remove("error");
		// password.type = "text";
		return true;
	}
}

userName.addEventListener("input", (e) => {
	// console.log(e.target.value);
	validateUserName();
});

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

userSignUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(userName.validity.valid);
	// console.log(email.validity);
	// ამ ცვლადებში ვინახავთ ინფორმაციას იმის შესახებ თითოეული ინფუთი იყო თუ არა ვალიდური
	const isValidUserName = validateUserName();
	const isValidEmail = validateEmail();
	const isValidPassword = validatePassword();

	// console.log(isValidUserName, isValidEmail, isValidPassword);

	// showModal();

	if (isValidUserName && isValidEmail && isValidPassword) {
		// თუ სამივე ინფუთი ვალიდურია ფორმა დასაბმითდეს / ან შევინახოთ ინფორმაცია და ბექის მხარეს გავაგზავნოთ
		// userSignUpForm.submit()

		const userInfo = {
			userName: userName.value,
			email: email.value,
			password: password.value,
		};

		console.log(userInfo);
		// მოდალის გამოტანა
		dynamicOpenModal("#sign-in-modal");
	}
});

// COMMENT modals, popup
const modalEl = document.querySelector(".modal"),
	closeBtn = document.querySelector(".modal-close"),
	openModalSecond = document.querySelector(".open-modal-second");

function showModal() {
	modalEl.classList.add("open");
}

function closeModal() {
	modalEl.classList.remove("open");
}

// closeBtn.addEventListener("click", closeModal);

function dynamicOpenModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("open");

		const closeBtn = modal.querySelector(".modal-close");
		closeBtn.addEventListener("click", () => {
			dynamicCloseModal(selector);
		});
	}
}

function dynamicCloseModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.remove("open");
	}
}

openModalSecond.addEventListener("click", () => {
	dynamicOpenModal("#sign-up-modal");
});

// ERROR HANDLING
const el = document.querySelector(".form2");

try {
	console.log("try start");
	el.addEventListener("click", (e) => {
		console.log(e);
	});
	console.log("try end");
} catch (error) {
	// ეს ერორი გამოვა იმ შემთხვევაში თუ try- ნაწილში ერორია და იმ ერორის შესახებ ინფორმაციას გამოიტანს
	console.log(error);
} finally {
	// ეს კოდი მაინც შესრულდება, მიუხედავად იმისა ერორი მოხდა თუ არა
	console.log("finally");
}

const el2 = document.querySelector(".form2");

if (el2) {
	el2.addEventListener("click", (e) => {
		console.log(e);
	});
}

console.log("example text");
