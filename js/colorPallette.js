




var paletteArray = [];
var carousel = $('#carousel');


//var container = document.getElementsById('#carousel-container');

var container = document.getElementById('carousel').querySelector('.carousel-container')





// var container = $('.carousel-container');

var totalItems = $('.carousel-item').length;

var percent = (100/totalItems);

var currentIndex = 0;


// $("#movementColumn").on("click", ".fan .stats_overlay", function(){

//             var movement = $(this).prev().attr("data-id")
//             transitionToArtists(movement);
//             addArtwork("/api/artists",{"data":movement}, "artistContainer");

//             var display_movement = $(this).prev().attr("data-name");

//             if ( $('#breadcrumbs').children().length > 1 ){
//                 $('#breadcrumbs span:last-child')[0].remove();
//                 }

//             $('#breadcrumbs').append("<span>"+ display_movement +"</span>");
//         });



// carousel.querySelector('.carousel-prev').addEventListener('click', prev, false);
// carousel.querySelector('.carousel-next').addEventListener('click', next, false);

// $("#columnWrapper>li").css({
//                     "position":"absolute",
//                     "width":"100%"
//                 });


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

function next(){
    slideTo(currentIndex + 1);
}

function prev(){
    slideTo(currentIndex -1);
}

function slideTo(index){
    index = index < 0 ? totalItems -1 : index >= totalItems ? 0 : index;
    container.style = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
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


$(document).ready(function(){
  init();
});






//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
