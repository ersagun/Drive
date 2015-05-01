/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
$(".btn").on('click', function () {

    checkCart()

});
// simpleCart.grandTotal()
//simpleCart.total();

function checkCart() {
    var sum = simpleCart.quantity();
    $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart ' + sum + ' items <span class="caret"></span>')

    if (simpleCart.items().length == 0) {
        $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart Empty<span class="caret"></span>');

    } else {
        $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart ' + sum + ' items <span class="caret"></span>')
    }


}**/



function showPanier() {
    $.ajax({
         url: "controller/Controller.php",
        type: "Post",
        data: {a: 'showpanier'},
        dataType: "json",
        error: function () {
            console.log("erreur !");
        },
        success: function (r) {
            //console.log(tabProduit);
            $("#center").empty();
            var total=0;
            var debut = "";
            debut += "<div class=\"container\">";
            debut += "    <nav class=\"navbar navbar-default \" role=\"navigation\">";
            debut += "	<div class=\"container\">";
            debut += "	  <div class=\"navbar-header\">";
            debut += "		<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".derma\">";
            debut += "		  <span class=\"sr-only\">Toggle navigation<\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		<\/button>";
            debut += "		<a class=\"navbar-brand\" href=\"#\">Retour<\/a>";
            debut += "      ";
            debut += "	  <\/div>";
            debut += "	  <div class=\"collapse navbar-collapse derma\">";
            debut += "		<ul class=\"nav navbar-nav\">";
            debut += "		  <li class=\"dropdown menu-large\">";
            debut += "			<a href=\"#\" class=\"dropdown-toggle\" id=\"dLabel\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-shopping-cart\"><\/span> Panier <b class=\"caret\"><\/b><\/a>";
            debut += "			<ul class=\"dropdown-menu megamenu\">";
            debut += "			      <div class=\"col-sm-12 clearfix\">";
        
            var milieu="";
            for (i = 0; i < r.length; i++) {
               milieu+="<div class=\"simpleCart_items\"><a href=\"#panier\" onclick=\"supprimerIdPanier("+r[i].produit.id+")\" class=\"simpleCart_empty btn btn-lg btn-danger\" style=\"font-size:8px;width:8px;height:10px;\">-<\/a>&nbsp;&nbsp;&nbsp;Produit[ nom :"+r[i].produit.nom+",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; quantite:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+r[i].quantite+", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;categorie:&nbsp;&nbsp;&nbsp;"+r[i].produit.categorie.categorie_nom+",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prix:"+r[i].produit.prix+"]<\/div><br>";   
               total=total+(r[i].produit.prix*r[i].quantite);
            }
            var fin = "";  
            fin += "                      <ul id=\"cart\" class='clearfix'><\/ul><li class=\"divider\"><\/li>";
            fin += "                        	<div class=\"btn-group pull-right\">";
            fin += "                                    <p class=\"simpleCart_empty btn btn-lg btn-danger\">Total : "+total+"<\/p>";
            fin += "                                         <a href=\"#mesCommandes\" class=\"simpleCart_checkout btn btn-lg btn-success\" >Mes commandes<\/a>";
            fin += "				<a href=\"#panier\" class=\"simpleCart_empty btn btn-lg btn-danger\" onclick=\"supprimePanier()\">Supprimer tout<\/a>";
            fin += "                            <p class=\"simpleCart_empty btn btn-lg btn-success\" onclick='passerCommande("+total+")'>Suivant :<\/p>";
            fin += "				<\/div>";
            fin += "                    <\/div>";
            fin += "			<\/ul>";
            fin += "		  <\/li>";
            fin += "		<\/ul>";
            fin += "		<\/div><!-- \/.navbar-collapse --> ";
            fin += "	<\/div>	";
            fin += "<\/nav>";
            fin += "<div class=\"row\">";
            fin += "<\/div>";
            fin += "      <ul id=\"shoppingbasket\"><\/ul> ";
            fin += "         <\/div>";

            final=debut+milieu+fin;
            $("#center").append(final);
        }
    });
}


