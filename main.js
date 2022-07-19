	menuListArray = ["Pizza1",
                        "Pizza2",
                        "Pizza3",
                        "Pizza4",
                        "Pizza5",
                        "Pizza6"];

    function addItem(){
        var htmldata;
		var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
        var item=document.getElementById("addItem").value;
        Colocar itens em ordem alfabética //menuListArray.sort(); 
        htmldata=""
        for(var i=0;i<menuListArray.length;i++){
            htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
        }
         document.getElementById("displayAddedMenu").innerHTML = htmldata;
         
    }
    function getMenu(){
        var nomedapizza="";
        menuListArray.sort();
        for(var i=0;i<menuListArray.length;i++){
            nomedapizza=nomedapizza+ menuListArray[i] + '<br>'
        }
        código para mostrar o conteúdo html da variável "nomedapizza" no displaymenu  // document.getElementById("displayMenu").innerHTML = nomedapizza; 
    }

function addTop(){
	var item=document.getElementById("addItem").value;
     código para adicionar nova pizza no Menu // menuListArray.push(item); 
	addItem();
}