function verif_form3() {
if (document.formulaire.pass.value == "")
	{
		alert(" Le champ est vide");
		return false;
	}
	else
	{
		alert("Vous avez tapé: +document.formulaire.pass.input.value");
		return false;
	}
	}
	function verif_form2()
{
	if (( document.form.tsunami.checked)==true && ( document.form.ouragan.checked)==true && ( document.form.anniversaire.checked)==false && ( document.form.séisme.checked)==true)
	{
		alert("Ce sont les bons choix! Vous pouvez continuer.");
		return true;
	}
	else
	{
		alert("Désolé, vous n'avez pas entré les bonnes réponses. Veuillez réessayez encore");
		return false;
	}
}
function verif_form() {
	if (document.formulaire.Nom.value == "") 
	{
		alert("Le champ Nom est vide");
		return false;
	}
	if (document.formulaire.prénom.value == "") 
	{
		alert("Le champ Prénom est vide");
		return false;
}
if (document.formulaire.login.value == "")
	{
		alert(" Login: Au moins 6 caractères!");
		return false;
		}
var pseudo = prompt('Entrez votre pseudo :');
var age = prompt('Entrez votre age :');
age = parseInt(age);
if(age<20){
alert('Désolé '+pseudo+'Vous n\'êtes pas en âge de postuler ou vous n\'avez pas respecté les instructions');
return false;
}
else{
alert('Salut '+pseudo+'Vous êtes en âge de postuler. Veuillez continuer');
return true;
}
		alert(" Cher auteur, votre compte a été activé avec succès. Vous recevrez bientôt un mail ou un message de validation de votre compte. Merci d'avoir choisi La plume.");
return true;
	}
	