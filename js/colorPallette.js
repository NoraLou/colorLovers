


var paletteArray = [];

function loadData() {

    $.getJSON("http://www.colourlovers.com/api/palettes?jsonCallback=?",
        {},
        function(data) {
            console.log(data);

            for(var i = 0; i< data.length; i++){
                if(data[i].hasOwnProperty('colors')){
                    paletteArray.push(data[i].colors)
                }
            }
            console.log(paletteArray);
        }
    );

    return false;

};


$('#form-container').submit(loadData);


//add error handling for the requests

//add a loading function
