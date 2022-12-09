const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');



form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('cc', veggieSelect.value);
});

const formData = {};
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
	const {name, type, value, cheched} = target;
	input.addEventListener('input', ({target}) => {
		formData[name] = type === 'checkbox' ? cheched : value;
	})
}
// creditCardInput.addEventListener('input', e => {
// 	console.log('cc changed', e);
// 	formData['cc'] = e.target.value; 
// })

// veggieSelect.addEventListener('input', e => {
// 	console.log('veggie select', e);
// 	formData['veggie'] = e.target.value; 
// })

// termsCheckbox.addEventListener('input', e => {
// 	console.log('checkbox', e);
// 	formData['agreeToTerms'] = e.target.checked; 
// })

