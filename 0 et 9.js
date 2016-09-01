/* Ici je crée deux variables , une pour choisir aléatoirement un chiffre entre 0 et 9 par l'ordinateur et la suivante pour proposer le jeux*/
var solution = Math.floor(Math.random() * 9) + 1;
var nombre = Number(prompt("Devine un chiffre entre 0 et 9."));
/* Ensuite je fais une fonction qui prend en condition le fait que si le chiffre est trop grand, il l'indique et propose de recommencer de manière très amicale sinon il affiche la réussite du joueur et ce finis à cet instant*/
function plus_grand() {
	if (nombre > solution) {
		alert(nombre + " est trop grand");
		nombre = Number(prompt("Tes nul , recommence !"));
		plus_grand();
	}
	else if (nombre == solution) {
		alert("Bien joué !! La solution est : " + solution);
	}
};
plus_grand();
/* Et cette fonction est identique à celle du dessus mais agis si le chiffre est trop petit*/
function plus_petit(){
	if (nombre < solution) {
		alert(nombre + " est trop petit");
		nombre = Number(prompt("Tes nul , recommence !"));
		plus_petit();
	}
	else if (nombre == solution) {
		alert("Bien joué !! La solution est : " + solution);
	}
};
plus_petit();  