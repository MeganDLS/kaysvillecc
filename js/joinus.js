// Join Us Form

// Full name 4 characters or less
let re = "[A-Za-z ]{4,}";
///^[a-z ,.'-]+$/i;


// Storm style
function adjustRange(range) {
	document.getElementById("rangevalue").innerHTML = range;
}

adjustRange(5);

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectregion');
	s.style.display = "block";
	s.textContent = sel.value;

}