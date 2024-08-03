const shoeCards = document.getElementById('shoeCards');
const shoeCollectionImage = document.getElementById('shoeCollectionImage');

//cycle to iterate through each of the shoes cards
for (let i=0; i < shoeCards.children.length; i++) {
	//adding a function to change the appereance of the shoe card border when it's clicked 
	shoeCards.children[i].addEventListener('click', () => {
		shoeCollectionImage.src = shoeCards.children[i].children[0].children[0].src;
		shoeCards.children[0].classList.remove('border-coral-red');
		shoeCards.children[1].classList.remove('border-coral-red');
		shoeCards.children[2].classList.remove('border-coral-red');
		shoeCards.children[i].classList.add('border-coral-red');		
	});
}