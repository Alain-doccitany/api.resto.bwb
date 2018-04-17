/*127.0.0.1. http://administration.restologue.bwb
127.0.0.1 http://api.resto.bwb
127.0.0.1 http///api.users.bwb
 <VirtualHost *:8080
	DocumentRoot /var/www/html/serveurweb/
	ServerName http://administration.restologue.bwb
 */
/*creat of variable for project*/

/* global listeDeCarte, response, menus, menu, listeDecarte */

//Import du framework express

var express = require("express");
var bodyparser = require("body-parser");
var listeDeCarte = [];

//Creation d'un objet express

var application = express();

console.log("Bienvenue sur votre systeme de gestion");

application.listen(8081,"127.0.0.1");


application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended : true}));

var cartes = listeDeCarte;

// Test connexion Test //ok
application.get('/',

	function(request,response){

		response.send("Test connexions Test");

	}

);



//return * cartes / postman ok

application.get('/cartes/get/',

	function(request,response){

		response.setHeader('Access-Control-Allow-Origin','*');

		//Chainage reponse du serveur: status puis reponse

		response.status(200).json(listeDeCarte);
                response.status(404).send(listeDeCarte);

	}
                                       
);


//return * menus /postman ok

application.get('/menu/get/',

	function(request,response){

		response.setHeader('Access-Control-Allow-Origin','*');

		//Chainage reponse du serveur: status puis reponse

		response.status(200).json(listeDeCarte);
                response.status(404).send(listeDeCarte);

	}
                                       
);

//ajout une carte et return son id /postman ok
application.post("/cartes/add",function(req,res){
    var carte = req.body;
    carte ['id'] = generateID();
    carte ['menus'] = [];
    listeDeCarte.push(req.body);
    res.status(200).json(req.body);

});





function getCarte(id){

}
//crée un id 
function generateID(){
    var idMax = 0;
    for(var i in listeDeCarte){
        idMax = (listeDeCarte[i].id > idMax)?listeDeCarte[i].id : idMax;
}

        return idMax +1;
}














//return une carte par son id
application.get('/cartes/:id/get',

	function(request,response){

		response.setHeader('Access-Control-Allow-Origin','*');

	
                var idCartes = parseInt(request.params.id);

		var carte;

	
                    for(var i = 0 ; i < listeDeCarte.length ; i++){

			if(listeDeCarte[i].id === idCartes){

				film = listeDeCarte[i];

			}
                }
        //Chainage reponse du serveur: status puis reponse

		response.status(200).json(carte);

		response.status(404).send("Le menu n'existe pas ou n'est pas référencé");
                }
);
//delete les menu par leur id
application.delete("/carte/menu/:id",function(req,res){
    var idDuMenu = req.params.id;
    idDuMenu = parseInt(idDuMenu);

    for(var i=0; i<listeDeCarte.length;i++){
        if(idDuMenu === listeDeCarte[i].id){
            listeDeCarte.splice(idDuMenu,1);
            response.setHeader('Content-Type','application/json');
}
}
response.status(200).json(listeDeCarte);
});





		
