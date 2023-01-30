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

let val;

tipBtn.forEach((i) => {
	i.addEventListener("click", () => {
		i.classList.add("selctd");
		val = parseInt(i.value);

		allCheck();
	});
});

function calculatePecerntage(val, tipMoney) {
	if (peopleval !== 0) {
		let ans = val / 100;
		totTip = ans * tipMoney;

		dispTopTip.textContent = parseFloat(totTip.toFixed(2));
	}
}

cust.addEventListener("keyup", (e) => {
	val = parseInt(cust.value);

	allCheck();
});

peopleN.addEventListener("keyup", (e) => {
	peopleval = parseInt(peopleN.value);

	allCheck();
});

function tipPer(peopleval) {
	let personTip = totTip / peopleval;
	dispPerTip.textContent = parseFloat(personTip.toFixed(2));
}

resetBTn.addEventListener("click", () => {
	tipMoney = 0;
	money.value = 0;
	val = 0;
	totTip = 0;
});

function checkPeople() {
	let errMsg = document.querySelector(".err-txt");
	let errInp = document.querySelector(".err-in");

	if (peopleval === 0) {
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
	tipPer(peopleval);
	checkPeople();
}
