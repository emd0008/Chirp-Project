let $chirpcontainer = $("#chirp-container");
let $chirptext = $("#chirptext");
$("#chirp").click(postChirp);
getChirps();

function getChirps(){
    $.ajax({
        method: 'GET',
        url: '/api/chirps'
    }).then((chirps) => {
        for(let i = 0; i < chirps.length; i++){
            renderChirp(chirps[i]);        
        }
    }).catch((err) => {
        console.error(err);
    });
}

function postChirp(){
    let payload = {
        message: $chirptext.val(),
        user: 'Emily',
        timestamp: new Date().toISOString()
    };

    $.ajax({
        method: "POST",
        url: "/api/chirps",
        contentType: "application.json",
        data: JSON.stringify(payload)
    }).then(() => {
        renderChirp(payload);
    }).catch((err) => {
        console.error(err);
    })
}

function renderChirp(chirp){
    let $chirpDiv = $('<div class="chirp"></div>');
    $chirpDiv.append("<p>" + chirp.message + "</p>");
    $chirpcontainer.append($chirpDiv);
}