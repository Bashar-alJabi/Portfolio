/* Loading Page */
const loader = document.querySelector(".loader-container");
const body = document.body;
window.addEventListener("load", () => {
	body.classList.add("loading")
	setTimeout(() => {
		loader.classList.add("loader-hidden");
		body.classList.remove("loading");
		loader.addEventListener("transitionend", () => {
			loader.remove();
		});
	}, 3000);
});

function generateNewAnimation(name, Animation) {
	name.style.animation = Animation;
	setTimeout(() => {
		name.style.animation = "unset";
	}, 1000);
}

const eyes = document.querySelector(".eyes");
setInterval(() => {
	generateNewAnimation(eyes, "eyes 0.5s linear");
}, 3000);

const advice = document.querySelector(".advice");
function randomAdvice() {
	let advices = [
		"Welcome to my pixelated playground, where bits and bytes come to life.",
		"Loading creativity one pixel at a time...",
		"In the meantime, sharpen your curiosity...",
		"In the meantime, sharpen your expectations...",
		"Behind the scenes: Preparing design magic for you.",
		"We're putting the finishing touches on your experience.",
		"Our commitment to professionalism is reflected in every pixel.",
		"Savor the anticipation as we craft your experience.",
		"Polishing pixels for your visual delight...",
		"Creating a symphony of pixels that will soon serenade your senses.",
		"Almost ready to dazzle you!",
		"Mixing colors, pixels, and dreams for your visual delight.",
		"Assembling the bits and bytes...",
		"Loading... because good things take time.",
		"Savor the anticipation; Your portfolio is brewing.",
		"Patience is a virtue, just like a slow-brewed cup.",
		"Sip, relax, and prepare to be enchanted as your portfolio unfolds.",
		"Sip your coffee while we prepare the artistry.",
		"Loading... while you sip your coffee.",
		"Your visit is our coffee break; almost there!",
		"In the meantime, enjoy the warmth of your coffee.",
		"Loading... with the rich aroma of design and coffee.",
		"Sip your coffee slowly, we're preparing something delightful for you.",
		"Like the rich aroma of freshly ground coffee, your visit is brewing.",
		"Sip your coffee, and let us serve you a digital masterpiece.",
		"Your visit is as comforting as a cozy coffee shop on a rainy day.",
		"Almost there, just a few more sips of coffee, and your journey begins.",
		"Loading... like a perfect cup of coffee takes time.",
		"Sip your coffee and let creativity percolate in the meantime.",
		"Roasting ideas while you sip your coffee; your portfolio is on its way.",
	];
	let randomAdvice = advices[Math.floor(Math.random() * advices.length)];
	return randomAdvice;
}
advice.textContent = randomAdvice();
generateNewAnimation(advice, "advice 0.5s linear");
setInterval(() => {
	advice.textContent = randomAdvice();
	generateNewAnimation(advice, "advice 0.5s linear");
}, 2800);

/* Scroll Reval */
ScrollReveal({
	distance: "80px",
	duration: 2000,
	delay: 200,
});
ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".projects-box, .contact .box", { origin: "bottom" });
ScrollReveal().reveal(".about-img, .skills-container", { origin: "left" });
ScrollReveal().reveal(".about-content, .cloud-container", { origin: "right" });
window.addEventListener("load", () => {
	setTimeout(() => {
		ScrollReveal().reveal(".home-content", { origin: "top" });
		ScrollReveal().reveal(".home-img", { origin: "bottom" });
		ScrollReveal().reveal(".home-content h1", { origin: "left" });
		ScrollReveal().reveal(".home-content p", { origin: "right" });
	}, 3000);
});

/* Cursor */
const coords = { x: 0, y: 0 };
const cursor = document.querySelector(".cursor");
const circles = document.querySelectorAll(".cursor .circle");
circles.forEach(function (circle, index) {
	circle.x = 0;
	circle.y = 0;
	circle.style.backgroundColor = "white";
});
window.addEventListener("mousemove", (e) => {
	coords.x = e.clientX;
	coords.y = e.clientY;
});
function animateCircles() {
	let x = coords.x;
	let y = coords.y;
	cursor.style.top = x;
	cursor.style.left = y;
	circles.forEach(function (circle, index) {
		circle.style.left = x - 12 + "px";
		circle.style.top = y - 12 + "px";
		circle.style.scale = (circles.length - index) / circles.length;
		circle.x = x;
		circle.y = y;
		const nextCircle = circles[index + 1] || circles[0];
		x += (nextCircle.x - x) * 0.3;
		y += (nextCircle.y - y) * 0.3;
	});
	requestAnimationFrame(animateCircles);
}
animateCircles();

