document.getElementById("encrypt").addEventListener("click", encrypt, false);
document.getElementById("decrypt").addEventListener("click", decrypt, false);


  // The way this encryption program works, is by making any keyinput the size of the message.
function keyFormat(key){
    key = document.getElementById("key").value.toUpperCase();
    let message = document.getElementById("message").value;
    result = '';

    if(key.length == message.length){
        return key;
    }
    else{
        for(let i = 0; i < message.length; i++){
            result += key.charAt(i % key.length);
        }
        key = result;
        return key;
    }
}

function encrypt(){
    let key = document.getElementById("key").value;
    let message = document.getElementById("message").value;

    if(key === ""){
        document.getElementById("output").innerText = "Please Enter a Key.";
    }
    if(message === ""){
        document.getElementById("output").innerText = "Please Enter a Message.";
    }

    key = (keyFormat(key));
    let result = '';

    //Converts string to ASCII Array. Uses Push to insert into stack.
    for(let i = 0; i < message.length; i++){
        if((message[i] == " ")) 
            result += " ";
        else if(message[i].charCodeAt() == 10){
            result += String.fromCharCode(10);
        }
        else if(((message[i].charCodeAt()) + (key[i].charCodeAt() - 64)) <= 126){
            temp = (message[i].charCodeAt()) + (key[i].charCodeAt() - 64);
            result += String.fromCharCode(temp);
        }
        else {
            temp = ((message[i].charCodeAt()) + (key[i].charCodeAt() - 64)) - 94;
            result += String.fromCharCode(temp);
        }
    }
    document.getElementById("output").innerText = result;
}


function decrypt()
{
    let key = document.getElementById("key").value;
    if(key === ""){
        document.getElementById("output").innerText = "Please Enter a Key.";
    }
    
    let message = document.getElementById("message").value;
    if(message === ""){
        document.getElementById("output").innerText = "Please Enter a Message.";
    }
   
    key = (keyFormat(key));
    let result = '';

    //Converts string to ASCII Array. Uses Push to insert into stack.
    for(let i = 0; i < message.length; i++){
        if((message[i] == " ")) 
            result += " ";
        else if(message[i].charCodeAt() == 10){
            result += String.fromCharCode(10);
        }
        else if(((message[i].charCodeAt()) - (key[i].charCodeAt() - 64)) >= 32){
            temp = (message[i].charCodeAt()) - (key[i].charCodeAt() - 64);
            result += String.fromCharCode(temp);
        }
        else {
            temp = ((message[i].charCodeAt()) - (key[i].charCodeAt() - 64)) + 94;
            result += String.fromCharCode(temp);
        }
    }
    document.getElementById("output").innerText = result;
}

