/**
 * 
 * @returns {undefined}
 * Function show all products
 */


$(document).ready(function(){
    $( "#searchCrit" ).on( "change", function() {
     getTri($( "#searchCrit" ).val());
    })
});




function showProducts(){
    $.ajax({ 
        type: "GET",
        url: "controller/Controller.php", 
        data: "a=products",
        dataType:"json",
        error: function() { 
            console.log("erreur affichage de produit !"); 
        },
        success: function(r){
       
            $("#center").empty();
             $("#center").append('<legend style="color: graytext; font-size:20pt;\">Nos produits </legend>');

            $("#center").append(' <div class="row">');
                console.log(r); 
            for(i=0;i<r.length;i++){
      
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
}



/**
 * 
 * @param {type} val
 * @returns {undefined}
 * This function charge the sound in the audio balise and play it. Function is called
 * when user click on a listen button
 */


function searchBar(val){
    demande=$("#searchCrit").val();
    if(demande=="cat"){
        $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=searchCat&like="+val+"",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
    }
    if(demande=="nom"){
        $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=search&like="+val+"",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
    }
    if(demande=="tri-cro"){
        $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=searchTriCro&like="+val+"",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                 milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
    }
    if(demande=="tri-decro"){
       $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=searchTriDecro&like="+val+"",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
    }
    }
    function getTri(demande){
        if(demande=="tri-cro"){
            $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=searchTriCroDeb",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
        }
        if(demande=="tri-decro"){
              $.ajax({ 
        type: "GET", 
        url: "controller/Controller.php", 
        data: "a=searchTriDecroDeb",
        dataType:"json",
        error: function() { 
            console.log("erreur sb !"); 
        },
        success: function(r){
            $("#center").empty();

         $("#center").append(' <div class="row">');
                
            for(i=0;i<r.length;i++){
                location.hash="#searchProduct";
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].nom+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">"+r[i].prix+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
        }
          if(demande=="prom"){
              produitPromotion();
        
    }
    }
    
function produitPromotion(){
    $.ajax({ 
        type: "GET",
        url: "controller/Controller.php", 
        data: "a=produitPromotion",
        dataType:"json",
        error: function() { 
            console.log("erreur affichage de produit !"); 
        },
        success: function(r){
       
            $("#center").empty();
             $("#center").append('<legend style="color: graytext; font-size:20pt;\">Nos produits </legend>');

            $("#center").append(' <div class="row">');
                console.log(r); 
            for(i=0;i<r.length;i++){
      
                var milieu = "";
                milieu += "<div class=\"col-md-3 simpleCart_shelfItem\" style=\"margin-bottom:2%;\">   ";
                milieu += "<div class=\"panel panel-default\">";
                milieu += "     <div class=\"panel-heading item_name\">"+r[i].produit.nom+" Promotion:"+r[i].promotion.montant+"<\/div>";
                milieu += "  <div class=\"panel-body\">";
                milieu += " <img src=\"view/"+r[i].produit.img_url+"\" class=\"img-thumbnail img-responsive item_thumb\" style=\"width:100%;heigth:80%;min-height:250px; max-height:250px;\"><br> ";
                milieu += "  <\/div>";
                vall=r[i].produit.prix-r[i].promotion.montant;
                milieu += "  <div class=\"panel-footer\"> <p class=\"item_price\">Ancien :"+r[i].produit.prix+" Nouveau : "+vall+"<\/p><span class='btn btn-danger btn-md item_add' onclick=ajouterPanier("+r[i].produit.id+")>ADD<\/span> ";
                milieu += "      <label>Qty: <input id=\"qte-for"+r[i].produit.id+"\" type=\"text\" value=\"1\"><\/label>";
                milieu += "     <\/div>";
                milieu += "<\/div>";
                milieu += "<\/div>";
                
                   $("#center").append(milieu);
            }
            
               $("#center").append('</div>');
        }
    }); 
}