/* Create Page Scroll Progress */
window.addEventListener("load", () => {
	setTimeout(() => {
		const prog = document.querySelector(".scroller");
		let height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		window.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			prog.style.width = `${(scrollTop / height) * 99}%`;
		});
	}, 3000);
});

/* Toggle Icon Navbar */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
	menuIcon.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");
		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});

	/* Sticky Navbar */
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 50);

	/* remove toggle icon and navbar when click navbar link (scroll) */
	menuIcon.classList.remove("bx-x");
	navbar.classList.remove("active");
};

/* Typed JS */
window.addEventListener("load", () => {
	setTimeout(() => {
		const typed = new Typed(".multiple-text", {
			strings: ["Computer Engineer", "Frontend Developer!"],
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 1000,
			loop: true,
			showCursor: false,
		});
	}, 3000);
});

/* About Background */
const about = document.querySelector(".about");
document.addEventListener("mousemove", (e) => {
	about.style.backgroundPositionX = e.pageX / -4 + "px";
	about.style.backgroundPositionY = e.pageY / -4 + "px";
});

/* Cloud Raining*/
function randomWord() {
	let text = [
		"Next",
		"React",
		"TW",
		"BS",
		"Html",
		"Css",
		"JS",
		"Ts",
		"Pug",
		"Sass",
		"Gulp",
		"Git",
		"UI/UX",
	];
	let letter = text[Math.floor(Math.random() * text.length)];
	return letter;
}
const cloud = document.querySelector(".cloud");
function rain() {
	let e = document.createElement("div");
	e.classList.add("text");
	cloud.appendChild(e);
	e.innerText = randomWord();

	let left = Math.floor(Math.random() * 270);
	let size = Math.floor(Math.random() * 2);
	let duration = Math.random() * 2;
	e.style.left = `${left}px`;
	e.style.fontSize = 0.8 + size + "em";
	e.style.animationDuration = 1 + duration + "s";

	setTimeout(() => {
		cloud.removeChild(e);
	}, 2000);
}
setInterval(() => {
	rain();
}, 500);

/* EmailJs */
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactMsg = document.getElementById("message");
function SendMail() {
	let params = {
		from_name: contactName.value,
		email_id: contactEmail.value,
		message_content: contactMsg.value,
	};
	emailjs
		.send(
			process.env.EMAILJS_SERVICE_ID,
			process.env.EMAILJS_TEMPLATE_ID,
			params
		)
		.then((res) => {
			contactName.value = "";
			contactEmail.value = "";
			contactMsg.value = "";
			Swal.fire({
				icon: "success",
				title: "Your Message Send Successfully!",
				background: "#f6f6f6",
				showConfirmButton: false,
				showCancelButton: false,
				timerProgressBar: true,
				timer: 3000,
			});
		})
		.catch((err) => {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `Something went wrong!, Please check your internet, Error: ${err}`,
				background: "#f6f6f6",
			});
		});
}
const contactBtn = document.querySelector(".btn-contact");
contactBtn.onclick = (e) => {
	e.preventDefault();
	let correctEmail = /\w+@\w+.\w+/gi;
	let resEmail = correctEmail.test(contactEmail.value);
	if (!resEmail) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Please enter correct email address",
			background: "#f6f6f6",
		});
	}
	if (
		contactName.value.trim() === "" ||
		contactEmail.value.trim() === "" ||
		contactMsg.value.trim() === ""
	) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Please fill out all the fields.",
			background: "#f6f6f6",
		});
	}
	if (
		contactName.value.trim() !== "" &&
		contactEmail.value.trim() !== "" &&
		contactMsg.value.trim() !== "" &&
		resEmail
	) {
		SendMail();
	}
};
