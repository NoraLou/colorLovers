

$(document).ready(function(){
  init();
  resizeSliderWidth();
  initCarousel();

});


//set up inital event handlers
function init(){
    $('#form-container').submit(loadData);

};


//helper functions to make carousel responsive
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




initCarousel = function(){

  var delay = 5000;

  // Set variables
  var numImages = $('.img').length;
  console.log("numImages ", numImages)
  var previousImage = numImages;
  var currentImage = 1;
  var nextImage = 2;

  // make this variable global?
  var sliderWidth = getSliderWidth();
  sizeImages();

  var resetImages = function(){
    $('.img').css({"left": sliderWidth + "px"});
    $('.img').first().css({"left": sliderWidth + "px"});
    $('.1').addClass("active");
  };

  resetImages();

  var slideNextImageLeft = function(){
    $('.image-' + nextImage).css({"left:" sliderWidth + "px"});
    $('.image-' + currentImage).animate({left: sliderWidth * -1}, 1000);
    $('.image-' + nextImage).animate({left: "0px"}, 1000);
    currentImage = nextImage;
    increaseImages();
  };

  // Slide to the previous image
  var slidePreviousImageRight = function() {
    $('.image-' + previousImage).css({"left": (sliderWidth * -1)+"px"});
    $('.image-' + currentImage).animate({left: sliderWidth}, 1000);
    $('.image-' + previousImage).animate({left: "0px"}, 1000);
    currentImage = previousImage;
    increaseImages();
  };








};





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


 // possibly add a class "active" to determine which is on view

//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
