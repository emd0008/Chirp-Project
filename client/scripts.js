let Chirp = function(message, user, timestamp){
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
}

$(document).ready(function(){
    $.get("http://localhost:3000/api/chirps");
});

function buttonDisable(){
    if(this.value.length > 0){
        document.getElementById('chirp').disabled = false;
    }else{
        document.getElementById('chirp').disabled = true;
    }
}

function isEmpty(){
    if(document.getElementById('chirptext').value === ''){
        alert("Enter something");
    }
}