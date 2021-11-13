<!DOCTYPE html>
<html>
<head>
	<script src="java2.js">
</script>
<meta charset="utf-8"/>
<link rel="stylesheet" href="formes 2.css"/>
<title>La plume – Le site web</title>
</head>
<body>
	<nav>
<a href="accueil 2.html">Accueil</a>
<a href="formation 2.html">Formation</a>
<a href="mon compte 2.html">Mon compte</a>
</nav>
<h1>Cher <?php echo $_GET['Nom'];?></h1>
<p>Votre compte a été activé avec succès. Vous pouvez à présent vous connecter</p>
<p><a href="Se connecter"> Se connecter</a></p>
</body>
</html>