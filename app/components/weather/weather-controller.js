(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(updateWeather)
		
		
		
	function updateWeather(data){
		var results = JSON.parse(data)
		var weatherElem = $('#weather')
		var weatherTemplate = '';
		weatherTemplate += `
		<div class="card">
			<h2>${results.name}</h2>
			<h1>${results.main.temp}</h1>
			<img src="http://openweathermap.org/img/w/${results.weather[0].icon}.png">
			<h3>${results.weather[0].description}</h3>
		</div>
		
		`
		weatherElem.append(weatherTemplate)
	}
	
	
	
	
	
}())
