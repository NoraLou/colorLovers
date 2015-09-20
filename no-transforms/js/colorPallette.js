

$(document).ready(function(){
  init();
  resizeSliderWidth();
  initCarousel();

});


//need a resize window function that on window resize will adjust slider width;



//set up inital event handlers
function init(){
    $('#form-container').submit(loadData);

};


function resizeSliderWidth(){
    $( window ).resize(function(){
        getSliderWidth();
        sizeImages();
    });
}

var getSliderWidth = function(){
    var sliderWidth = $('#slider').width()+2
    console.log('sliderWidth ', sliderWidth);
    return sliderWidth;
}

var sizeImages = function(){
 $('.img').each(function(){
    $(this).width(getSliderWidth());
    var imgWidth = $(this).width();
    console.log("imgWidth ", imgWidth)
 })
};


// $('.fan').each(function(){
//         $(this).height(window.innerHeight-25);




initCarousel = function(){

  //var delay = 5000;

  // Set variables
  var numImages = $('.img').length;
  var previousImage = numImages;
  var currentImage = 1;
  var nextImage = 2;

  // Find width of container div


  //Find width of palette img in container
        // possibly add a class "active" to determine which is on view
  // var listimgWidth = $('.img .img-1').width();
  // console.log('.imges ', listimgWidth);




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
// function displayData(arr){


// }




















































//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
