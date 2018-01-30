console.log('connected')

var cityNames = ['nyc','la','austin','sydney',"sf"]
var optionTags = ""
cityNames.forEach(function(name){
  optionTags += "<option>" + name.toUpperCase() + "</option>"
})
  $('#city-type').append(optionTags)

  $('#city-type').change(function(){
    $('body').addClass('nyc')
  })
