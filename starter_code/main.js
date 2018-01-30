console.log('connected')
// Create array
var cityNames = ['nyc','la','austin','sydney',"sf"]
var optionTags = ""
//Insert arry into option tags into html code
cityNames.forEach(function(name){
  optionTags += "<option>" + name.toUpperCase() + "</option>"
})

$('#city-type').append(optionTags)
//Create event triggered by the changed form
$('#city-type').change(function(event){
  event.preventDefault()
  var userInput = $('#city-type').val().toLowerCase()
  //Removing the reminant class name
    $('body').removeClass()
  if (userInput === 'nyc') {
  // Add new className and change background using css class
    $('body').addClass(cityNames[0])
  } else if (userInput === cityNames[1]) {
    $('body').addClass('la')
  } else if (userInput === cityNames[2]) {
    $('body').addClass('austin')
  } else if (userInput === cityNames[3]) {
    $('body').addClass('sydney')
  } else if (userInput === cityNames[4]) {
    $('body').addClass('sf')
  }
  })
