const forma = document.getElementById("form");
const name = document.getElementById("pib");
const group = document.getElementById("group");
const phone_number = document.getElementById("phone_number");
const address = document.getElementById("address");
const email = document.getElementById("email");
const pib_info = document.getElementById("pib_info");
const group_info = document.getElementById("group_info");
const phone_number_info = document.getElementById("phone_number_info");
const email_info = document.getElementById("email_info");
const inf_address = document.getElementById("inf_address");

function getpib(input){
	return /^[А-ЯІїЄ|A-Z][а-яіЇЄ|a-z]{1,20}\s[А-ЯЇЄ|A-Z]\.[А-ЯЇЄ|A-Z]\.$/.test(input);
}

function getgroup(input){
	return /^[А-ЯІЇЄ|A-Z]{1,2}\-[0-9]{1,2}$/.test(input);
}

function getphone_number(input){
	return /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(input);
}
function getAddress(input){
	return /^м\.\s[А-ЯІЇЄ][А-ЯІЇЄа-яіїє-]{1,20}$/.test(input);
}

function getemail(input){
	return /^\w+@\w+\.com$/.test(input);
}


function checkValidationForm(){
	var correct = true;
	pib.classList.remove("input-error");
	if(!getpib(pib.value)){
		pib.classList.add("input-error");
		correct = false;
	}
	
	group.classList.remove("input-error");
	if(!getgroup(group.value)){
		group.classList.add("input-error");
		correct = false;
	}
	
	phone_number.classList.remove("input-error");
	if(!getphone_number(phone_number.value)){
		phone_number.classList.add("input-error");
		correct = false;
	}

	address.classList.remove("input-error");
	if(!getAddress(address.value)){
		address.classList.add("input-error");
		correct = false;
	} 

	email.classList.remove("input-error");
	if(!getemail(email.value)){
		email.classList.add("input-error");
		correct = false;
	}

	
	if(correct){
		alert("Все введено вірно");
		pib_info.innerHTML = pib.value;
		group_info.innerHTML = group.value;
		phone_number_info.innerHTML = phone_number.value;
		email_info.innerHTML = address.value;
		inf_address.innerHTML = email.value;
		forma.reset();
	}
	else{
		alert("Неправильне введення. Спробуйте знову");
	}
	correct = true;
}