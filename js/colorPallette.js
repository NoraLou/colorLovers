

$(document).ready(function(){
  init();
});


var paletteArray = [];
var carousel = $('#carousel');

var container = document.getElementById('carousel').querySelector('.carousel-container')

var totalItems = $('.carousel-item').length;

var percent = (100/totalItems);

var currentIndex = 0;



$('.carousel-prev').on('click', function(){
    slideTo(currentIndex-1);
});

$('.carousel-next').on('click', function(){
    slideTo(currentIndex + 1);
});


//set up inital event handlers
function init(){
    $('#form-container').submit(loadData);

};

function slideTo(index){
    index = index < 0 ? totalItems -1 : index >= totalItems ? 0 : index;
    container.style = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    // add webkit and firefox prefix
    currentIndex = index;
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



// takes an array of objects
function displayData(arr){


}




















































//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
