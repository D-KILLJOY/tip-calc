const money = document.querySelector(".bill");
const peopleN = document.querySelector(".people-in");
const cust = document.querySelector(".cust");
const tipBtn = document.querySelectorAll(".fixd");
const resetBTn = document.querySelector(".reset-btn");

const dispTopTip = document.querySelector(".tip-amt-tot");
const dispPerTip = document.querySelector(".tip-amt-per");

let tipMoney;
money.value;
let totTip = 0;
let peopleval = 0;

let totTipD = "0.00";
let perTipD = "0.00";

displayTip();

let val;

tipBtn.forEach((i) => {
	i.addEventListener("click", () => {
		tipBtn.forEach((i) => {
			i.classList.remove("selctd");
		});

		i.classList.add("selctd");
		cust.value = "";

		val = parseInt(i.value);
		allCheck();
	});
});

function calculatePecerntage(val, tipMoney) {
	if (peopleval !== 0) {
		let ans = val / 100;
		totTip = ans * tipMoney;

		totTipD = parseFloat(totTip.toFixed(2));
		displayTip();
	}
}

cust.addEventListener("keyup", (e) => {
	val = parseInt(cust.value);

	allCheck();
});

cust.addEventListener("click", () => {
	tipBtn.forEach((i) => {
		i.classList.remove("selctd");
	});
});

peopleN.addEventListener("keyup", (e) => {
	if (e.key === "Backspace") {
		checkPeople();
	} else if (peopleN.value === "0") {
		checkPeople();
	} else {
		peopleval = parseInt(peopleN.value);

		allCheck();
		tipPer(peopleval);
	}
});

function tipPer(peopleval) {
	let personTip = totTip / peopleval;
	perTipD = parseFloat(personTip.toFixed(2));
	displayTip();
}

resetBTn.addEventListener("click", () => {
	tipMoney = 0;
	money.value = "";
	peopleN.value = "";

	val = 0;
	totTip = 0;
	totTipD = "0.00";
	perTipD = "0.00";

	tipBtn.forEach((i) => {
		i.classList.remove("selctd");
	});

	displayTip();
});

function checkPeople() {
	let errMsg = document.querySelector(".err-txt");
	let errInp = document.querySelector(".err-in");

	if (peopleval === 0 || peopleN.value === "" || peopleN.value === "0") {
		errMsg.classList.add("show-err");
		errInp.classList.add("zero");
	} else {
		errMsg.classList.remove("show-err");
		errInp.classList.remove("zero");
	}
}

function allCheck() {
	tipMoney = parseInt(money.value);

	calculatePecerntage(val, tipMoney);

	checkPeople();
}

function displayTip() {
	dispTopTip.textContent = totTipD;
	dispPerTip.textContent = perTipD;
}
