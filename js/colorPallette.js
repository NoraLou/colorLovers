

$(document).ready(function(){
  init();



});

var paletteArray = [];


function displayPalettes(arr){

  for(var i=0; i<arr.length; i++){





  }

}













function loadData() {

    $.getJSON("http://www.colourlovers.com/api/palettes?jsonCallback=?",
        {},
        function(data) {
            console.log(data);

            for(var i = 0; i < 5; i++){
                if(data[i].hasOwnProperty('colors')){
                    paletteArray.push(data[i].colors)
                }
            }
            console.log(paletteArray);
        }
    );



    return false;
};


//set up inital event handlers
function init(){
    $('#form-container').submit(loadData);

};


//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
