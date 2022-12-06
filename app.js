//GLOBAL.document = new JSDOM(html).window.document;


function introMessage (){           //intro message pasting 
    let fm = "Hi my name is Charles👋<br> I will be assisting you by recommending you an Apple product perfect for you. Lets get stared, what type of device are you looking for? (Watch, Laptop, Phone, Tablet, PC)?"
    document.getElementById("starter").innerHTML = '<p class = "botmsg"> <span>' + fm + '</span></p>';
}

introMessage();

function getHResponse(usertxt){  // retrive the hard coded responses to send to the getUserResponse function
    let cRes = getBotResponse(usertxt);
    let botHtml = '<p class = "botmsg"><span>' + cRes + '</span></p>';
    $("#chat").append(botHtml);

}

function getUserResponse(){           // get user response and processing it, then pasting the hard coded response 
    let usertxt = $("#usertxt").val();

    if (usertxt== ""){
        usertxt =  "please type something here";
    }

    let userHtml = '<p class = "mine messages"><span>' + usertxt + '</span></p>';

    $("#usertxt").val("");
    $("#chat").append(userHtml);  // jquery is used to append the user text to the chat 

    setTimeout(() =>{                      // timer for how long Charles should think before sending his response
        getHResponse(usertxt);
    }, 1000)

}
function fullSend(){                // when button is pressed, call the function to get a response
    getUserResponse();
}

$("#usertxt").keypress(function(e){  // using jquery to have the function be called everytime the enter key is pressed
    if(e.which == 13){
        getUserResponse();
    }
})

function userInput(){
    let usertxt = $("#usertxt").val();
    return usertxt;
}