function showPanierId(id) {
    $.ajax({
         url: "controller/Controller.php",
        type: "Post",
        data: {a: 'showpanierid',id:id},
        dataType: "json",
        error: function () {
            console.log("erreur !");
        },
        success: function (r) {
            //console.log(tabProduit);
            $("#center").empty();
            var total=0;
            var debut = "";
            debut += "<div class=\"container\">";
            debut += "    <nav class=\"navbar navbar-default \" role=\"navigation\">";
            debut += "	<div class=\"container\">";
            debut += "	  <div class=\"navbar-header\">";
            debut += "		<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".derma\">";
            debut += "		  <span class=\"sr-only\">Toggle navigation<\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		  <span class=\"icon-bar\"><\/span>";
            debut += "		<\/button>";
            debut += "		<a class=\"navbar-brand\" href=\"#\">Retour<\/a>";
            debut += "      ";
            debut += "	  <\/div>";
            debut += "	  <div class=\"collapse navbar-collapse derma\">";
            debut += "		<ul class=\"nav navbar-nav\">";
            debut += "		  <li class=\"dropdown menu-large\">";
            debut += "			<a href=\"#\" class=\"dropdown-toggle\" id=\"dLabel\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-shopping-cart\"><\/span> Panier <b class=\"caret\"><\/b><\/a>";
            debut += "			<ul class=\"dropdown-menu megamenu\">";
            debut += "			      <div class=\"col-sm-12 clearfix\">";
        
            var milieu="";
            for (i = 0; i < r.length; i++) {
               milieu+="<div class=\"simpleCart_items\"><a href=\"#panier\" onclick=\"supprimerIdPanier("+r[i].produit.id+")\" class=\"simpleCart_empty btn btn-lg btn-danger\" style=\"font-size:8px;width:8px;height:10px;\">-<\/a>&nbsp;&nbsp;&nbsp;Produit[ nom :"+r[i].produit.nom+",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; quantite:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+r[i].quantite+", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;categorie:&nbsp;&nbsp;&nbsp;"+r[i].produit.categorie.categorie_nom+",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prix:"+r[i].produit.prix+"]<\/div><br>";   
               total=total+(r[i].produit.prix*r[i].quantite);
            }
            var fin = "";  
            fin += "                      <ul id=\"cart\" class='clearfix'><\/ul><li class=\"divider\"><\/li>";
            fin += "                        	<div class=\"btn-group pull-right\">";
            fin += "				<a href=\"#mesCommandes\" class=\"simpleCart_checkout btn btn-lg btn-success\">Retourne<\/a>";
            fin += "				<\/div>";
            fin += "                    <\/div>";
            fin += "			<\/ul>";
            fin += "		  <\/li>";
            fin += "		<\/ul>";
            fin += "		<\/div><!-- \/.navbar-collapse --> ";
            fin += "	<\/div>	";
            fin += "<\/nav>";
            fin += "<div class=\"row\">";
            fin += "<\/div>";
            fin += "      <ul id=\"shoppingbasket\"><\/ul> ";
            fin += "         <\/div>";

            final=debut+milieu+fin;
            $("#center").append(final);
        }
    });
}
/**
function passeCommandeForm() {
    $.get("controller/Controller.php", {a: "cmdForm", }).done(function (data) {
        $("#center").html(data);
        $('#datetimepicker2').datetimepicker({
                    locale: 'ru'
                });
    });
}**/



function ajouterPanier(val){
    if(!verifyConnexion()){
        alert("Veuillez vous connecter pour faires des achats merci.");
        return;
    }
    
    cut=$("#qte-for"+val).val();
    console.log(cut);
$.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: {a:'ajouterPanier', like:tabProduit[val].id, qte:cut},
        dataType:"text",
        error: function() { 
            console.log("erreur adjonction produit au session"); 
        },
        success: function(retour){
            console.log(retour);
            //location.hash="#panier";
    }}); 
}

function supprimerIdPanier(val){
    if(!verifyConnexion()){
        alert("Veuillez vous connecter pour faires des achats merci.");
        return;
    }
   
$.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: {a:'supprimerIdPanier', like:val},
        dataType:"text",
        error: function() { 
            console.log("erreur adjonction produit au session"); 
        },
        success: function(retour){
            console.log(retour);
            //location.hash="#panier";
            location.reload();
    }}); 
}

function supprimePanier(){
    if(!verifyConnexion()){
        alert("Veuillez vous connecter pour faires des achats merci.");
        return;
    }
   
$.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: {a:'supprimerPanier'},
        dataType:"text",
        error: function() { 
            console.log("erreur adjonction produit au session"); 
        },
        success: function(retour){
            console.log(retour);
            //location.hash="#panier";
            location.reload();
    }}); 
}



