function loadData() {

    // $.get('http://www.colourlovers.com/api/palettes?format=json', function(data){
    //     console.log(data);
    // });

    var colorArray = [];

    $.getJSON("http://www.colourlovers.com/api/palettes?jsonCallback=?",
        {},
        function(data) {
            console.log(data)
        }
    );

    console.log("***************colorArray****************")
    console.log(colorArray)


    // $.ajax({
    //     url:'http://www.colourlovers.com/api/palettes/?format=json',
    //     dataType: 'jsonp',
    //     type: 'GET',
    //     success: function(response){
    //         console.log(response);
    //     }
    // });

    return false;


};

$('#form-container').submit(loadData);
