// const timer = document.getElementById("timer");
// const HOURS_TO_EXPIRED = 4;
// const MINUTES_TO_EXPIRED = 51;
// const SECONDS_TO_EXPIRED = 16;

function getTime(time) {
	let hours = Math.floor(time / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(time / 1000 / 60) % 60;
	let seconds = Math.floor(time / 1000) % 60;
	return {
		hours: hours > 9 ? hours : "0" + hours,
		minutes: minutes > 9 ? minutes : "0" + minutes,
		seconds: seconds > 9 ? seconds : "0" + seconds,
	};
}
const nowDate = new Date("2023", "09", "22", "02");
// nowDate.setHours(new Date().getHours() + HOURS_TO_EXPIRED);
// nowDate.setMinutes(new Date().getMinutes() + MINUTES_TO_EXPIRED);
// nowDate.setSeconds(new Date().getSeconds() + SECONDS_TO_EXPIRED);
const endTimer = new Date(nowDate).getTime();

function startTimer() {
	let x = setInterval(function () {
		// Getting current time in required format
		const currentTime = new Date().getTime();
		const endTime = endTimer;

		// Calculating the difference
		let remaining = endTime - currentTime;

		let time = getTime(remaining);

		// Output the remaining time
		document.getElementById("timer").innerHTML =
			time.hours + ":" + time.minutes + ":" + time.seconds;

		// Output for over time
		if (remaining < 0) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = "EXPIRED";
		}
	}, 1000);
}
startTimer();

//rating

const stars = document.querySelectorAll(".stars svg");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
	// Add an event listener that runs a function when the "click" event is triggered
	star.addEventListener("click", () => {
		// Loop through the "stars" NodeList Again
		stars.forEach((star, index2) => {
			// Add the "active" class to the clicked star and any stars with a lower index
			// and remove the "active" class from any stars with a higher index
			index1 >= index2
				? star.classList.add("active")
				: star.classList.remove("active");
		});
	});
});

//params

const color = document.getElementById("color");
const size = document.getElementById("size");
const colorDropdown = document.getElementById("color-param");
const sizeDropdown = document.getElementById("size-param");
const colorOptions = document.querySelectorAll(".color-option");
const sizeOptions = document.querySelectorAll(".size-option");
const colorArrow = color.querySelector("span").querySelector("img");
const sizeArrow = size.querySelector("span").querySelector("img");

color.addEventListener("click", (e) => {
	colorDropdown.classList.toggle("active");
	colorArrow.classList.toggle("active");
});

size.addEventListener("click", (e) => {
	sizeDropdown.classList.toggle("active");
	sizeArrow.classList.toggle("active");
});

colorOptions.forEach((option) => {
	option.addEventListener("click", (e) => {
		color.querySelector("p").innerHTML = option.innerHTML;
		colorDropdown.classList.remove("active");
		colorArrow.classList.remove("active");
	});
});

sizeOptions.forEach((option) => {
	option.addEventListener("click", (e) => {
		size.querySelector("p").innerHTML = option.innerHTML;
		sizeDropdown.classList.remove("active");
		sizeArrow.classList.remove("active");
	});
});
