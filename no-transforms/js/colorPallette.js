

$(document).ready(function(){
  init();
  resizeSliderWidth();
  initCarousel();
  //getNumber(10);

  getColor();

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
    //move images off canvas
    $('.img').css({"left": getSliderWidth() + "px"});
    $('.img:not(:first)').addClass('onBottom');

    //move first image on to canvas, place on top
    $('.img').first().css({"left":"0px"});
    $('.img').first().addClass('onTop');

    // $('.img').css(addClass('onBottom')

  };

  resetImages();

  // Slide to next image
  var slideNextImageLeft = function() {
    //set the next image to be waiting in the wing, put it on top
    $('.image-' + nextImage).css({"left": getSliderWidth() + "px"});
    $('.image-' + nextImage).removeClass('onBottom');
    $('.image-' + nextImage).addClass('onTop');

    //put the current image on the bottom,move it left;
    $('.image-' + currentImage).removeClass('onTop');
    $('.image-' + currentImage).addClass('onBottom');
    $('.image-' + currentImage).animate({left: getSliderWidth() * -1}, 1000);

    //add move in the new image
    $('.image-' + nextImage).animate({left: "0px"}, 1000);
    currentImage = nextImage;

    increaseImages();
  };

  // Slide to the previous image
  var slidePreviousImageRight = function() {
    $('.image-' + previousImage).css({"left": (getSliderWidth() * -1)+"px"});
    $('.image-' + previousImage).removeClass('onBottom');
    $('.image-' + previousImage).addClass('onTop');

    $('.image-' + currentImage).removeClass('onTop');
    $('.image-' + currentImage).addClass('onBottom');
    $('.image-' + currentImage).animate({left: getSliderWidth()}, 1000);
    $('.image-' + previousImage).animate({left: "0px"}, 1000);
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
    // console.log("-prev currentImage: ",currentImage);
  });


  $('.carousel-next').click(function() {
    slideNextImageLeft();
    // console.log("+next currentImage: ",currentImage);
  });

};





function loadData() {

  var paletteArray = [];

  $.getJSON("http://www.colourlovers.com/api/palettes?jsonCallback=?",
    {},
    function(data) {
      console.log(data);
      for(var i = 0; i < 5; i++){
        if(data[i].hasOwnProperty('colors')){
          paletteArray.push(data[i].colors)
         }
      }
      displayData(paletteArray);
      initCarousel();
    }
  );
  return false;
};

function getColor(){



}

function getNumber(n){
  $.getJSON("http://www.colourlovers.com/api/palettes?numResults="+ n+ "&jsonCallback=?",
    {},
    function(data) {
     console.log(data)
    }
  );
};


function getColor(){
  $.getJSON("http://www.colourlovers.com/api/palettes?hex=d5a4a4&jsonCallback=?",
    {},
    function(data) {
     console.log(data)
    }
  );
};

//function get New top random







function displayData(arr){
 //create container for palette
  for(var i = 0; i< arr.length; i++){
    var newDiv = document.createElement('div');
    var sequence = Number(i+1)
    $(newDiv).addClass('img image-' + sequence);
    var paletteContainer = document.createElement('div');
    $(paletteContainer).addClass('palette-container');
    $(newDiv).append(paletteContainer);
    $('#slider').append(newDiv);
    //append all colors to palette
    for(var j = 0; j < arr[i].length; j++){
      var colorSample = document.createElement('div');
      $(colorSample).addClass('color-sample')
      var color = arr[i][j]
      $(colorSample).css('background-color', '#'+color).attr('data-color','#'+color)
      var overlay = document.createElement('div');
      $(overlay).addClass('color-overlay').append(
        '<p>'+ $(colorSample).attr('data-color') +'</p>');
      $(colorSample).append(overlay);
      $(paletteContainer).append(colorSample);
    }
  }
  return false;// why do I put this here?
};








 // possibly add a class "active" to determine which is on view

//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
