(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(updateWeather)
		
		
		
	function updateWeather(data){
		var results = JSON.parse(data)
		var weatherElem = $('#weather')
		var tempK = results.main.temp
		var tempF = tempK * (9/5) -459.67
		var tempC = (tempF - 32) * (5/9)
		tempC= Math.ceil(tempC)
		tempF= Math.ceil(tempF)
		var weatherTemplate = '';
		weatherTemplate += `
		<div class="card">
			<h2>${results.name}</h2>
			
			
			<img src="http://openweathermap.org/img/w/${results.weather[0].icon}.png">
			<h3>${results.weather[0].description}</h3>
			<button type="btn" id="buttonC"><h1 id="c">${tempC} C</h1></button>
			<button type="btn" id="buttonF"><h1 id ="f">${tempF} F</h1></button>		
		</div>
		
		`
		weatherElem.append(weatherTemplate)
		$('#buttonC').hide();

		$('#buttonC').on('click', function(e){
			e.preventDefault();
			$('#buttonF').hide();
			$('#buttonC').show();
		})

		$('#buttonF').on('click', function(e){
			e.preventDefault();
			$('#buttonC').hide();
			$('#buttonF').show();
		})
	}
	
	
	
	
	
}())
