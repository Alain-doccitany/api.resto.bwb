/*127.0.0.1. http://administration.restologue.bwb
127.0.0.1 http://api.resto.bwb
127.0.0.1 http///api.users.bwb
 <VirtualHost *:8080
	DocumentRoot /var/www/html/serveurweb/
	ServerName http://administration.restologue.bwb
 */
/*creat of variable for project*/

/* global listeDeMenu */

//Import du framework express

var express = require("express");
var bodyparser = require("body-parser");


//Creation d'un objet express

var application = express();

console.log("Bienvenue sur votre systeme de gestion");

application.listen(8081,"127.0.0.1");


application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended : true}));


application.get('/',

	function(request,response){

		response.send("Test connexions Test");

	}

);



//return liste des menus

application.get('/listeDeMenus',

	function(request,response){

		response.setHeader('Access-Control-Allow-Origin','*');

		//Chainage reponse du serveur: status puis reponse

		response.status(200).json(listeDeMenu);

	}

);


