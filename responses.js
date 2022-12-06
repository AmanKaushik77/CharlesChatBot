var productType = 0;            // object identifier
var budgetType = 0;             // keeps track of the users budger (1 being low, x number being high)
var count = 0;                  // keeps track of how many convos have been made
var budget;
const ptKeys = ["watch", "laptop", "phone", "iphone", "tablet", "ipad", "pc", "desktop", "computer"];
const sizeKeys = ["x-small", "small", "medium", "x-large", "large"];


function getBotResponse(input){     // Charles, hard responses that will be send to back to the app.js file
    input = input.toLowerCase();
    if(input == "hello" || input == "hi" || input == "hey" || input == "hello " || input == "hi " || input == "hey " ){

        
        return greetings(count);

    }
    if (input == "info" || input == "info "){ // convo 3, idenfying the size the user wants and}
        return moreInfo(productType);
    }
   
   
    input = getKey(input);
    if (count > 1 && (input == "info" || input == "info ")){
        return moreInfo(productType, count);
    }else{
        errorResponse(input);
    }


    // type of product
    if(count == 0){    // convo 1, identifying product type form user  
        count++;
        return convoOne(input); 
    }
    
    if (count == 1){    // convo 2, identifying budgetType from user   
        var budget = parseInt(input);
        count ++;
        return convoTwo(productType, budget);
    }
    
    if(count == 2){ // convo 2, idenfying the size the user wants and recomend the ideal product 
        count++;
        return convoThree(productType, budgetType, input);
    }
    
}
function getKey(sen) {
    
    if(count == 0 ){
        for(var i = 0; i < ptKeys.length; i++){
            if(sen.includes(ptKeys[i])){
                keyword = ptKeys[i];
                return ptKeys[i];
            }
        }
    }else if (count == 2){
        for(var i=0; i<sizeKeys.length; i++){
            if(sen.includes(sizeKeys[i])){
                return sizeKeys[i];
            }
        }
    }else if(count == 1){
        return sen;
    }

}

function convoOne(input){
    if(input == "watch"){
        productType = 1;
        return "you chose watch, what is your budget?";
    }else if (input == "laptop"){
        productType = 2;
        return "you chose laptop, what is your budget?";
    }else if (input == "phone" || input == "phones" || input == "iphone"){
        productType = 3;
        return "you chose phone, what is your budget?";
    }else if (input == "tablet" || input == "ipad"){
        productType = 4;
        return "you chose tablet, what is your budget?";
    }else if (input == "desktop" || input == "pc" || input == "computer"){
        productType = 5;
        return ("You chose " + input + ", what is your budget?");
    }else{
        count = 0;
        return errorResponse(input);
    }
}


function convoTwo(productType, budget){
    if (productType == 1){
        if(budget < 330){
            count = 1;
            return "sorry nothing fits your budget, try again";
        }else if (budget >= 330 && budget < 660){
            budgetType = 1;
            return "The Apple Watch SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(budget >= 660 && budget <1099){
            return "The Apple Watch Series 8 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if (budget >= 1099){
            return "The Apple Watch Ultra is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 1;
            return errorResponse(input);
        }
    }
    // budget for laptop 
    if (productType == 2){
        if(budget < 1300){
            count = 1;
            return "sorry nothing fits your budget, try again";
        }else if(budget >= 1300 && budget < 1500){
            return "The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(budget >= 1500 && budget < 2500){
            budgetType =  1;
            return "Got it! what size would you prefer (small or large)?";
        }else if (budget >= 2500 && budget < 3200){
            budgetType = 2;
            return "Got it! what size would you prefer (small or large)?";
        }else if (budget >= 3200 ){
            budgetType = 3;
            return "Got it! what size would you prefer (small or large)?";
        }else{
            count = 1;
            return errorResponse(input);
        }
    }
    // Budget for Phone 
    if (productType == 3){
        if(budget < 700){
            count = 1;
            return "sorry nothing fits your budget, try again";
        }else if(budget >= 700 && budget < 900){
            budgetType = 1;
            return "Got it! what size would you prefer (small, medium, large)?";
        }else if (budget >= 900 && budget < 1000){
            budgetType = 2;
            return "Got it! what size would you prefer (small, medium, large)?";
        }else if (budget >= 1000 && budget < 1300){
            budgetType = 3;
            return "Got it! what size would you prefer (x-small, small, medium, large)?";
        }else if (budget >= 1300 ){
            budgetType = 4;
            return "Got it! what size would you prefer (x-small, small, medium, large)?";
        }else{
            count = 1;
            return errorResponse(input);
        }
    }
    //Budget for tablet 
    if (productType == 4){
        if(budget < 450){
            count = 1;
            return "sorry nothing fits your budget, try again";
        }else if(budget >= 450 && budget < 680){
            budgetType = 1;
            return "Got it! what size would you prefer (small or large)?";
        }else if(budget >= 680 && budget < 1100){
            budgetType = 2;
            return "Got it! what size would you prefer (small or large)?";
        }else if (budget >=1100 ){
            budgetType = 3;
            return "Got it! what size would you prefer (small, medium, large)?";
        }else{
            count = 1;
            return errorResponse(input);
        }
    }
    if (productType == 5){
        if(budget < 900){
            count = 1;
            return "sorry nothing fits your budget, try again";
        }else if(budget >= 900 && budget < 1600){
            budgetType = 1;
            return "The Mac Mini which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(budget >= 1600 && budget < 2500){
            budgetType = 2;
            return "Got it! what size would you prefer (small or medium)?";
        }else if (budget >= 2500 && budget < 8200){
            budgetType = 3;
            return "Got it! what size would you prefer (small, medium, large)?";
        }
        else if (budget >= 8200){
            budgetType = 4;
            return "Got it! what size would you prefer (small, medium, large, or x-large)?";
        }else{
            count = 1;
            return errorResponse(input);
        }
    }
}

