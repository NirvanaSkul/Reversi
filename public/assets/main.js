function getIRIParameterValue(requestedKey){
    let pageIRI = windown.location.search.substring(1);
    let pageIRIVariables = pageIRI.split('&');
    for(let i = 0 ; i < pageIRIVariables.length; i++){
        let data = pageIRIVariables[i].split('=');
        let key = data[0];
        let value = data[1];
        if (key === requestedKey){
            return value;
        }
    }
}

let username = getIRIParameterValue('username');
if ((typeof username == 'undefined') || (username === null)){
    username = "Anonymous_"+Math.floor(Math.random()*1000);
}

$('#some').prepend('<b>'+username+':</b>');