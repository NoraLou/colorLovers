

$(document).ready(function(){
  init();
  resizeSliderWidth();
  // getColor('#3f1952');

});


//set up inital event handlers
function init(){

    // $('#form-container').submit(getColor);

    //use the .on syntax for below to catch dynamically created els too?

    $('.color-overlay').click(function(ev){
        var searchValue = $(this).parent().attr('data-color');
        $('#form-container>input').val(searchValue);
    });

    $('#submit-btn').click(function(ev){

      var currentSearch = $('#colorvalue').val();

      console.log(currentSearch);


      getColor(currentSearch);

      //$('#form-container>input').val('');

    });
};

//var currentSearch =  $('#form-container>input').val()

//console.log(currentSearch);

//$('#form-container').submit(getColor((currentSearch)));



//helper functions to make carousel responsive
function resizeSliderWidth(){
    $( window ).resize(function(){
        getSliderWidth();
        sizeImages();
    });
}

var getSliderWidth = function(){
    var sliderWidth = $('#slider').width()+2
    return sliderWidth;
}

var sizeImages = function(){
 $('.img').each(function(){
    $(this).width(getSliderWidth());
    var imgWidth = $(this).width();
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



function getColor(value){

  var paletteArray =[];
  var baseURL = "http://www.colourlovers.com/api/palettes?"
  var callBack = "&jsonCallback=?"
  var query ;

  if(value == ''){alert("enter a color")
    return;
  };

  if(value.slice(0,1) === '#'){
    query = "hex=" + value.slice(1,value.length);
    console.log(query);
    console.log(typeof(query));
  }else{
    query = "hueOption=" + value;
    console.log(query)
  }
  console.log('IMA FUCKING TIRED');
  console.log(baseURL+query+callBack)

  $.getJSON(baseURL+query+callBack,
    {},
    function(data) {
      console.log(data)
      for(var i = 0; i < data.length; i++){
        if(data[i].hasOwnProperty('colors')){
          paletteArray.push(data[i].colors)
         }
      }
      displayData(paletteArray);
      initCarousel();
    }
  );
};


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
  return false;  //?
};








 // possibly add a class "active" to determine which is on view

//add error handling for the requests .error(is decpreicate)

//********look into error handling for JSNOP requests.

//add a loading function
