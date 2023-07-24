let url = [":https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=04acb5a8b4056c5cf9ae401ef658f9e8"];

fetch(url).then(function(response) { return response.json()}).then(function(data) { console.log(data)})
console.log(url)