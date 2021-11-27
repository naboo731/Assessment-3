console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let imgCompliment = document.querySelector("#rubber-duck-image")
imgCompliment.addEventListener('mouseover', () => {
	alert("Hey there, good looking!")
})