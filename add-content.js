/*var today = new Date();
var hournow = today.gethours();
var greeting;

if (hournow > 18)  { 
    greeting = 'good evening!';

}
else if (hournow > 12) {
    greeting = 'good afternoon!';
}
else if (hournow > 0) {
    greeting = 'good morning!';
}
else {
    greeting = 'welcome!';
}

document.write(`<h3>` + greeting + `<h3>`); 

*/
var showorder = function(){  

    // input
    
    var userorder = prompt("what do you like to order?");
    var orderimage="";
    
    // processing
    while (userorder !=="house" && userorder !== "hotel"){
        userorder = prompt("please enter house or hotel "); 
    
    }
    var numOfImg = prompt("What is number of Images?");
    for(var i=0;i<numOfImg;i++){
    
        if (userorder === "hotel"){ 
            orderimage +='<img src="images/hotel.png">';
        }
        else if (userorder=== "house"){  
            orderimage += '<img src = "images/house.png">';
        }
    }
    return orderimage ;
    }
    
    document.write('<p>'+showorder()+'</p>');
        
    
    
    