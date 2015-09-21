

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
    // console.log('sliderWidth ', sliderWidth);
    return sliderWidth;
}

var sizeImages = function(){
 $('.img').each(function(){
    $(this).width(getSliderWidth());
    var imgWidth = $(this).width();
    // console.log("imgWidth ", imgWidth)
 })
};




initCarousel = function(){

  // var delay = 5000;


  var numImages = $('.img').length;
  var previousImage = numImages;
  var currentImage = 1;
  var nextImage = 2;

  var sliderWidth = getSliderWidth();
  sizeImages();


  var resetImages = function(){
    $('.img').css({"left": getSliderWidth() + "px"});
    $('.img').first().css({"left":"0px"});
    // $('.1').addClass("active");
  };

  resetImages();

  // Slide to next image
  var slideNextImageLeft = function() {
    $('.image-' + nextImage).css({"left": getSliderWidth() + "px"});
    $('.image-' + currentImage).animate({left: getSliderWidth() * -1}, 1000);
    $('.image-' + nextImage).animate({left: "0px"}, 1000);
    currentImage = nextImage;
    increaseImages();
  };


  var slidePreviousImageRight = function() {
    $('.image-' + previousImage).css({"left": (getSliderWidth() * -1)+"px"});
    $('.image-' + currentImage).animate({left: getSliderWidth() }, 1000);
    $('.image-' + previousImage).animate({left: "0px"}, 1000);
    currentImage = previousImage;
    increaseImages();
  };


  // Slide to the previous image
  var slidePreviousImageRight = function() {

    $('.image-' + previousImage).css({"left": (getSliderWidth() * -1)+"px"});

    $('.image-' + currentImage).animate({left: getSliderWidth() }, 1000);
    // $('.image-' + currentImage).

    // $('.image-' + previousImage).animate({left: "0px"}, 1000);
    currentImage = previousImage;
    increaseImages();
  };

   var increaseImages = function() {
    if(currentImage === numImages) {
      nextImage = 1;
      previousImage = currentImage - 1;
    } else {
      nextImage = currentImage + 1;
      if(currentImage === 1) {
        previousImage = numImages;
      } else {
        previousImage = currentImage - 1;
      }
    }
  };

  // When previous button is clicked
  $('.carousel-prev').click(function() {
    slidePreviousImageRight();
    console.log("-prev currentImage: ",currentImage);
  });


  $('.carousel-next').click(function() {
    slideNextImageLeft();
    console.log("+next currentImage: ",currentImage);
  });


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