function convoThree(productType, budgetType, input){
    // recomendations for laptop
    if(productType == 2 && budgetType == 1){
        if(input == "small"){
            return "The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(input == "large"){
            return "The MacBook Air (M2, 2022) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website." 
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if (productType == 2 && budgetType == 2){
        if(input == "small"){
            return "The MacBook Air (M2, 2022) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(input == "large"){
            return "The MacBook Pro (2021) 14-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    } else if(productType == 2 && budgetType == 3){
        if(input == "small"){
            return "The MacBook Pro (2021) 14-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(input == "large"){
            return "The MacBook Pro (2021) 16-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }
    // recomendations for phones
    if(productType == 3 && budgetType == 1){
        if(input == "small"){
            return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "medium"){
            return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "large"){
            return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if (productType == 3 && budgetType == 2){
        if(input == "small"){
            return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "medium"){
            return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "large"){
            return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if(productType == 3 && budgetType == 3){
        if (input == "x-small"){
            return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "small"){
            return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "medium"){
            return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
        }else if(input == "large"){
            return "The IPhone 14 plus is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if(productType == 3 && budgetType == 4){
        if (input == "x-small"){
            return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "small"){
            return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "medium"){
            return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
        }else if(input == "large"){
            return " Both the IPhone 14 and IPhone 14 Pro Max fit this screen size but the IPhone 14 Pro Max is $300 more than the IPhone 14 Plus. A specification comparison can be made on the Apple website to list every one of their differences.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }
    // recommendations for tablets
    if(productType == 4 && budgetType == 1){
        return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
    }else if(productType == 4 && budgetType == 2){
        if(input == "small"){
            return "The IPad mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if (input == "large"){
            return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if(productType == 4 && budgetType == 3){
        if(input == "small"){
            return "The IPad mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."; 
        }else if (input == "medium"){
            return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
        }else if (input == "large"){
            return "The IPad Pro which comes in the listed sizes is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }
    if(productType == 5 && budgetType == 2){
        if(input == "small"){
            return "The Mac Mini which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "medium"){
            return "The iMac which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }else if (productType == 5 && budgetType == 3){
        if(input == "small"){
            return ":The Mac Mini which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(input == "medium"){
            return "The iMac which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "large"){
            return "The Mac Studio which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    } else if(productType == 5 && budgetType == 4){
        if(input == "small"){
            return ":The Mac Mini which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
        }else if(input == "medium"){
            return "The iMac which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "large"){
            return "The Mac Studio which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else if(input == "x-large"){
            return "The Mac Pro which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
        }else{
            count = 2;
            return errorResponse(input);
        }
    }
}

function errorResponse(input){
    var errormsg = ["Sorry, didn't seem to understand, please try again :)", "I didnt understand, please try again", "Not sure, could you try again please", "I can't help you with that, please try again", "My knowledge is still expanding, please try again"]
    var ran = Math.round(Math.random() *errormsg.length);
        return errormsg[ran];
    
}

function greetings(counter){
    if(counter === 0){ 
        return "Hello! I am here to assist you in picking your ideal Apple product! YAYYY :D! We can start off by selecting the type of Apple product you wish to buy";
    }else if(counter === 1){
        return "Hello again! Once we get your budget I can narrow down options for your ideal product! Whats your max budget?";
    }else if(counter === 2){
        return "Hello again my friend! Once we get your ideal device size I can narrow down options for your ideal product! Whats your ideal size for this device?";
    }
}

function moreInfo( productType){
    var request = require('request');
    var query ;
    if(productType ==1 ){
        query = "apple watch";
    }else if(productType == 2){
        query = "macbook";
    }else if(productType == 3){
        query = "apple iphone";
    }else if(productType == 4){
        query = "apple ipad";
    }else if(productType == 5){
        query = "apple desktop";
    }
    
    var parturl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
    var format = "&format=json";

    var url = parturl+query+format;
    var summary;
    request(url, function (err, response, body) {
     if(err){
        var error = "Cannot connect to server";
        console.log(err);
    }    else {
        var wiki = JSON.parse(body);
        for (var i = 0; i < wiki[1].length; i++) {
            var wikiOne = wiki[1][i];
            var wikiTwo = wiki[2][i];
            var wikiThree = wiki[3][i];

            var data = " Simmilar products that you can explore: " + wikiOne + " Details - " + wikiTwo + " Follow this link: " + wikiThree + "\n";
            summary += data;
           
        }
        console.log(summary.toString());
        return summary;
        
    }
    });
}






exports.convoOne = convoOne;

exports.convoTwo = convoTwo;
exports.convoThree = convoThree;

exports.greetings = greetings;
